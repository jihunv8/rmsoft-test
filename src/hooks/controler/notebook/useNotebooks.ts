import { useEffect, useState } from 'react';
import { getNotebooks } from '../../../utils/controler/notebook/getNotebooks';
import Store from '../store';

export const useNotebooks = () => {
  const [res, setRes] = useState(getNotebooks());

  useEffect(() => {
    setRes(getNotebooks());
  }, []);

  const setter = () => {
    setRes(getNotebooks());
  };

  const store = Store.getStore();

  store.listen(setter);

  return res;
};
