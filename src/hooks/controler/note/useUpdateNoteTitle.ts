import { updateNoteTitle } from '../../../utils/controler/note/updateNoteTitle';
import Store from '../store';

export const useUpdateNoteTitle = () => {
  return (id: string, content: string) => {
    const store = Store.getStore();

    const res = updateNoteTitle(id, content);

    store.dispatch();
    return res;
  };
};
