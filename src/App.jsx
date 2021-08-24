import { Provider } from 'react-redux';

import 'assets/scss/App.scss';
import store from 'redux/store';
import PhoneContainer from 'components/PhoneContainer';
import TvContainer from 'components/TvContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App section-one">
        <div className="container d-flex justify-content-center text-center">
          <PhoneContainer />
          <TvContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
