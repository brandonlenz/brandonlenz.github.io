import React from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

const Layout = (props) => (
    <>
        <Header />
        <main>
            { props.children }
        </main>
        <Footer />
    </>
);

export default Layout;
