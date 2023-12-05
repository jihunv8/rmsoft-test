import styled from 'styled-components';
import Notebook from './Notebook';

function NotebookList() {
  return (
    <NotebookListWrapper>
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
      <Notebook />
    </NotebookListWrapper>
  );
}

export default NotebookList;

const NotebookListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
