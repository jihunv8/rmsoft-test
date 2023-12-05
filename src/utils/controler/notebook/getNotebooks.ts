import { selectNotebooks } from '../../db/queries/notebook/selectNotebooks';

import { ControlerResult } from '../types/ControlerResult';
import { Notebook } from '../types/Notebook';

export const getNotebooks = (): ControlerResult<Notebook[]> => {
  const { data: notebooks } = selectNotebooks();

  return {
    status: 200,
    message: 'ok',
    data: notebooks,
  };
};
