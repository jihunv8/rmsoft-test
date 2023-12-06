import { updateNoteContent as _updateNoteContent } from '../../db/queries/note/updateNoteContent';
import { ControlerResult } from '../types/ControlerResult';
import { Note } from '../types/Note';

export const updateNoteContent = (id: string, content: string, preview: string): ControlerResult<Note> => {
  const res = _updateNoteContent(id, content, preview);

  return res;
};
