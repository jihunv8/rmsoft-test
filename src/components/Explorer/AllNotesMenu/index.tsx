import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNotes } from '../../../hooks/controler/note/useNotes';

function AllNotesMenu() {
  const { data: notes } = useNotes();
  return (
    <AllNotesMenuWrapper>
      <Anchor to={`/allnotes`}>
        <NameArea>
          <Name>All Notes</Name>
          <NumOfNotes>{notes.length}</NumOfNotes>
        </NameArea>
      </Anchor>
    </AllNotesMenuWrapper>
  );
}

export default AllNotesMenu;

const AllNotesMenuWrapper = styled.div``;

const Anchor = styled(Link)`
  text-decoration: none;
`;

const NameArea = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  height: 40px;
  padding: 0 24px;
`;

const Name = styled.span`
  font-size: 0.875;
  color: #d9d9d9;
`;

const NumOfNotes = styled.span`
  font-size: 0.8125;
  color: #858585;
`;
