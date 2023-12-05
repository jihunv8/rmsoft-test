import DB from '../../DB';
import { notebook } from '../../schema/notebook';
import { QueryResponse } from '../QueryResponse';

export {};

export const selectNotebooks = (): QueryResponse<notebook[]> => {
  const db = DB.getDB();
  const notebooksData = db.getData((memory) => memory.notebook);
  const notebooks = Object.keys(notebooksData).map((id) => {
    const notebook = notebooksData[id];
    return notebook;
  });

  return {
    status: 200,
    message: 'ok',
    data: notebooks,
  };
};
