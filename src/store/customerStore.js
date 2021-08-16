import { makeAutoObservable } from 'mobx';

class CustomerStore {
  customerCode = '';

  customerName = '';

  customerPhone = '';

  customerCity = '';

  customerState = '';

  constructor(customerCode, customerName, customerPhone, customerCity, customerState) {
    makeAutoObservable(this);

    this.customerCode = customerCode;
    this.customerName = customerName;
    this.customerPhone = customerPhone;
    this.customerCity = customerCity;
    this.customerState = customerState;
  }

  setCustomerName(name) {
    this.customerName = name;
  }

  getCustomerName() {
    return this.customerName;
  }
}
const store = new CustomerStore(
  '1234',
  'Bashir Sidi',
  '+2348067753836',
  'Los Angeles',
  'California',
);
export default store;
