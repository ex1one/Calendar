import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import useActions from './hooks/useActions';
import { IUser } from './models/IUser';
import Navbar from './components/Navbar/Navbar';
import './styles/App.scss';

const App = () => {
  const { setIsAuth, setUser } = useActions();
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser);
      setIsAuth(true);
    }
  }, []);
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default App;
