import DB from '../../DB';
import { note } from '../../schema/note';
import { QueryResponse } from '../QueryResponse';

export const insertNote = (title: string, content: string, notebookId?: string): QueryResponse<note> => {
  const now = Date.now();
  const newNote: note = {
    id: title + now,
    title,
    content,
    createdAt: now,
    updatedAt: now,
  };

  const db = DB.getDB();
  db.setMemory((memory) => {
    memory.note[newNote.id] = newNote;
  });

  if (notebookId !== undefined) {
    db.setMemory((memory) => {
      const notebookNoteId = notebookId + newNote.id;
      memory.notebook_note[notebookNoteId] = {
        notebookId,
        id: notebookNoteId,
        noteId: newNote.id,
      };
    });
  }

  return {
    status: 200,
    message: 'ok',
    data: newNote,
  };
};
