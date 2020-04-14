import React, { useRef } from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

const Layout = (props) => {
    const mainRef = useRef(null);
    const scrollToMain = (ref) => window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop });

    return (
        <>
            <Header onScrollToNext={() => scrollToMain(mainRef)} />
            <main ref={mainRef}>
                {props.children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
