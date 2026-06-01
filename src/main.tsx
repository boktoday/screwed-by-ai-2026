import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import DataCentres from './pages/DataCentres.tsx';
import Deepfakes from './pages/Deepfakes.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/datacentres" element={<DataCentres />} />
        <Route path="/deepfakes" element={<Deepfakes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
