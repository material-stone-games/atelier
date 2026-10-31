import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import type { AccessLevel, AuthState, Comment, Game, Post, TargetType } from "./types";
import { AdminTools } from "./AdminTools";
import { PrivacyPage } from "./PrivacyPage";
import { accessLabel, accessPermission, rotationForGames } from "./lib/access";
import { APP_BASE_PATH } from "./lib/config";
import {
  createComment,
  createOrUpdateGameDraft,
  createPost,
  deleteComment,
  deletePost,
  findGameById,
  findGameByTitle,
  getConfiguredDiscordUrl,
  getConfiguredYoutubeUrl,
  getDisplayName,
  getPlaySession,
  hasFirebaseConfig,
  signInWithGoogle,
  signOutUser,
  subscribeToAuth,
  subscribeToComments,
  subscribeToGames,
  subscribeToPosts,
  toggleLike,
  uploadBoardImage,
  uploadFile,
  verifyYoutubeSubscription,
} from "./lib/services";
import {
  MAX_BUILD_BYTES,
  MAX_COMMENT_LENGTH,
  MAX_POST_LENGTH,
  normalizeTitle,
  validateBuild,
  validateCommentText,
  validateImage,
  validatePostText,
} from "./lib/validation";

const discordUrl = getConfiguredDiscordUrl();

const initialAuth: AuthState = {
  user: null,
  profile: null,
  isAdmin: false,
  isSubscriber: false,
  isMember: false,
  loading: true,
};

export function App() {
  const [auth, setAuth] = useState<AuthState>(initialAuth);
  const [games, setGames] = useState<Game[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => subscribeToAuth(setAuth), []);
  useEffect(() => subscribeToGames(setGames), []);
  useEffect(() => subscribeToPosts(setPosts), []);

  return (
    <BrowserRouter basename={APP_BASE_PATH}>
      <AppShell auth={auth} games={games} posts={posts} />
    </BrowserRouter>
  );
}

function AppShell({ auth, games, posts }: { auth: AuthState; games: Game[]; posts: Post[] }) {
  const [notice, setNotice] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setNotice(null);
  }, [location.pathname]);

  const notify = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(null), 5000);
  };

  return (
    <div className="app-shell">
      <Header auth={auth} onNotify={notify} />
      <main className="page-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hub" element={<HubPage games={games} posts={posts} />} />
          <Route path="/hub/community" element={<CommunityPage auth={auth} posts={posts} onNotify={notify} />} />
          <Route path="/hub/game/:gameId" element={<GamePage auth={auth} games={games} onNotify={notify} />} />
          <Route path="/hub/admin" element={<AdminPage auth={auth} games={games} onNotify={notify} />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      {notice ? <div className="toast" role="status">{notice}</div> : null}
    </div>
  );
}

