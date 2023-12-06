import DB from '../../DB';
import { QueryResponse } from '../QueryResponse';

export const deleteNote = (id: string): QueryResponse<undefined> => {
  const db = DB.getDB();
  db.setMemory((memory) => {
    if (memory.note[id] !== undefined) {
      delete memory.note[id];
    }
  });

  return {
    status: 200,
    message: 'ok',
    data: undefined,
  };
};
