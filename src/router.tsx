import { createBrowserRouter } from 'react-router-dom';
import Notebooks from './components/work-space/Notebooks';
import App from './App';
import Home from './pages';

import Notebook from './pages/notebooks/[:notebookId]';
import NoteInNotebook from './pages/notebooks/[:notebookId]/notes/[:noteId]';
import notebookLoader from './pages/notebooks/[:notebookId]/loader';
import NoteInAllNotes from './pages/allnotes/[:noteId]';
import AllNotes from './pages/allnotes';
import allnotesLoader from './pages/allnotes/loader';

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
        path: '/notebooks/:notebookId',
        element: <Notebook />,
        loader: notebookLoader,
      },
      {
        path: '/notebooks/:notebookId/notes/:noteId',
        element: <NoteInNotebook />,
      },
      {
        path: '/allnotes',
        element: <AllNotes />,
        loader: allnotesLoader,
      },
      {
        path: '/allnotes/:noteId',
        element: <NoteInAllNotes />,
      },
    ],
  },
]);
