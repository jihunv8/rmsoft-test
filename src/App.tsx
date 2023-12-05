import styled from 'styled-components';
import Explorer from './components/Explorer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <AppWrapper className="App">
      <Header>header</Header>
      <Main>
        <ExplorerContainer>
          <Explorer />
        </ExplorerContainer>
        <WorkSpace>
          <Outlet />
        </WorkSpace>
      </Main>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  flex-basis: 42px;
  color: #8a8a8a;
  background-color: #1c1d1d;
  border-bottom: 1px solid #111114;
`;

const Main = styled.main`
  flex-basis: 100%;
  display: flex;

  color: #8a8a8a;
  background-color: #1c1d1d;
`;

const ExplorerContainer = styled.section`
  height: 100%;
  display: flex;
`;

const WorkSpace = styled.section`
  width: 100%;
  height: 100%;
  background-color: #1c1d1d;
`;