function Header({ auth, onNotify }: { auth: AuthState; onNotify: (message: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  async function handleAuth() {
    try {
      if (auth.user) {
        await signOutUser();
        onNotify("로그아웃했습니다.");
      } else {
        await signInWithGoogle();
        onNotify("Google 로그인에 성공했습니다.");
      }
    } catch (error) {
      onNotify(error instanceof Error ? error.message : "로그인에 실패했습니다.");
    }
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Atelier home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-copy">
            <strong>atelier</strong>
            <small>material stone games</small>
          </span>
        </Link>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen}>
          <span /><span /><span />
          <span className="sr-only">메뉴 열기</span>
        </button>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="주요 메뉴">
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/hub" onClick={() => setMenuOpen(false)}>Hub</NavLink>
          <NavLink to="/hub/community" onClick={() => setMenuOpen(false)}>Community</NavLink>
        </nav>
        <div className={`header-actions ${menuOpen ? "is-open" : ""}`}>
          <a href={getConfiguredYoutubeUrl()} target="_blank" rel="noreferrer">YouTube <span aria-hidden="true">↗</span></a>
          {discordUrl ? <a href={discordUrl} target="_blank" rel="noreferrer">Discord <span aria-hidden="true">↗</span></a> : null}
          {auth.isAdmin ? <button className="admin-link" type="button" onClick={() => navigate("/hub/admin")}>Admin</button> : null}
          <button className="auth-button" type="button" onClick={handleAuth}>
            {auth.user ? <><span className="avatar-dot">{getDisplayName(auth.user).slice(0, 1).toUpperCase()}</span> Sign out</> : "Sign in with Google"}
          </button>
        </div>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero section-frame">
        <div className="hero-copy">
          <p className="eyebrow">MATERIAL STONE / DIGITAL WORKSHOP</p>
          <h1>Play what we<br /><em>are making.</em></h1>
          <p className="hero-lede">Atelier는 Material Stone Games가 만드는 게임과 작은 실험들을 모아두는 작업실입니다. 완성된 게임부터 아직 흔들리는 프로토타입까지, 지금 여기서 만나보세요.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/hub">Explore the hub <span aria-hidden="true">→</span></Link>
            {discordUrl
              ? <a className="button button-quiet" href={discordUrl} target="_blank" rel="noreferrer">Join the community</a>
              : <Link className="button button-quiet" to="/hub/community">Join the community</Link>}
          </div>
          <div className="hero-meta"><span className="live-dot" /> Open studio <span className="meta-divider" /> Seoul / worldwide</div>
        </div>
        <div className="hero-art" aria-label="Atelier abstract mark" role="img">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="stone-block stone-main"><span>MS</span></div>
          <div className="stone-block stone-small" />
          <span className="art-label">01<br /><small>PLAY / MAKE / REPEAT</small></span>
          <span className="art-coordinate">37°33'N<br />126°59'E</span>
        </div>
      </section>
      <section className="intro-strip section-frame">
        <div className="strip-label">THE ATELIER NOTE</div>
        <p>We make games to find the shape of an idea. The hub is where those ideas become playable.</p>
        <Link to="/hub">Browse all projects <span aria-hidden="true">↗</span></Link>
      </section>
      <section className="home-cards section-frame">
        <InfoCard index="01" title="Public builds" text="누구나 바로 플레이할 수 있는 공개 게임." tone="orange" />
        <InfoCard index="02" title="Member demos" text="Google 로그인으로 한 단계 더 깊은 데모." tone="blue" />
        <InfoCard index="03" title="Prototype room" text="채널 구독자에게 열리는 가장 이른 실험." tone="green" />
      </section>
    </div>
  );
}

function InfoCard({ index, title, text, tone }: { index: string; title: string; text: string; tone: string }) {
  return <article className={`info-card ${tone}`}><span className="card-index">{index}</span><h2>{title}</h2><p>{text}</p><span className="card-arrow" aria-hidden="true">↗</span></article>;
}

function HubPage({ games, posts }: { games: Game[]; posts: Post[] }) {
  const [filter, setFilter] = useState("All");
  const genres = useMemo(() => ["All", ...Array.from(new Set(games.flatMap((game) => game.genres)))], [games]);
  const visibleGames = games.filter((game) => filter === "All" || game.genres.includes(filter));
  const rotation = useMemo(() => rotationForGames(games), [games]);

  return (
    <div className="hub-page page-container">
      <section className="page-heading">
        <div><p className="eyebrow">THE PLAYABLE CATALOGUE</p><h1>Atelier <em>Hub</em></h1></div>
        <p className="heading-note">Games, demos, and unfinished thoughts.<br />Pick a card and step inside.</p>
      </section>
      <div className="hub-toolbar">
        <div className="filter-row" aria-label="장르 필터">
          {genres.map((genre) => <button key={genre} className={`filter-chip ${filter === genre ? "active" : ""}`} type="button" onClick={() => setFilter(genre)}>{genre}</button>)}
        </div>
        <span className="catalogue-count">{visibleGames.length.toString().padStart(2, "0")} projects</span>
      </div>
      <div className="game-grid">
        {visibleGames.map((game, index) => <GameCard game={game} index={index} freeThisWeek={rotation.has(game.id)} key={game.id} />)}
      </div>
      <section className="community-banner">
        <div><p className="eyebrow">FROM THE COMMUNITY</p><h2>What are you playing?</h2><p>작업실의 소식과 플레이어들의 이야기를 나눠보세요.</p></div>
        <div className="banner-stat"><strong>{posts.length.toString().padStart(2, "0")}</strong><span>recent notes</span></div>
        <Link className="button button-primary" to="/hub/community">Open board <span aria-hidden="true">→</span></Link>
      </section>
    </div>
  );
}

function GameCard({ game, index, freeThisWeek }: { game: Game; index: number; freeThisWeek: boolean }) {
  const accent = ["accent-orange", "accent-blue", "accent-green"][index % 3];
  return (
    <Link className={`game-card ${accent}`} to={`/hub/game/${game.id}`}>
      <div className="game-card-art" style={game.coverUrl ? { backgroundImage: `url(${game.coverUrl})` } : undefined}>
        <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="access-pill">{freeThisWeek ? "FREE THIS WEEK" : accessLabel(game.accessLevel)}</span>
        <span className="card-open" aria-hidden="true">↗</span>
      </div>
      <div className="game-card-copy"><div><h2>{game.title}</h2><p>{game.genres.join(" / ")}</p></div><span className="like-count">♡ {game.likeCount}</span></div>
    </Link>
  );
}

function CommunityPage({ auth, posts, onNotify }: { auth: AuthState; posts: Post[]; onNotify: (message: string) => void }) {
  return (
    <div className="community-page page-container">
      <section className="page-heading compact"><div><p className="eyebrow">FIELD NOTES / COMMUNITY</p><h1>Community <em>board</em></h1></div><p className="heading-note">짧은 글과 한 장의 이미지로<br />작업실에 흔적을 남겨주세요.</p></section>
      <PostComposer auth={auth} onNotify={onNotify} />
      <div className="post-list">{posts.map((post) => <PostCard key={post.id} post={post} auth={auth} onNotify={onNotify} />)}</div>
      <p className="retention-note"><span aria-hidden="true">✳</span> 게시글은 한 달 뒤 정리되며, 매월 좋아요 10개 이상인 1위 글은 작업실에 남습니다.</p>
    </div>
  );
}

function PostComposer({ auth, onNotify }: { auth: AuthState; onNotify: (message: string) => void }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!auth.user) return onNotify("글을 작성하려면 Google 로그인이 필요합니다.");
    const textError = validatePostText(text);
    if (textError) return onNotify(textError);
    if (image) {
      const imageError = validateImage(image);
      if (imageError) return onNotify(imageError);
    }
    setSaving(true);
    try {
      const result = await createPost(text.trim(), Boolean(image));
      if (image && result.imagePath) {
        await uploadBoardImage(result.postId, image);
      }
      setText("");
      setImage(null);
      const input = document.getElementById("post-image") as HTMLInputElement | null;
      if (input) input.value = "";
      onNotify("게시글을 올렸습니다.");
    } catch (error) {
      onNotify(error instanceof Error ? error.message : "게시글을 올리지 못했습니다.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className="post-composer" onSubmit={submit}>
      <div className="composer-avatar">{auth.user ? getDisplayName(auth.user).slice(0, 1).toUpperCase() : "?"}</div>
      <div className="composer-fields"><textarea value={text} onChange={(event) => setText(event.target.value)} placeholder={auth.user ? "작업실에 남길 짧은 메모" : "Google 로그인 후 메모를 남길 수 있어요."} maxLength={MAX_POST_LENGTH} disabled={!auth.user || saving} /><div className="composer-footer"><label className="file-label" htmlFor="post-image">＋ image<input id="post-image" type="file" accept="image/jpeg,image/png,image/webp" disabled={!auth.user || saving} onChange={(event) => setImage(event.target.files?.[0] ?? null)} /></label><span className="character-count">{text.length} / {MAX_POST_LENGTH}</span><button className="button button-primary small" type="submit" disabled={!auth.user || saving}>{saving ? "Posting…" : "Post note"}</button></div>{image ? <span className="file-selected">{image.name}</span> : null}</div>
    </form>
  );
}

function PostCard({ post, auth, onNotify }: { post: Post; auth: AuthState; onNotify: (message: string) => void }) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likeCount);
  return (
    <article className="post-card">
      <div className="post-card-head"><div className="post-author"><span className="author-avatar">{post.authorName.slice(0, 1).toUpperCase()}</span><div><strong>{post.authorName}</strong><time>{formatDate(post.createdAt)}</time></div></div><span className={`retention-badge ${post.retentionStatus}`}>{post.retentionStatus === "preserved" ? "preserved" : "field note"}</span></div>
      <p className="post-text">{post.text}</p>
      {post.imageUrl ? <img className="post-image" src={post.imageUrl} alt="게시글 첨부 이미지" /> : null}
      <div className="post-card-actions"><button className={liked ? "action-button active" : "action-button"} type="button" onClick={async () => { if (!auth.user) return onNotify("좋아요를 누르려면 Google 로그인이 필요합니다."); try { const result = await toggleLike("post", post.id); setLiked(result.liked); setLikeCount(result.likeCount); } catch (error) { onNotify(error instanceof Error ? error.message : "좋아요 처리에 실패했습니다."); } }}>♡ {likeCount}</button><button className="action-button" type="button" onClick={() => setExpanded((value) => !value)}>◌ {post.commentCount || "Comment"}</button>{canDelete(auth, post.authorId) ? <button className="action-button danger" type="button" onClick={() => confirmDelete("이 게시글과 댓글을 모두 삭제할까요?", () => deletePost(post.id), "게시글을 삭제했습니다.", onNotify)}>Delete</button> : null}<span className="post-date">{post.monthKey}</span></div>
      {expanded ? <CommentThread targetType="post" targetId={post.id} auth={auth} onNotify={onNotify} /> : null}
    </article>
  );
}

