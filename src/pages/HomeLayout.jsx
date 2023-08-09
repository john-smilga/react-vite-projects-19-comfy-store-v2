import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar, Loading, Header } from '../components';
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className='mx-auto px-8 py-20 max-w-6xl'>
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
