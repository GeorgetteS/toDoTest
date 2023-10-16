import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const TaskList = lazy(() => import('./Tasks-list'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
