import { Provider } from 'react-redux';

import 'assets/scss/App.scss';
import store from 'redux/store';
import PhoneContainer from 'components/PhoneContainer';
import TvContainer from 'components/TvContainer';
import CommentsContainer from 'components/CommentsContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App section-one">
        <div className="container text-center">
          <div className="section-one d-flex justify-content-center mb-5">
            <PhoneContainer />
            <TvContainer />
          </div>
          <CommentsContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
