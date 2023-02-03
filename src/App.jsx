import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout'
import AboutMe from './pages/AboutMe';
import Index from './pages/Index';
import Projects from './pages/Projects';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="informacion" element={<AboutMe />} />
          <Route path="proyecto" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App