import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import phone from 'assets/img/phone.png';
import { buyPhone } from 'redux/phone/actionPhone';

const PhoneContainer = () => {
  const phones = useSelector(state => state.phones)
  const dispatch = useDispatch()
  console.log('phones: ', phones)

  return (<div>
    <img src={phone} alt="phone" />
    <p>
      Disponibilité : 
      <span id="count"> {phones}</span>
    </p>
    <button type="button" 
            onClick={() => dispatch(buyPhone())}
            className="btn btn-secondary">Acheter</button>
  </div>);
};

const mapStateToProps = (state) => {
  return {
    phones: state.phone.phones
  }
};

const matDispatchToProps = (dispatch) => {
  return {
    buyPhone: () => dispatch(buyPhone())
  }
};

export default PhoneContainer;