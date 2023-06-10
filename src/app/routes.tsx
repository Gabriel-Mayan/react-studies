import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { ErrorPage } from '../pages/Error';

export const Router = () => {
    return (
      <Routes>
        <Route path="/">
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    );
}