function GamePage({ auth, games, onNotify }: { auth: AuthState; games: Game[]; onNotify: (message: string) => void }) {
  const { gameId = "" } = useParams();
  const [game, setGame] = useState<Game | null>(games.find((item) => item.id === gameId) ?? null);
  const [playUrl, setPlayUrl] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [playStatus, setPlayStatus] = useState<"idle" | "loading" | string>("idle");
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(game?.likeCount ?? 0);
  const [verifying, setVerifying] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let alive = true;
    if (!game || game.id !== gameId) {
      findGameById(gameId).then((result) => { if (alive) setGame(result); });
    }
    return () => { alive = false; };
  }, [gameId, game]);

  useEffect(() => {
    setLikeCount(game?.likeCount ?? 0);
  }, [game?.likeCount]);

  const rotation = rotationForGames(games);
  const permission = game ? accessPermission(game, auth, rotation) : { allowed: false as const };
  const loadedGameId = game?.id;

  // Open the build as soon as the visitor is known to have access; locked games stay on the black screen.
  useEffect(() => {
    setPlaying(false);
    setPlayUrl(null);
    setPlayStatus("idle");
    if (loadedGameId && !auth.loading && permission.allowed) void startPlaying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadedGameId, auth.loading, permission.allowed]);

  if (!game) return <EmptyState title="Game not found" text="이 작업물은 아직 공개되지 않았거나 주소가 잘못되었습니다." />;

  const freeThisWeek = game.accessLevel === "subscriber" && rotation.has(game.id);
  async function startPlaying() {
    if (!game) return;
    if (!permission.allowed) {
      if (permission.reason === "login") return onNotify("이 게임은 Google 로그인 후 플레이할 수 있습니다.");
      if (permission.reason === "member") return onNotify("이 얼리 액세스 빌드는 채널 멤버십 회원에게만 열립니다.");
      return onNotify("이 프로토타입은 YouTube 채널 구독 확인 후 열립니다.");
    }
    if (!hasFirebaseConfig) {
      const demoPlayPath = game?.demoPlayPath;
      setPlayUrl(demoPlayPath ? `${import.meta.env.BASE_URL}${demoPlayPath}` : null);
      setPlaying(true);
      setPlayStatus("idle");
      if (!demoPlayPath) onNotify("Firebase 운영값을 연결하면 실제 웹빌드가 이곳에서 열립니다.");
      return;
    }
    setPlayStatus("loading");
    try {
      const session = await getPlaySession(game.id);
      if (!session.playUrl) throw new Error("플레이 세션을 만들지 못했습니다.");
      setPlayUrl(session.playUrl);
      setPlaying(true);
      setPlayStatus("idle");
    } catch (error) {
      setPlayStatus(error instanceof Error ? error.message : "게임을 열지 못했습니다.");
    }
  }

  async function verifySubscriber() {
    if (!auth.user) return onNotify("먼저 Google 로그인을 해주세요.");
    setVerifying(true);
    try {
      await verifyYoutubeSubscription();
      onNotify("구독 확인이 완료되었습니다. 이제 프로토타입을 플레이할 수 있습니다.");
    } catch (error) {
      onNotify(error instanceof Error ? error.message : "구독 확인에 실패했습니다.");
    } finally {
      setVerifying(false);
    }
  }

  return (
    <div className="game-page page-container">
      <Link className="back-link" to="/hub">← Back to hub</Link>
      <section className="game-detail-heading"><div className={game.coverUrl ? "game-detail-art has-cover" : "game-detail-art"} style={game.coverUrl ? { backgroundImage: `url(${game.coverUrl})` } : undefined} /><div className="game-detail-copy"><p className="eyebrow">PROJECT / {game.buildStatus.toUpperCase()}</p><h1>{game.title}</h1><p className="game-detail-description">{game.description || "Material Stone Games의 플레이 가능한 작업물입니다. 지금의 빌드에서 다음 아이디어를 만나보세요."}</p><div className="tag-row">{game.genres.map((genre) => <span className="tag" key={genre}>{genre}</span>)}<span className={`tag access-tag ${game.accessLevel}`}>{accessLabel(game.accessLevel)}</span>{freeThisWeek ? <span className="tag access-tag public">FREE THIS WEEK</span> : null}</div><div className="detail-actions"><button className="button button-primary" type="button" onClick={startPlaying}>{playing ? "Restart build" : "Play build"} <span aria-hidden="true">→</span></button><button className={liked ? "button button-like active" : "button button-like"} type="button" onClick={async () => { if (!auth.user) return onNotify("좋아요를 누르려면 Google 로그인이 필요합니다."); try { const result = await toggleLike("game", game.id); setLiked(result.liked); setLikeCount(result.likeCount); } catch (error) { onNotify(error instanceof Error ? error.message : "좋아요 처리에 실패했습니다."); } }}>♡ {likeCount}</button></div></div></section>
      {!permission.allowed && permission.reason === "member" ? <div className="verification-callout"><div><strong>Early access is for members.</strong><p>Material Stone 채널 멤버십 회원에게 먼저 열리는 빌드입니다. 멤버십 확인은 운영자가 처리합니다.</p></div><a href={getConfiguredYoutubeUrl()} target="_blank" rel="noreferrer">Open channel ↗</a></div> : null}
      {!permission.allowed && permission.reason === "subscriber" && auth.user ? <div className="verification-callout"><div><strong>Prototype room is locked.</strong><p>Material Stone YouTube 채널 구독을 확인하면 이 빌드가 열립니다.</p></div><button className="button button-quiet" type="button" onClick={verifySubscriber} disabled={verifying}>{verifying ? "Checking…" : "Verify subscription"}</button><a href={getConfiguredYoutubeUrl()} target="_blank" rel="noreferrer">Open channel ↗</a></div> : null}
      {playing ? <PlaySurface playUrl={playUrl} playerRef={playerRef} /> : <PlayScreen message={playScreenMessage(auth, permission, playStatus)} locked={!auth.loading && !permission.allowed} />}
      <section className="comments-section"><div className="section-title-row"><div><p className="eyebrow">PLAYTEST NOTES</p><h2>Comments</h2></div><span className="comment-rule">01 / 01</span></div><CommentThread targetType="game" targetId={game.id} auth={auth} onNotify={onNotify} /></section>
    </div>
  );
}

