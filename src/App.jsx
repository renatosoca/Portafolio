import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout'
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Index from './pages/Index';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="informacion" element={<AboutMe />} />
          <Route path="proyecto" element={<Projects />} />
          <Route path="habilidades" element={<Skills />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App