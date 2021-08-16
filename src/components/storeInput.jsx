import React from 'react';
import '../style/storeInput.css';
import { Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const storeInput = ({ store }) => {
  const handleUpdate = (event) => {
    store.setCustomerName(event.target.value);
  };

  return (
    <div>
      <p>{store.getCustomerName()}</p>
      <Input className="Input" value={store.getCustomerName()} type="text" onBlur={() => handleUpdate()} prefix={<EditOutlined />} />
    </div>
  );
};

export default storeInput;
