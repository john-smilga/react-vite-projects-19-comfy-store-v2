import { useLoaderData } from 'react-router-dom';
import ProductGrid from './ProductGrid';
import ProductList from './ProductList';
import { useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.total;
  const [layout, setLayout] = useState('grid');
  return (
    <>
      <Header
        totalProducts={totalProducts}
        layout={layout}
        setLayout={setLayout}
      />
      <Products layout={layout} totalProducts={totalProducts} />
    </>
  );
};

const Header = ({ totalProducts, setLayout, layout }) => {
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      layout === pattern
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-base-content'
    }`;
  };

  return (
    <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
      <h4 className='font-medium text-md'>
        {totalProducts} product{totalProducts > 1 && 's'}
      </h4>
      <div className='flex gap-x-2'>
        <button
          onClick={() => setLayout('grid')}
          className={setActiveStyles('grid')}
        >
          <BsFillGridFill />
        </button>

        <button
          onClick={() => setLayout('list')}
          className={setActiveStyles('list')}
        >
          <BsList />
        </button>
      </div>
    </div>
  );
};

const Products = ({ totalProducts, layout }) => {
  return (
    <div>
      {totalProducts === 0 ? (
        <h5 className='text-2xl mt-16'>
          Sorry, no products matched your search...
        </h5>
      ) : layout === 'grid' ? (
        <ProductGrid />
      ) : (
        <ProductList />
      )}
    </div>
  );
};

export default ProductsContainer;
