import { updateNoteTitle as _updateNoteTitle } from '../../db/queries/note/updateNoteTitle';
import { ControlerResult } from '../types/ControlerResult';
import { Note } from '../types/Note';

export const updateNoteTitle = (id: string, content: string): ControlerResult<Note> => {
  const res = _updateNoteTitle(id, content);

  return res;
};
