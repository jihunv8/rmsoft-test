import styled from 'styled-components';
import NotebooksMenu from './NotebooksMenu';
import AllNotesMenu from './AllNotesMenu';

function Explorer() {
  return (
    <ExplorerWrapper>
      <AllNotesMenu />
      <NotebooksMenu />
    </ExplorerWrapper>
  );
}

export default Explorer;

const ExplorerWrapper = styled.nav`
  height: 100%;
  width: 222px;
  color: #8a8a8a;
  background-color: #1c1d1d;
  border-right: 1px solid #111114;
`;
