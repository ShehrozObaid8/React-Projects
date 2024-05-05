import Router from './Config/router';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

    <div className="App">
      <header className="App-header">
        <Router />
      </header>
    </div>
    </PersistGate>
    </Provider>

  );
}

export default App;
