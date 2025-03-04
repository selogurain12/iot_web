import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthentificationIndex } from './components/authentification';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListUsers } from './components/utilisateurs/users_list';
import { Toaster } from 'sonner';

const container = document.querySelector("#root");

const root = createRoot(container!);

root.render(
  <StrictMode>
    <Router>
    <Toaster richColors />
      <Routes>
        <Route path="/" element={<AuthentificationIndex />} />
        <Route path="/userlist" element={<ListUsers />} />
      </Routes>
  </Router>
  </StrictMode>,
)
