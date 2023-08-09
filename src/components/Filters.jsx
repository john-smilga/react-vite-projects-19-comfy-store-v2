import { Form, useLoaderData, Link } from 'react-router-dom';
import SearchInput from './SearchInput';
import SelectInput from './SelectInput';

import {
  getUniqueCategories,
  getUniqueCompanies,
  getMaximumPrice,
} from '../utils';
import CheckboxInput from './CheckboxInput';
import RangeInput from './RangeInput';
const Filters = () => {
  const { products, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  const categories = getUniqueCategories(products);
  const companies = getUniqueCompanies(products);
  const maxPrice = getMaximumPrice(products);
  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* SEARCH */}
      <SearchInput label='search product' name='search' defaultValue={search} />
      {/* CATEGORY */}
      <SelectInput
        label='select category'
        name='category'
        list={categories}
        defaultValue={category}
      />
      {/* COMPANY */}

      <SelectInput
        label='select company'
        name='company'
        list={companies}
        defaultValue={company}
      />
      {/* ORDER */}
      <SelectInput
        label='sort by'
        name='order'
        defaultValue={order}
        list={['a-z', 'z-a', 'high', 'low']}
      />
      {/* SHIPPING */}

      <RangeInput label='select price' name='price' price={price} />

      <CheckboxInput
        label='free shipping'
        name='shipping'
        defaultValue={shipping}
      />

      <button type='submit' className='btn btn-primary btn-xs '>
        search
      </button>
      <Link to='/products' className='btn btn-accent btn-xs'>
        reset
      </Link>
    </Form>
  );
};
export default Filters;
