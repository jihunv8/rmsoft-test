import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Notebooks from './components/work-space/Notebooks';
import Notes from './components/work-space/Notes';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/notebooks',
        element: <Notebooks />,
      },
      {
        path: '/notebooks/:notebookId/notes/:noteId',
        element: <Notes />,
      },
    ],
  },
]);
