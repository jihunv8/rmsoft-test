import { useEffect, useState } from 'react';
import Store from '../store';
import { getNotebook } from '../../../utils/controler/notebook/getNotebook';

export const useNotebooks = (id: string) => {
  const [res, setRes] = useState(getNotebook(id));

  useEffect(() => {
    setRes(getNotebook(id));
  }, [id]);

  const setter = () => {
    setRes(getNotebook(id));
  };

  const store = Store.getStore();

  store.listen(setter);

  return res;
};
