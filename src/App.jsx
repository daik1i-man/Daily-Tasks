import React, { lazy, Suspense } from 'react'
import IsLoader from './components/isLoader/isLoader';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';

function App() {
  const MainPage = lazy(() => import("./pages/mainPage/mainPage"));
  const RegisterPage = lazy(() => import("./pages/registerPage/registerPage"));
  const LoginPage = lazy(() => import("./pages/loginPage/loginPage"));
  const UserMessagePage = lazy(() => import("./pages/userMessagePage/userMessagePage"));
  return (
    <>
      <Suspense fallback={<IsLoader />}>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/user/message' element={<UserMessagePage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App;
