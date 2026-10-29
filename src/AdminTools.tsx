import { useEffect, useState, type FormEvent } from "react";
import type { AccessLevel, Game, StorageReport } from "./types";
import { accessLabel } from "./lib/access";
import { deleteGame, deleteStorageOrphans, getStorageReport, subscribeToAllGames, updateGameMeta } from "./lib/services";

type Notify = (message: string) => void;

function errorMessage(error: unknown, fallback: string): string {
  return error instanceof Error ? error.message : fallback;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KiB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MiB`;
  return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GiB`;
}

export function AdminTools({ onNotify }: { onNotify: Notify }) {
  return (
    <div className="admin-tools">
      <GameManager onNotify={onNotify} />
      <StoragePanel onNotify={onNotify} />
    </div>
  );
}

function GameManager({ onNotify }: { onNotify: Notify }) {
  const [games, setGames] = useState<Game[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  useEffect(() => subscribeToAllGames(setGames), []);

  async function remove(game: Game) {
    if (!window.confirm(`"${game.title}"을(를) 삭제할까요? 빌드, 대표 이미지, 댓글, 좋아요 기록이 함께 삭제되며 되돌릴 수 없습니다.`)) return;
    try {
      await deleteGame(game.id);
      onNotify(`${game.title}을(를) 삭제했습니다.`);
    } catch (error) {
      onNotify(errorMessage(error, "게임을 삭제하지 못했습니다."));
    }
  }

  return (
    <section className="admin-panel">
      <div className="section-title-row"><div><p className="eyebrow">CATALOGUE CONTROL</p><h2>Manage games</h2></div><span className="comment-rule">{games.length.toString().padStart(2, "0")} games</span></div>
      <div className="manage-list">
        {games.map((game) => (
          <div className="manage-row" key={game.id}>
            {editingId === game.id ? <GameEditor game={game} onDone={() => setEditingId(null)} onNotify={onNotify} /> : (
              <>
                <div className="manage-copy">
                  <strong>{game.title}</strong>
                  <small>{accessLabel(game.accessLevel)} · {game.buildStatus.toUpperCase()}{game.pendingVersionId ? " · UPDATE PROCESSING" : ""}</small>
                  {game.buildError ? <small className="manage-error">빌드 오류: {game.buildError}</small> : null}
                </div>
                <div className="manage-actions">
                  <button className="action-button" type="button" onClick={() => setEditingId(game.id)}>Edit</button>
                  <button className="action-button danger" type="button" onClick={() => remove(game)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
        {!games.length ? <p className="empty-comments">등록된 게임이 없습니다.</p> : null}
      </div>
    </section>
  );
}

function GameEditor({ game, onDone, onNotify }: { game: Game; onDone: () => void; onNotify: Notify }) {
  const [title, setTitle] = useState(game.title);
  const [description, setDescription] = useState(game.description);
  const [genres, setGenres] = useState(game.genres.join(", "));
  const [accessLevel, setAccessLevel] = useState<AccessLevel>(game.accessLevel);
  const [saving, setSaving] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!title.trim()) return onNotify("게임 제목을 입력해 주세요.");
    setSaving(true);
    try {
      await updateGameMeta({ gameId: game.id, title: title.trim(), description: description.trim(), genres: genres.split(",").map((item) => item.trim()).filter(Boolean).slice(0, 8), accessLevel });
      onNotify("게임 정보를 수정했습니다.");
      onDone();
    } catch (error) {
      onNotify(errorMessage(error, "게임 정보를 수정하지 못했습니다."));
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className="manage-editor" onSubmit={submit}>
      <input value={title} onChange={(event) => setTitle(event.target.value)} maxLength={80} aria-label="Game title" />
      <textarea value={description} onChange={(event) => setDescription(event.target.value)} maxLength={500} aria-label="Description" />
      <input value={genres} onChange={(event) => setGenres(event.target.value)} placeholder="Adventure, Puzzle" aria-label="Genre tags" />
      <select value={accessLevel} onChange={(event) => setAccessLevel(event.target.value as AccessLevel)} aria-label="Access level">
        <option value="public">Public — everyone</option>
        <option value="login">Demo — Google login</option>
        <option value="subscriber">Prototype — YouTube subscriber</option>
        <option value="member">Early access — channel member</option>
      </select>
      <div className="manage-actions">
        <button className="button button-primary small" type="submit" disabled={saving}>{saving ? "Saving…" : "Save"}</button>
        <button className="action-button" type="button" onClick={onDone} disabled={saving}>Cancel</button>
      </div>
    </form>
  );
}

function StoragePanel({ onNotify }: { onNotify: Notify }) {
  const [report, setReport] = useState<StorageReport | null>(null);
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    try {
      setReport(await getStorageReport());
    } catch (error) {
      onNotify(errorMessage(error, "Storage 정보를 불러오지 못했습니다."));
    } finally {
      setLoading(false);
    }
  }

  async function cleanUp() {
    if (!report?.orphanedPaths.length) return;
    if (!window.confirm(`연결되지 않은 파일 ${report.orphanedPaths.length}개를 삭제할까요? 되돌릴 수 없습니다.`)) return;
    setLoading(true);
    try {
      const result = await deleteStorageOrphans(report.orphanedPaths);
      onNotify(`고아 파일 ${result.deleted}개를 삭제했습니다.`);
      setReport(await getStorageReport());
    } catch (error) {
      onNotify(errorMessage(error, "고아 파일을 정리하지 못했습니다."));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="admin-panel">
      <div className="section-title-row"><div><p className="eyebrow">STORAGE</p><h2>Usage &amp; cleanup</h2></div><button className="action-button" type="button" onClick={load} disabled={loading}>{loading ? "Loading…" : report ? "Refresh" : "Load report"}</button></div>
      {report ? (
        <div className="storage-report">
          <p className="storage-total"><strong>{formatBytes(report.totalBytes)}</strong> · {report.fileCount} files</p>
          {Object.entries(report.byPrefix).map(([prefix, value]) => <div className="mini-game" key={prefix}><span>{prefix}/</span><small>{formatBytes(value.bytes)} · {value.files} files</small></div>)}
          {report.gamesWithoutBuild.length ? <p className="manage-error">빌드 파일이 없는 공개 게임: {report.gamesWithoutBuild.join(", ")}</p> : null}
          <div className="orphan-box">
            <span className="eyebrow">ORPHANED FILES · {report.orphanedPaths.length}</span>
            {report.orphanedPaths.slice(0, 20).map((path) => <code key={path}>{path}</code>)}
            {report.orphanedPaths.length > 20 ? <small>외 {report.orphanedPaths.length - 20}개</small> : null}
            {report.orphanedPaths.length ? <button className="action-button danger" type="button" onClick={cleanUp} disabled={loading}>Delete orphaned files</button> : <small>정리할 파일이 없습니다.</small>}
          </div>
        </div>
      ) : <p className="empty-comments">Storage 사용량과 연결되지 않은 파일을 확인합니다.</p>}
    </section>
  );
}
