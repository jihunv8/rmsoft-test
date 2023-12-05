import { deleteNotebook as _deleteNotebook } from '../../db/queries/notebook/deleteNotebook';
import { ControlerResult } from '../types/ControlerResult';

export const deleteNotebook = (id: string): ControlerResult<undefined> => {
  _deleteNotebook(id);

  return {
    status: 200,
    message: 'ok',
    data: undefined,
  };
};
