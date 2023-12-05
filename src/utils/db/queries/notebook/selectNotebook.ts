import DB from '../../DB';
import { notebook } from '../../schema/notebook';
import { QueryResponse } from '../QueryResponse';

export const selectNotebook = (id: string): QueryResponse<notebook> => {
  const db = DB.getDB();
  const notebook = db.getData((memory) => memory.notebook[id]);
  if (notebook === undefined) {
  }

  return {
    status: 200,
    message: 'ok',
    data: notebook,
  };
};
