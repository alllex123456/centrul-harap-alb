import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Layout = React.lazy(() => import('./components/layout/Layout'));
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
