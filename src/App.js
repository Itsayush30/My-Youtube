import './App.css';
import Head from './componenets/Head';
import Body from './componenets/Body';
import { Provider } from 'react-redux';
import store from './Utils/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './componenets/MainContainer';
import WatchPage from './componenets/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>,
      },
      {
        path: "watch",
        element: <WatchPage/>,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
    <div>
     <Head />
     <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
