import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import AddUsers from './components/AddUsers';

function App() {
  const router = createBrowserRouter([
    { 
     path: '/',
     element: <Home />
     loader: 
    },
    { 
     path: '/users/add',
     element: <AddUsers />
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
