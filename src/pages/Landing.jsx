import { Hero, FeaturedProducts, HeroCarousel } from '../components';
import { customFetch } from '../utils';
const url = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <HeroCarousel />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
