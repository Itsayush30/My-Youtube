import "./App.css";
import Head from "./componenets/Head";
import Body from "./componenets/Body";
import { Provider } from "react-redux";
import store from "./Utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import SearchShimmer from "./componenets/SearchShimmer";
import MainContainer from "./componenets/MainContainer";
import WatchShimmer from "./componenets/WatchShimmer";

const SearchResult = lazy(() => import("./componenets/SearchResult"));
const WatchPage = lazy(() => import("./componenets/WatchPage"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: (
          <Suspense fallback={<WatchShimmer/>}>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "Result",
        element: (
          <Suspense fallback={SearchShimmer}>
            <SearchResult />
          </Suspense>
        ),
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
