import styled from 'styled-components';
import NotebookList from './NotebookList';
import { useNotebooks } from '../../../hooks/controler/notebook/useNotebooks';

function Notebooks() {
  const { data: notebooks } = useNotebooks();

  return (
    <NotebooksWrapper>
      <Header>
        <Title>
          <h2>Notebooks</h2>
          <span>({notebooks.length})</span>
        </Title>
      </Header>
      <Section>
        <NotebookList notebooks={notebooks} />
      </Section>
    </NotebooksWrapper>
  );
}

export default Notebooks;

const NotebooksWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  height: 38px;
  background-color: #2d2e31;
  padding: 0 30px;
`;

const Title = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;

  > h2 {
    color: #d9d9d9;
  }

  > span {
    color: #858585;
  }
`;
const Section = styled.section`
  padding: 18px 30px;
`;
