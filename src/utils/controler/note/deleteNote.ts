import { deleteNote as _deleteNote } from '../../db/queries/note/deleteNote';
import { deleteAllNotebookNoteByNoteId } from '../../db/queries/notebook_note/deleteAllNotebookNoteByNoteId';
import { ControlerResult } from '../types/ControlerResult';

export const deleteNote = (id: string): ControlerResult<undefined> => {
  _deleteNote(id);
  deleteAllNotebookNoteByNoteId(id);

  return {
    status: 200,
    message: 'ok',
    data: undefined,
  };
};
