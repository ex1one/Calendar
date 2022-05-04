import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from '../routes';
import useTypedSelector from '../hooks/useTypedSelector';

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  return (
    isAuth
      ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              element={<route.element />}
            />
          ))}
          <Route path="*" element={<Navigate to={RouteNames.EVENT} />} />
        </Routes>
      )
      : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              element={<route.element />}
            />
          ))}
          <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
        </Routes>
      )
  );
};

export default AppRouter;
