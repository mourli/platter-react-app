import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from '../components/layouts/MainLayout';
import { HomePage } from "../pages/HomePage";
import { LoginPage } from '../pages/LoginPage';
import { Provider } from 'react-redux';
import { store } from '../_utils/store';
import { PrivateRoute } from '../components/PrivateRoute';
import { Role } from '../_utils/appConstants';
import { ContactListPage } from '../pages/contacts/ContactListPage';
import { ContactDetailPage } from '../pages/contacts/ContactDetailPage';

function App() {
  return (
    <div className="App" id="page-top">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route element={<PrivateRoute roles={[Role.User]} />}>
                <Route index element={<HomePage />} />
                <Route path="*" element={<h1 style={{ padding: "30px", textAlign: "center" }}>Page Note Found</h1>} />
              </Route>
              <Route path="/contacts" element={<PrivateRoute roles={[Role.User]} />}>
                <Route path="" element={<ContactListPage />} />
                <Route path="show/:id" element={<ContactDetailPage />} />
                <Route path="create" element={<ContactListPage />} />
                <Route path="update" element={<ContactDetailPage />} />
                <Route path="*" element={<h1 style={{ padding: "30px", textAlign: "center" }}>Page Note Found</h1>} />
              </Route>
              <Route path="/admin" element={<PrivateRoute roles={[Role.User]} />}>
                <Route path="a" element={<HomePage />} />
                <Route path="b" element={<HomePage />} />

              </Route>
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<h1 style={{ padding: "30px", textAlign: "center" }}>Page Note Found</h1>} />
            <Route path="403" element={<h1 style={{ padding: "30px", textAlign: "center" }}>Unauthorizes</h1>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}


//ToDOs
// <NavLink activeClassName="active" to="/about">

export default App;
