import styled from 'styled-components';
import NotebookMenu from './NotebookMenu';
import { useNotebooks } from '../../../../hooks/controler/notebook/useNotebooks';

function NotebookMenuList() {
  const { data: notebooks } = useNotebooks();

  return (
    <NotebookMenuListWrapper>
      {notebooks.map((notebook) => {
        return (
          <li key={notebook.id}>
            <NotebookMenu notebook={notebook} />
          </li>
        );
      })}
    </NotebookMenuListWrapper>
  );
}

export default NotebookMenuList;

const NotebookMenuListWrapper = styled.ul``;
