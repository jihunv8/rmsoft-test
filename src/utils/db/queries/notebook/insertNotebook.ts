import DB from '../../DB';
import { notebook } from '../../schema/notebook';
import { QueryResponse } from '../QueryResponse';

export const insertNotebook = (id: string): QueryResponse<notebook> => {
  const db = DB.getDB();
  const newNotebook = db.setMemory((memory) => {
    if (memory.notebook[id] !== undefined) {
      // id 중복
    }

    const newNotebook: notebook = { id };
    memory.notebook[id] = { id };

    return newNotebook;
  });

  return {
    status: 200,
    message: 'ok',
    data: newNotebook,
  };
};
