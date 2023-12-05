import styled from 'styled-components';
import NotebookMenu from './NotebookMenu';

function NotebookMenuList() {
  return (
    <NotebookMenuListWrapper>
      <li>
        <NotebookMenu />
        <NotebookMenu selected />
        <NotebookMenu />
      </li>
    </NotebookMenuListWrapper>
  );
}

export default NotebookMenuList;

const NotebookMenuListWrapper = styled.ul``;
