import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Notebook() {
  return (
    <NotebookWrapper>
      <Anchor to="/notebooks/notebook1/notes/note1">
        <Name>name</Name>
      </Anchor>
    </NotebookWrapper>
  );
}

export default Notebook;

const NotebookWrapper = styled.div`
  width: 108px;
  height: 135px;
  border: solid 1px #000;
  border-radius: 10px;
  background-color: #c6292d;
  background: linear-gradient(135deg, #c6292d 50%, #ff7b76);
  overflow: hidden;
`;

const Name = styled.div`
  width: 100%;
  min-height: 31px;
  padding: 7px 10px;

  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 40%);

  color: #fff;
  font-size: 0.875rem;
  line-height: 1.7;
`;

const Anchor = styled(Link)`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  text-decoration: none;
`;
