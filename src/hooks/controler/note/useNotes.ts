import { useState } from 'react';
import Store from '../store';
import { getNotes } from '../../../utils/controler/note/getNotes';

export const useNotes = (notebookId?: string) => {
  const [res, setRes] = useState(getNotes(notebookId));

  const store = Store.getStore();

  const setter = () => {
    // const newRes = getNotes(notebookId);
    // setRes({
    //   ...newRes,
    //   data: {
    //     ...newRes.data,
    //   },
    // });
    setRes(getNotes(notebookId));
  };

  store.listen(setter);

  return res;
};
