import DB from '../../DB';
import { note } from '../../schema/note';
import { QueryResponse } from '../QueryResponse';

/** 모든 note를 가져옵니다.
 * 인수로 notebookId를 전달하면 notebookId에 해당하는 note들만 가져옵니다.
 */
export const selectNotes = (notebookId?: string): QueryResponse<note[]> => {
  const db = DB.getDB();

  if (notebookId === undefined) {
    const notes = db.getData((memory) => {
      const notes = Object.values(memory.note);
      return notes;
    });
    return {
      status: 200,
      message: 'ok',
      data: notes,
    };
  }

  const notebookNoteList = db.getData((memory) => {
    return Object.values(memory.notebook_note).filter((notebook_note) => notebook_note.notebookId === notebookId);
  });

  const notes = db.getData((memory) => {
    return notebookNoteList.map(({ noteId }) => memory.note[noteId]);
  });

  return {
    status: 200,
    message: 'ok',
    data: notes,
  };
};
