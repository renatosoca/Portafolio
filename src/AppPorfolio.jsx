import {  Routes, Route } from 'react-router-dom';

import { IndexLayout } from './layouts';
import { AboutMePage, ContactPage, IndexPage, ProjectsPage, SkillsPage } from './pages';

const AppPorfolio = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexLayout />}>
        <Route index element={<IndexPage />} />
        <Route path="informacion" element={<AboutMePage />} />
        <Route path="proyecto" element={<ProjectsPage />} />
        <Route path="habilidades" element={<SkillsPage />} />
        <Route path="contacto" element={<ContactPage />} />

        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export { AppPorfolio }