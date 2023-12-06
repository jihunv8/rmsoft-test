import { createNotebook } from '../../../utils/controler/notebook/createNotebook';
import Store from '../store';

export const useCreateNotebook = () => {
  return (name: string) => {
    const store = Store.getStore();

    const res = createNotebook(name);

    store.dispatch();
    return res;
  };
};
