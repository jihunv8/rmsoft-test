import { selectNotes } from '../../db/queries/note/selectNotes';
import { ControlerResult } from '../types/ControlerResult';
import { Note } from '../types/Note';

export const getNotes = (notebookId?: string): ControlerResult<Note[]> => {
  const res = selectNotes(notebookId);
  return res;
};
