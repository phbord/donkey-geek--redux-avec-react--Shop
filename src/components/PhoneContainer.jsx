import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import phone from 'assets/img/phone.png';
import { buyPhone } from 'redux/phone/actionPhone';

const PhoneContainer = () => {
  const [totalPhone, setTotalPhone] = React.useState(1)
  const phones = useSelector(state => state.phone.phones)
  const dispatch = useDispatch()
  console.log('phones: ', phones)
  console.log('totalPhone: ', totalPhone)

  return (<div>
    <img src={phone} alt="phone" />
    <p>
      Disponibilité : 
      <span id="count"> {phones}</span>
    </p>
    <div className="d-flex">
      <button type="button" 
              onClick={() => dispatch(buyPhone(totalPhone))}
              className="btn btn-secondary me-2">Acheter</button>
      <input type="text" 
              value={totalPhone}
              className="d-inline-block"
              onChange={e => setTotalPhone(e.target.value)} />
    </div>
  </div>);
};

export default PhoneContainer;