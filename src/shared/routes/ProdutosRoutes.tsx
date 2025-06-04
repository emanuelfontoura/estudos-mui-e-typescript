import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../pages/NotFound.tsx';
import EditarProduto from '../../pages/EditarProduto.tsx';
import VisualizarProduto from '../../pages/VisualizarProduto.tsx';
import ExcluirProduto from '../../pages/ExcluirProduto.tsx';
import Produtos from '../../pages/Produtos.tsx';

const ProdutosRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Produtos />} />
      <Route path="editar" element={<EditarProduto />} />
      <Route path="visualizar" element={<VisualizarProduto />} />
      <Route path="excluir" element={<ExcluirProduto />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ProdutosRoutes;
