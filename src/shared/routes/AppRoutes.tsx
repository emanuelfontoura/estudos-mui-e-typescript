import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home.tsx';
import Produtos from '../../pages/Produtos.tsx';
import Contato from '../../pages/Contato.tsx';
import NotFound from '../../pages/NotFound.tsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="produtos/*" element={<Produtos />} />
      <Route path="contato" element={<Contato />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