function playScreenMessage(auth: AuthState, permission: ReturnType<typeof accessPermission>, status: string): string {
  if (auth.loading) return "접근 권한을 확인하는 중입니다…";
  if (!permission.allowed) {
    if (permission.reason === "login") return "Google 로그인 후 플레이할 수 있는 게임입니다.";
    if (permission.reason === "member") return "채널 멤버십 회원에게만 열리는 얼리 액세스 빌드입니다.";
    return auth.user ? "YouTube 채널 구독을 확인하면 플레이할 수 있습니다." : "Google 로그인 후 YouTube 채널 구독을 확인하면 플레이할 수 있습니다.";
  }
  if (status === "loading" || status === "idle") return "게임을 불러오는 중입니다…";
  return status;
}

function PlayScreen({ message, locked }: { message: string; locked: boolean }) {
  return <div className="play-screen" role="status">{locked ? <span className="play-screen-kicker">LOCKED</span> : null}<p>{message}</p></div>;
}

function PlaySurface({ playUrl, playerRef }: { playUrl: string | null; playerRef: React.RefObject<HTMLDivElement | null> }) {
  const [fullscreen, setFullscreen] = useState(false);
  useEffect(() => {
    const sync = () => setFullscreen(document.fullscreenElement === playerRef.current);
    document.addEventListener("fullscreenchange", sync);
    return () => document.removeEventListener("fullscreenchange", sync);
  }, [playerRef]);
  function toggleFullscreen() {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void playerRef.current?.requestFullscreen?.();
  }
  return <div className="play-surface" ref={playerRef}><div className="play-surface-top"><span>ATELIER PLAYER / LIVE BUILD</span><button className="fullscreen-toggle" type="button" onClick={toggleFullscreen} aria-label={fullscreen ? "전체화면 종료" : "전체화면"} title={fullscreen ? "전체화면 종료" : "전체화면"}><FullscreenIcon exit={fullscreen} /></button></div>{playUrl ? <iframe title="Atelier game build" src={playUrl} allow="fullscreen; gamepad; pointer-lock; autoplay" sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock" /> : <div className="demo-frame"><span className="live-dot" /><strong>Build gateway connected</strong><p>Firebase 환경변수를 연결하면 업로드된 게임이 이 프레임에서 실행됩니다.</p></div>}</div>;
}

function FullscreenIcon({ exit }: { exit: boolean }) {
  const corners = exit ? "M6 2v4H2M10 2v4h4M6 14v-4H2M10 14v-4h4" : "M2 6V2h4M14 6V2h-4M2 10v4h4M14 10v4h-4";
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d={corners} /></svg>;
}

function CommentThread({ targetType, targetId, auth, onNotify }: { targetType: TargetType; targetId: string; auth: AuthState; onNotify: (message: string) => void }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState("");
  const [replyTo, setReplyTo] = useState<string | undefined>();
  useEffect(() => subscribeToComments(targetType, targetId, setComments), [targetId, targetType]);
  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!auth.user) return onNotify("댓글을 쓰려면 Google 로그인이 필요합니다.");
    const error = validateCommentText(text);
    if (error) return onNotify(error);
    try {
      await createComment(targetType, targetId, text.trim(), replyTo);
      setText("");
      setReplyTo(undefined);
      onNotify("댓글을 남겼습니다.");
    } catch (reason) {
      onNotify(reason instanceof Error ? reason.message : "댓글을 남기지 못했습니다.");
    }
  }
  return <div className="comment-thread">{comments.length ? <div className="comment-list">{comments.filter((comment) => comment.depth === 0).map((comment) => <div className="comment-group" key={comment.id}><CommentRow comment={comment} auth={auth} onNotify={onNotify} onReply={() => setReplyTo(comment.id)} /><div className="replies">{comments.filter((reply) => reply.parentId === comment.id).map((reply) => <CommentRow comment={reply} auth={auth} onNotify={onNotify} key={reply.id} />)}</div></div>)}</div> : <p className="empty-comments">아직 댓글이 없습니다. 첫 번째 이야기를 남겨보세요.</p>}<form className="comment-form" onSubmit={submit}><input value={text} onChange={(event) => setText(event.target.value)} placeholder={replyTo ? "답글을 입력하세요" : "짧은 댓글을 남겨보세요"} maxLength={MAX_COMMENT_LENGTH} /><button className="button button-primary small" type="submit">Send</button></form>{replyTo ? <button className="cancel-reply" type="button" onClick={() => setReplyTo(undefined)}>답글 취소</button> : null}</div>;
}

