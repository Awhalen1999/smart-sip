import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BartenderPage from './pages/bartender/BartenderPage';
import IngredientsPage from './pages/ingredients/IngredientsPage';
import SavedRecipes from './pages/SavedRecipes';
import PopularRecipes from './pages/popular-recipes/PopularRecipes';
import Nav from './components/Nav';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './utils/protectedRoute';
import { AuthProvider } from './utils/authProvider';
import UserPage from './pages/userPage';

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

createRoot(root).render(
  <React.StrictMode>
    <AuthProvider>
      <Router basename='/smart-sip/'>
        <div className='app-container'>
          <Nav />
          <div className='content-container'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route
                path='/bartender'
                element={
                  <ProtectedRoute>
                    <BartenderPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/ingredients'
                element={
                  <ProtectedRoute>
                    <IngredientsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/saved-recipes'
                element={
                  <ProtectedRoute>
                    <SavedRecipes />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/user'
                element={
                  <ProtectedRoute>
                    <UserPage />
                  </ProtectedRoute>
                }
              />
              <Route path='/popular-recipes' element={<PopularRecipes />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
