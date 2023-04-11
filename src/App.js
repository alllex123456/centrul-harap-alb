import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Layout = React.lazy(() => import('./components/layout/Layout'));
const Home = React.lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <Suspense>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Suspense>
  );
}

export default App;
