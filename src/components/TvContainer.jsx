import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import tele from 'assets/img/tv.png'
import { buyTv } from 'redux/tv/actionTv';

const TvContainer = () => {
  const tv = useSelector(state => state.television.tv)
  const dispatch = useDispatch()
  console.log('tv: ', tv)

  return (<div>
    <img src={tele} alt="tv" />
    <p>
      Disponibilité : 
      <span id="count"> {tv}</span>
    </p>
    <button type="button" 
            onClick={() => dispatch(buyTv())}
            className="btn btn-secondary">Acheter</button>
  </div>);
};

const mapStateToProps = (state) => {
  return {
    tv: state.television.tv
  }
};

const matDispatchToProps = (dispatch) => {
  return {
    buyTv: () => dispatch(buyTv())
  }
};

export default TvContainer;