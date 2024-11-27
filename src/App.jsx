import { useState } from 'react'
import { Header } from './components/Header';
import './App.css'
import { Navigation } from './components/Navigation';
import { MainScreen } from './components/MainScreen';
import { Provider } from 'react-redux';
import AppStore from './utils/appStore';
import { BrowsePage } from './components/BrowsePage';
import { FullBookDetailPage } from './components/FullBookDetailPage';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';

function App() {
  

  return (
    <>
    <Provider store={AppStore}>
    
    <Outlet></Outlet>

    </Provider>
    <Footer/>
     
    </>
  )
}

export default App
