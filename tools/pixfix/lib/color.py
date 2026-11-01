# 색 변환과 거리. 사람 눈에 가까운 OKLab 공간에서 색 차이를 잼
import numpy as np

_M1 = np.array([[0.4122214708, 0.5363325363, 0.0514459929],
                [0.2119034982, 0.6806995451, 0.1073969566],
                [0.0883024619, 0.2817188376, 0.6299787005]])
_M2 = np.array([[0.2104542553, 0.7936177850, -0.0040720468],
                [1.9779984951, -2.4285922050, 0.4505937099],
                [0.0259040371, 0.7827717662, -0.8086757660]])


def oklab(rgb):
    """sRGB(0~255, 마지막 축 3) → OKLab. L은 0(검정)~1(흰색), 색 거리 0.02 정도면 눈으로 거의 구분 안 됨"""
    c = np.asarray(rgb, dtype=np.float64) / 255.0
    lin = np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)
    return np.cbrt(lin @ _M1.T) @ _M2.T


def dist(a, b):
    return np.sqrt(((np.asarray(a) - np.asarray(b)) ** 2).sum(-1))


def chroma(lab):
    lab = np.asarray(lab)
    return np.sqrt(lab[..., 1] ** 2 + lab[..., 2] ** 2)


def hex_of(rgb):
    return '#%02x%02x%02x' % tuple(int(round(v)) for v in rgb[:3])


def rgb_of(hexstr):
    h = hexstr.lstrip('#')
    return np.array([int(h[i:i + 2], 16) for i in (0, 2, 4)], dtype=np.float64)