function CommentRow({ comment, auth, onNotify, onReply }: { comment: Comment; auth: AuthState; onNotify: (message: string) => void; onReply?: () => void }) {
  const removable = canDelete(auth, comment.authorId);
  return <div className="comment-row"><span className="comment-avatar">{comment.authorName.slice(0, 1).toUpperCase()}</span><div><div className="comment-meta"><strong>{comment.authorName}</strong><time>{formatDate(comment.createdAt)}</time></div><p>{comment.text}</p>{onReply ? <button className="reply-button" type="button" onClick={onReply}>reply</button> : null}{removable ? <button className="reply-button danger" type="button" onClick={() => confirmDelete(comment.depth === 0 ? "이 댓글과 답글을 삭제할까요?" : "이 답글을 삭제할까요?", () => deleteComment(comment.id), "댓글을 삭제했습니다.", onNotify)}>delete</button> : null}</div></div>;
}

function canDelete(auth: AuthState, authorId: string): boolean {
  return Boolean(auth.user && (auth.isAdmin || auth.user.uid === authorId));
}

async function confirmDelete(question: string, remove: () => Promise<void>, done: string, onNotify: (message: string) => void) {
  if (!window.confirm(question)) return;
  try {
    await remove();
    onNotify(done);
  } catch (error) {
    onNotify(error instanceof Error ? error.message : "삭제하지 못했습니다.");
  }
}

