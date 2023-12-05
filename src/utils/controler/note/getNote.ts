import { selectNote } from '../../db/queries/note/selectNote';
import { ControlerResult } from '../types/ControlerResult';
import { Note } from '../types/Note';

export const getNote = (id: string): ControlerResult<Note> => {
  const res = selectNote(id);
  return res;
};
