import { deleteNotebook } from '../../../utils/controler/notebook/deleteNotebook';
import Store from '../store';

export const useDeleteNotebook = () => {
  return (id: string) => {
    const store = Store.getStore();

    deleteNotebook(id);

    store.dispatch();
  };
};
