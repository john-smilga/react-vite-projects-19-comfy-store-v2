import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';

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
  console.log(response);
  return null;
};
const Orders = () => {
  return <h1 className='text-7xl'>Orders</h1>;
};
export default Orders;
