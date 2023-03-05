import { Outlet} from 'react-router-dom';
import { Footer, Header } from '../components';

const IndexLayout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

export { IndexLayout }