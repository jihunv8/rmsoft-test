import { updateNoteContent } from '../../../utils/controler/note/updateNoteContent';
import Store from '../store';

export const useUpdateNoteContent = () => {
  return (id: string, content: string, preview: string) => {
    const store = Store.getStore();

    const res = updateNoteContent(id, content, preview);

    store.dispatch();
    return res;
  };
};
