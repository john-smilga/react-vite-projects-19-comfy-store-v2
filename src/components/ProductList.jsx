import { formatPrice } from '../utils';
import { Link, useLoaderData } from 'react-router-dom';

const ProductList = () => {
  const { products } = useLoaderData();
  return (
    <div className='mt-12 grid gap-y-8'>
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = formatPrice(price);

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'
          >
            <img
              src={image}
              alt={title}
              className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'
            />
            <div className='ml-0 sm:ml-16'>
              <h3 className='capitalize font-medium text-lg'>{title}</h3>
              <h4 className='capitalize text-md text-neutral-content'>
                {company}
              </h4>

              {/* COLOR */}
            </div>

            <p className='font-medium ml-0 sm:ml-auto text-lg'>
              {formatPrice(price)}
            </p>
          </Link>
        );

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='card sm:card-side  shadow-xl hover:shadow-2xl transition duration-300 '
          >
            <figure>
              <img
                src={image}
                alt={title}
                className='rounded-t-xl sm:rounded-t-none sm:rounded-l-xl  w-full h-48 sm:w-96 md:w-[600px]
                 object-cover'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title capitalize tracking-wider'>{title}</h2>
              <span className='text-secondary'>{dollarsAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
