import { ReactNode, useRef } from 'react';

import useVisible from '../../../hooks/useVisible';

type RevealProps = {
    animateIn: string;
    children: ReactNode;
}

// Plays an animate.css animation the first time the content scrolls into view.
const Reveal = ({ animateIn, children }: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const visible = useVisible(ref, true);

    return (
        <div ref={ref} className={visible ? `animate__animated ${animateIn}` : undefined} style={{ visibility: visible ? undefined : 'hidden' }}>
            {children}
        </div>
    );
};

export default Reveal;
