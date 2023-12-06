import { useEffect, useState } from 'react';
import Store from '../store';
import { getNote } from '../../../utils/controler/note/getNote';

export const useNote = (id: string) => {
  const [res, setRes] = useState(getNote(id));

  useEffect(() => {
    setRes(getNote(id));
  }, [id]);

  const setter = () => {
    setRes(getNote(id));
  };

  const store = Store.getStore();

  store.listen(setter);

  return res;
};
