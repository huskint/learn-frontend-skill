import { Route, Routes } from 'react-router-dom';
import React from 'react';

import { PATH } from './lib/const/path';
import {
  SignInPage, SignUpPage, Component, Home,
} from './ui/pages';
import GugudanPage from './ui/pages/GugudanPage';

const Router = () => (
  <Routes>
    <Route path={PATH.HOME} element={<Home />} />
    <Route path={PATH.SIGN_IN} element={<SignInPage />} />
    <Route path={PATH.SIGN_UP} element={<SignUpPage />} />
    <Route path={PATH.COMPONENT} element={<Component />} />
    <Route path={PATH.GUGUDAN} element={<GugudanPage />} />
  </Routes>
);

export default Router;
