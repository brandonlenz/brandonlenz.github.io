import React from 'react';

import Layout from './containers/Layout/Layout';
import Portfolio from './containers/Portfolio/Portfolio';
import Contact from './containers/Contact/Contact';
import About from './containers/About/About';

function App() {
  return (
    <Layout>
        <About />
        <Portfolio />
        <Contact />
    </Layout>
  );
}

export default App;
