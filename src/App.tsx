import * as React from 'react';

import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Layout from './containers/Layout/Layout';
import Portfolio from './containers/Portfolio/Portfolio';

const App = () => (
  <Layout>
      <About />
      <Portfolio />
      <Contact />
  </Layout>
);

export default App;
