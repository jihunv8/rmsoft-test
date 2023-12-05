import DB from '../../DB';
import { QueryResponse } from '../QueryResponse';

export const deleteNotebook = (id: string): QueryResponse<undefined> => {
  const db = DB.getDB();

  db.setMemory((memory) => {
    delete memory.notebook[id];
  });

  return {
    status: 200,
    message: 'ok',
    data: undefined,
  };
};
