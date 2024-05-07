// import { Provider } from 'react-redux';
// import './App.css';
// import Body from './components/Body';
// import Header from './components/Header';
// import store from './utils/store';
// import { createBrowserRouter, RouterProvider} from 'react-router-dom';
// import MainContainer from "./components/MainContainer";
// import VideoWatch from './components/VideoWatch';
// import React from 'react'

// const createContext

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       {
//         path: "/",
//         element: <MainContainer />,
//       },
//       {
//         path: "watch",
//         element: <VideoWatch />,
//       }
//     ]
//   }
// ])

// function App() {
//   return (
//     <Provider store={store}>
//       <div>
//         <Header />
      
//         <RouterProvider router={appRouter} />

//       </div>
//     </Provider>
//   );
// }

// export default App;

// *****************************************************************************************************************************

import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainContainer from "./components/MainContainer";
import VideoWatch from './components/VideoWatch';
import React, { createContext, useState } from 'react'

 export const MyContext = createContext();


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
        element: <VideoWatch />,
      }
    ]
  }
])

function App() {

  const [filter, setfilter] = useState([]);
  return (
    <MyContext.Provider value={{filter , setfilter}}>
    <Provider store={store}>
      <div>
        <Header />
      
        <RouterProvider router={appRouter} />

      </div>
    </Provider>
    </MyContext.Provider>
  );
}

export default App;