import { AgnosticNonIndexRouteObject } from '@remix-run/router';
import { redirect } from 'react-router-dom';
import { getNotes } from '../../../utils/controler/note/getNotes';

const notebookLoader: AgnosticNonIndexRouteObject['loader'] = ({ params }) => {
  const notebookId = params.notebookId;
  if (notebookId === undefined) throw new Error('notebookId가 undefined입니다.');

  const { data: notes } = getNotes(params.notebookId);

  if (notes.length > 0) {
    return redirect(`/notebooks/${encodeURIComponent(notebookId)}/notes/${notes[0].id}`);
  }
  return null;
};

export default notebookLoader;
