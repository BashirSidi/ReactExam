import React from 'react';
import PropTypes from 'prop-types';

export default function Index({ store }) {
  return (
    <div>
      <p>
        Customer Code:
        {store.getCustomerCode()}
        <br />
        Customer Name:
        {store.getCustomerName()}
        <br />
        Customer Phone:
        {store.getCustomerPhone()}
        <br />
        Customer Customer City:
        {store.getCustomerCity()}
        <br />
        Customer Customer State:
        {store.getCustomerState()}
      </p>
    </div>
  );
}
Index.propTypes = {
  store: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