function AdminPage({ auth, games, onNotify }: { auth: AuthState; games: Game[]; onNotify: (message: string) => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genres, setGenres] = useState("");
  const [accessLevel, setAccessLevel] = useState<AccessLevel>("public");
  const [cover, setCover] = useState<File | null>(null);
  const [build, setBuild] = useState<File | null>(null);
  const [existing, setExisting] = useState<Game | null>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!title.trim()) return setExisting(null);
    const timer = window.setTimeout(() => {
      findGameByTitle(normalizeTitle(title)).then(setExisting).catch(() => setExisting(null));
    }, 300);
    return () => window.clearTimeout(timer);
  }, [title]);

  if (auth.loading) return <LoadingState />;
  if (!auth.user) return <PermissionPanel title="Admin access" text="관리자 페이지는 Google 로그인 후 이용할 수 있습니다." />;
  if (!auth.isAdmin) return <PermissionPanel title="Not on the list" text="이 Google 계정에는 Atelier 관리자 권한이 없습니다." />;

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!title.trim()) return onNotify("게임 제목을 입력해 주세요.");
    if (!cover) return onNotify("대표 이미지를 선택해 주세요.");
    if (!build) return onNotify("웹빌드 ZIP 파일을 선택해 주세요.");
    const buildError = validateBuild(build);
    if (buildError) return onNotify(buildError);
    if (cover) {
      const coverError = validateImage(cover);
      if (coverError) return onNotify(coverError);
    }
    setSaving(true);
    setProgress(0);
    setStatus(existing ? "기존 게임을 새 빌드로 업데이트하는 중…" : "업로드 준비 중…");
    try {
      const draft = await createOrUpdateGameDraft({ title: title.trim(), description: description.trim(), genres: genres.split(",").map((item) => item.trim()).filter(Boolean).slice(0, 8), accessLevel, existingGameId: existing?.id });
      if (cover) {
        setStatus("대표 이미지 업로드 중…");
        await uploadFile(draft.coverPath, cover, (value) => setProgress(Math.round(value * 20)));
      }
      setStatus("웹빌드 ZIP 업로드 중…");
      await uploadFile(draft.buildPath, build, (value) => setProgress(20 + Math.round(value * 80)));
      setProgress(100);
      setStatus("업로드 완료. 서버에서 ZIP을 검사하고 압축을 해제합니다.");
      setTitle(""); setDescription(""); setGenres(""); setCover(null); setBuild(null); setExisting(null);
      const coverInput = document.getElementById("game-cover") as HTMLInputElement | null;
      const buildInput = document.getElementById("game-build") as HTMLInputElement | null;
      if (coverInput) coverInput.value = "";
      if (buildInput) buildInput.value = "";
      onNotify("게임 업로드를 시작했습니다. 처리 완료 후 허브에 공개됩니다.");
    } catch (error) {
      setStatus("");
      onNotify(error instanceof Error ? error.message : "업로드에 실패했습니다.");
    } finally {
      setSaving(false);
    }
  }

  return <div className="admin-page page-container"><section className="page-heading compact"><div><p className="eyebrow">STUDIO CONTROL / PRIVATE</p><h1>Upload <em>room</em></h1></div><p className="heading-note">새로운 작업물을 작업실에<br />들여놓습니다.</p></section><div className="admin-layout"><form className="upload-form" onSubmit={submit}><div className="form-section"><span className="form-number">01</span><div className="field-group"><label htmlFor="game-title">Game title</label><input id="game-title" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="예: Ember Archive" maxLength={80} /><span className="field-hint">동일한 제목의 게임은 기존 항목 수정 여부를 안내합니다.</span>{existing ? <div className="duplicate-alert"><strong>Existing game found</strong><p><b>{existing.title}</b>의 새 빌드로 업데이트합니다. 좋아요와 댓글은 유지됩니다.</p></div> : null}</div></div><div className="form-section"><span className="form-number">02</span><div className="field-group"><label htmlFor="game-description">Description</label><textarea id="game-description" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="게임 상세 페이지에 보일 짧은 소개" maxLength={500} /><label htmlFor="game-genres">Genre tags</label><input id="game-genres" value={genres} onChange={(event) => setGenres(event.target.value)} placeholder="Adventure, Puzzle, Cozy" /><span className="field-hint">쉼표로 구분해 최대 8개까지 입력합니다.</span></div></div><div className="form-section"><span className="form-number">03</span><div className="field-group"><label htmlFor="game-access">Access level</label><select id="game-access" value={accessLevel} onChange={(event) => setAccessLevel(event.target.value as typeof accessLevel)}><option value="public">Public — everyone</option><option value="login">Demo — Google login</option><option value="subscriber">Prototype — YouTube subscriber (주간 무료 로테이션 대상)</option><option value="member">Early access — channel member</option></select></div></div><div className="form-section"><span className="form-number">04</span><div className="field-group"><label htmlFor="game-cover">Cover image</label><label className="drop-field" htmlFor="game-cover"><span>{cover ? cover.name : "Choose JPG, PNG, or WebP"}</span><small>MAX 5MB</small><input id="game-cover" type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => setCover(event.target.files?.[0] ?? null)} /></label></div></div><div className="form-section"><span className="form-number">05</span><div className="field-group"><label htmlFor="game-build">Web build ZIP</label><label className="drop-field build-field" htmlFor="game-build"><span>{build ? build.name : "Choose your playable build"}</span><small>MAX {Math.round(MAX_BUILD_BYTES / 1024 / 1024)}MiB · ROOT INDEX.HTML</small><input id="game-build" type="file" accept=".zip,application/zip" onChange={(event) => setBuild(event.target.files?.[0] ?? null)} /></label></div></div><button className="button button-primary submit-upload" type="submit" disabled={saving}>{saving ? `Uploading ${progress}%` : existing ? "Update game build →" : "Publish to hub →"}</button>{status ? <p className="upload-status"><span className={progress === 100 ? "live-dot" : "spinner-dot"} />{status}</p> : null}</form><aside className="admin-aside"><div className="aside-note"><span className="eyebrow">UPLOAD CHECKLIST</span><ol><li>index.html은 ZIP 루트에 있어야 합니다.</li><li>상대 경로로 연결된 웹빌드만 지원합니다.</li><li>압축 해제 후 검사에 통과한 빌드만 공개됩니다.</li></ol></div><div className="aside-list"><span className="eyebrow">CURRENT CATALOGUE</span>{games.slice(0, 6).map((game) => <div className="mini-game" key={game.id}><span>{game.title}</span><small>{accessLabel(game.accessLevel)}</small></div>)}</div></aside></div><AdminTools onNotify={onNotify} /></div>;
}

