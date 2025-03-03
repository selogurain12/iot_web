import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthentificationIndex } from './components/authentification';

const container = document.querySelector("#root");

const root = createRoot(container!);

root.render(
  <StrictMode>
    <AuthentificationIndex />
  </StrictMode>,
)
