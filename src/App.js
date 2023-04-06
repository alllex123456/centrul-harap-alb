import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Layout = React.lazy(() => import('./components/layout/Layout'));
const Home = React.lazy(() => import('./pages/HomePage'));
const Activities = React.lazy(() => import('./pages/ActivitiesPage'));
const Contact = React.lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <Suspense>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activitati" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Suspense>
  );
}

export default App;