function PermissionPanel({ title, text }: { title: string; text: string }) { return <div className="center-state page-container"><span className="state-symbol">✳</span><h1>{title}</h1><p>{text}</p><Link className="button button-primary" to="/hub">Return to hub</Link></div>; }
function EmptyState({ title, text }: { title: string; text: string }) { return <div className="center-state page-container"><span className="state-symbol">○</span><h1>{title}</h1><p>{text}</p><Link className="button button-primary" to="/hub">Return to hub</Link></div>; }
function LoadingState() { return <div className="center-state page-container"><span className="spinner-large" /><p>Loading Atelier…</p></div>; }
function Footer() { return <footer className="site-footer"><div><span className="footer-mark">ATELIER / 2026</span><p>A small workshop by Material Stone Games.</p></div><div><a href={getConfiguredYoutubeUrl()} target="_blank" rel="noreferrer">YouTube ↗</a>{discordUrl ? <a href={discordUrl} target="_blank" rel="noreferrer">Discord ↗</a> : null}<Link to="/privacy">개인정보처리방침</Link></div></footer>; }

function formatDate(value: Game["createdAt"] | Post["createdAt"] | Comment["createdAt"]): string { if (!value) return "recently"; const date = value instanceof Date ? value : value.toDate(); return new Intl.DateTimeFormat("ko-KR", { month: "short", day: "numeric" }).format(date); }
