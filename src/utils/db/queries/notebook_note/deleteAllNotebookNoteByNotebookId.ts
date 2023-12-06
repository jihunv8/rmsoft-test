import DB from '../../DB';
import { QueryResponse } from '../QueryResponse';

export const deleteAllNotebookNoteByNotebookId = (notebookId: string): QueryResponse<undefined> => {
  const db = DB.getDB();

  db.setMemory((memory) => {
    for (const notebookNoteId in memory.notebook_note) {
      const notebookNote = memory.notebook_note[notebookNoteId];
      if (notebookNote.notebookId === notebookId) {
        delete memory.notebook_note[notebookNoteId];
      }
    }
  });

  return {
    status: 200,
    message: 'ok',
    data: undefined,
  };
};
