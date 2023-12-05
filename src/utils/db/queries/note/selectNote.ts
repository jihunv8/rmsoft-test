import DB from '../../DB';
import { note } from '../../schema/note';
import { QueryResponse } from '../QueryResponse';

export const selectNote = (id: string): QueryResponse<note> => {
  const db = DB.getDB();

  const note = db.getData((memory) => {
    return memory.note[id];
  });

  if (note === undefined) {
    // 해당 id의 note 없음
  }

  return {
    status: 200,
    message: 'ok',
    data: note,
  };
};
