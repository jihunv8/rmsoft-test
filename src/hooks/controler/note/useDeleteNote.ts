import { deleteNote } from '../../../utils/controler/note/deleteNote';
import Store from '../store';

export const useDeleteNote = () => {
  return (id: string) => {
    const store = Store.getStore();

    deleteNote(id);

    store.dispatch();
  };
};
