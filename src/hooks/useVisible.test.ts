import { act, renderHook } from '@testing-library/react';

import useVisible from './useVisible';

let intersect: (isIntersecting: boolean) => void;

beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', class {
        constructor(callback: IntersectionObserverCallback) {
            intersect = (isIntersecting) =>
                callback([{ isIntersecting } as IntersectionObserverEntry], this as unknown as IntersectionObserver);
        }
        observe = () => {};
        disconnect = () => { intersect = () => {}; };
    });
});

const ref = { current: document.createElement('div') };

it('follows the element in and out of the viewport', () => {
    const { result } = renderHook(() => useVisible(ref));
    expect(result.current).toBe(false);

    act(() => intersect(true));
    expect(result.current).toBe(true);

    act(() => intersect(false));
    expect(result.current).toBe(false);
});

it('stays visible after the first appearance when once is set', () => {
    const { result } = renderHook(() => useVisible(ref, true));

    act(() => intersect(true));
    act(() => intersect(false));
    expect(result.current).toBe(true);
});
