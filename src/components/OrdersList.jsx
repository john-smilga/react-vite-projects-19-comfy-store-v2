import { useLoaderData } from 'react-router-dom';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const OrdersList = () => {
  const { orders } = useLoaderData();
  return (
    <div className='overflow-x-auto mt-8'>
      <table className='table table-zebra'>
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Products</th>
            <th>Cost</th>
            <th className='hidden sm:block'>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            const id = order.id;
            const { name, address, numItemsInCart, orderTotal, createdAt } =
              order.attributes;
            const date = day(createdAt).format('hh:mm A - MMM Do, YYYY ');
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{address}</td>
                <td>{numItemsInCart}</td>
                <td>{orderTotal}</td>
                <td className='hidden sm:block'>{date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default OrdersList;
