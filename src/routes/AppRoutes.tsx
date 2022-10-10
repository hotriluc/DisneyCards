import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFoundPage from '../components/pages/404';
import Characters from '../components/pages/Characters';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
