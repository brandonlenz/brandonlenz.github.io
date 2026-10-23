import { RefObject, useEffect, useState } from 'react';

// Tracks whether `ref` is in the viewport. With `once`, stays true after first appearance.
const useVisible = (ref: RefObject<Element | null>, once = false) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
            if (entry.isIntersecting && once) observer.disconnect();
        });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, once]);

    return visible;
};

export default useVisible;
