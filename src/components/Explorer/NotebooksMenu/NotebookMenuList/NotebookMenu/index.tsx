import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NotebookMenuProps {
  selected?: boolean;
}

function NotebookMenu({ selected = false }: NotebookMenuProps) {
  return (
    <NotebookMenuWrapper selected={selected}>
      <Anchor to="/notebooks/notebook1/notes/note1">
        <NameArea>
          <Thumbnail></Thumbnail>
          <Name>notebook1</Name>
          <NumOfNotes>2</NumOfNotes>
        </NameArea>
      </Anchor>
    </NotebookMenuWrapper>
  );
}

export default NotebookMenu;

const NotebookMenuWrapper = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? '#28292b' : 'transparent')};
  &:hover {
    background-color: #28292b;
  }
`;

const Anchor = styled(Link)`
  display: block;
  height: 39px;
  padding: 6px 30px 7px 24px;
  text-decoration: none;
`;

const Thumbnail = styled.div`
  width: 21px;
  height: 26px;
  border-radius: 2px;
  background: linear-gradient(135deg, #c6292d 50%, #ff7b76);
`;

const NameArea = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Name = styled.span`
  font-size: 0.875;
  color: #d9d9d9;
`;
const NumOfNotes = styled.span`
  font-size: 0.8125;
  color: #858585;
`;
