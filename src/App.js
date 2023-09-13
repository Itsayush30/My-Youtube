import './App.css';
import Head from './componenets/Head';
import Body from './componenets/Body';
import { Provider } from 'react-redux';
import store from './Utils/Store';

function App() {
  return (
    <Provider store={store}>
    <div>
     <Head />
     <Body />
    </div>
    </Provider>
  );
}

export default App;
