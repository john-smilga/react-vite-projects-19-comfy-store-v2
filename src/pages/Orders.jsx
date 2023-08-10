import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import { OrdersList, SectionTitle } from '../components';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn('You must be logged in to view orders');
    return redirect('/login');
  }

  const response = await customFetch.get('/orders', {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });

  return { orders: response.data.data };
};
const Orders = () => {
  const { orders } = useLoaderData();
  if (orders.length < 1) {
    return <SectionTitle text='Please make an order' />;
  }
  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrdersList />
    </>
  );
};
export default Orders;
