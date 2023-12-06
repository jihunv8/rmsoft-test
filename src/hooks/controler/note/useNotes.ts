import { useEffect, useState } from 'react';
import Store from '../store';
import { getNotes } from '../../../utils/controler/note/getNotes';

export const useNotes = (notebookId?: string) => {
  const [res, setRes] = useState(getNotes(notebookId));

  useEffect(() => {
    setRes(getNotes(notebookId));
  }, [notebookId]);

  const store = Store.getStore();

  const setter = () => {
    setRes(getNotes(notebookId));
  };

  store.listen(setter);

  return res;
};
