import { selectNotebook } from '../../db/queries/notebook/selectNotebook';

import { ControlerResult } from '../types/ControlerResult';
import { Notebook } from '../types/Notebook';

export const getNotebook = (id: string): ControlerResult<Notebook> => {
  const { data: notebook } = selectNotebook(id);

  return {
    status: 200,
    message: 'ok',
    data: notebook,
  };
};
