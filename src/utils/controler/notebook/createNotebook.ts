import { insertNotebook } from '../../db/queries/notebook/insertNotebook';
import { ControlerResult } from '../types/ControlerResult';
import { Notebook } from '../types/Notebook';

export const createNotebook = (name: string): ControlerResult<Notebook> => {
  const { data: notebook } = insertNotebook(name);

  return {
    status: 200,
    message: 'ok',
    data: notebook,
  };
};
