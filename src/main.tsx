import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import DataCentres from './pages/DataCentres.tsx';
import Deepfakes from './pages/Deepfakes.tsx';
import Chatbots from './pages/Chatbots.tsx';
import Jobs from './pages/Jobs.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/datacentres" element={<DataCentres />} />
        <Route path="/deepfakes" element={<Deepfakes />} />
        <Route path="/chatbots" element={<Chatbots />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
