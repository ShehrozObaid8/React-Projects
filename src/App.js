<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b83513b (project-01)
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

<<<<<<< HEAD
=======
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 69e1631 (Initialize project using Create React App)
>>>>>>> b83513b (project-01)
  );
}

export default App;
