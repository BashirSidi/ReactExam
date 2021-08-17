import React, { useState } from 'react';
import '../style/storeInput.css';
import { Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import Index from './index';

function StoreInput({ store }) {
  const [CustomerCode, setCustomerCode] = useState(store.getCustomerCode());
  const [CustomerName, setCustomerName] = useState(store.getCustomerName());
  const [CustomerPhone, setCustomerPhone] = useState(store.getCustomerPhone());
  const [CustomerCity, setCustomerCity] = useState(store.getCustomerCity());
  const [CustomerState, setCustomerState] = useState(store.getCustomerState());

  return (
    <div>
      <p>
        <Input
          className="Input"
          value={CustomerCode}
          onChange={(e) => setCustomerCode(e.target.value)}
          onBlur={() => store.setCustomerCode(CustomerCode)}
          prefix={<EditOutlined />}
        />
      </p>
      <p>
        <Input
          className="Input"
          value={CustomerName}
          onChange={(e) => setCustomerName(e.target.value)}
          onBlur={() => store.setCustomerName(CustomerName)}
          prefix={<EditOutlined />}
        />
      </p>
      <p>
        <Input
          className="Input"
          value={CustomerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
          onBlur={() => store.setCustomerPhone(CustomerPhone)}
          prefix={<EditOutlined />}
        />
      </p>
      <p>
        <Input
          className="Input"
          value={CustomerCity}
          onChange={(e) => setCustomerCity(e.target.value)}
          onBlur={() => store.setCustomerCity(CustomerCity)}
          prefix={<EditOutlined />}
        />
      </p>
      <p>
        <Input
          className="Input"
          value={CustomerState}
          onChange={(e) => setCustomerState(e.target.value)}
          onBlur={() => store.setCustomerState(CustomerState)}
          prefix={<EditOutlined />}
        />
      </p>
      <Index store={store} />
    </div>
  );
}

StoreInput.propTypes = {
  store: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default StoreInput;
