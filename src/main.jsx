import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './Pages/Home.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
