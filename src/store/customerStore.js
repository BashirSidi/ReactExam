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

  getCustomerCode() {
    return this.customerCode;
  }

  setCustomerCode(code) {
    this.customerCode = code;
  }

  getCustomerName() {
    return this.customerName;
  }

  setCustomerName(name) {
    this.customerName = name;
  }

  getCustomerPhone() {
    return this.customerPhone;
  }

  setCustomerPhone(phone) {
    this.customerPhone = phone;
  }

  getCustomerCity() {
    return this.customerCity;
  }

  setCustomerCity(city) {
    this.customerCity = city;
  }

  getCustomerState() {
    return this.customerState;
  }

  setCustomerState(state) {
    this.customerState = state;
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
