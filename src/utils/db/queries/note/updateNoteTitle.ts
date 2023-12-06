import DB from '../../DB';
import { note } from '../../schema/note';
import { QueryResponse } from '../QueryResponse';

export const updateNoteTitle = (id: string, title: string): QueryResponse<note> => {
  const db = DB.getDB();
  const updatedNote = db.setMemory((memory) => {
    const now = Date.now();
    const note = memory.note[id];
    const updatedNote = {
      ...note,
      title,
      updateAt: now,
    };
    memory.note[id] = updatedNote;
    return updatedNote;
  });

  return {
    status: 200,
    message: 'ok',
    data: updatedNote,
  };
};
