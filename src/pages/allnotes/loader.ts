import { AgnosticNonIndexRouteObject } from '@remix-run/router';
import { redirect } from 'react-router-dom';
import { getNotes } from '../../utils/controler/note/getNotes';

const allnotesLoader: AgnosticNonIndexRouteObject['loader'] = () => {
  const { data: notes } = getNotes();

  if (notes.length > 0) {
    return redirect(`/allnotes/${notes[0].id}`);
  }
  return null;
};

export default allnotesLoader;
