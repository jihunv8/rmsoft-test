import styled from 'styled-components';
import NotebookItem from './NotebookItem';
import { Notebook } from '../../../../utils/controler/types/Notebook';

interface NotebookListProps {
  notebooks: Notebook[];
}

function NotebookList({ notebooks }: NotebookListProps) {
  return (
    <NotebookListWrapper>
      {notebooks.map((notebook) => {
        return <NotebookItem key={notebook.id} notebook={notebook} />;
      })}
    </NotebookListWrapper>
  );
}

export default NotebookList;

const NotebookListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
