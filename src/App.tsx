import styled from 'styled-components';
import Explorer from './components/Explorer';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <AppWrapper className="App">
      <Header />
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
  min-width: 1400px;
  max-width: 1920px;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
