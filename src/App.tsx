import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { CarPage } from './components/CarPage';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CarPage/>
    </Provider>
  );
}

export default App;
