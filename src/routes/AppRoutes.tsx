import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import NotFoundPage from '../components/pages/404';
import Characters from '../components/pages/Characters';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/characters'} />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
