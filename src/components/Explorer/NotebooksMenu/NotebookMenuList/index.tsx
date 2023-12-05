import styled from 'styled-components';
import NotebookMenu from './NotebookMenu';
import { getNotebooks } from '../../../../utils/controler/notebook/getNotebooks';

function NotebookMenuList() {
  const { data: notebooks } = getNotebooks();

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
