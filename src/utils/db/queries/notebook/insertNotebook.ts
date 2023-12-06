import DB from '../../DB';
import { notebook } from '../../schema/notebook';
import { QueryResponse } from '../QueryResponse';

export const insertNotebook = (name: string): QueryResponse<notebook> => {
  const db = DB.getDB();
  const newNotebook = db.setMemory((memory) => {
    if (memory.notebook[name] !== undefined) {
      // id 중복
    }

    const newNotebook: notebook = { id: name };

    memory.notebook[name] = newNotebook;

    return newNotebook;
  });

  return {
    status: 200,
    message: 'ok',
    data: newNotebook,
  };
};
