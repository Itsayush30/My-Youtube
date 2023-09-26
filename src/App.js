import "./App.css";
import Head from "./componenets/Head";
import { Provider } from "react-redux";
import store from "./Utils/Store";
import { Outlet, createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import SearchShimmer from "./componenets/SearchShimmer";
import MainContainer from "./componenets/MainContainer";
import WatchShimmer from "./componenets/WatchShimmer";
import SideBar from "./componenets/Sidebar";

const SearchResult = lazy(() => import("./componenets/SearchResult"));
const WatchPage = lazy(() => import("./componenets/WatchPage"));

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <div className="flex">
          <SideBar />
          <Outlet />
        </div>
      </div>
    </Provider>
  );
}

export default App;

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: (
          <Suspense fallback={<WatchShimmer />}>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "Result",
        element: (
          <Suspense fallback={<SearchShimmer />}>
            <SearchResult />
          </Suspense>
        ),
      },
    ],
  },
]);
