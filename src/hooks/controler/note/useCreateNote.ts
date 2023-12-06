import { createNote } from '../../../utils/controler/note/createNote';
import Store from '../store';

export const useCreateNote = () => {
  return (title: string, content: string, preview: string, notebookId?: string) => {
    const store = Store.getStore();

    const res = createNote(title, content, preview, notebookId);

    store.dispatch();
    return res;
  };
};
