import { insertNote } from '../../db/queries/note/insertNote';
import { ControlerResult } from '../types/ControlerResult';
import { Note } from '../types/Note';

export const createNote = (
  title: string,
  content: string,
  preview: string,
  notebookId?: string,
): ControlerResult<Note> => {
  const res = insertNote(title, content, preview, notebookId);

  return res;
};
