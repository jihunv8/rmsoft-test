import styled from 'styled-components';
import Notes from '../../components/work-space/Notes';
import { getNotes } from '../../utils/controler/note/getNotes';

function AllNotes() {
  const { data: notes } = getNotes();

  return (
    <AllNotesWrapper>
      <Notes notes={notes} />
    </AllNotesWrapper>
  );
}

export default AllNotes;

const AllNotesWrapper = styled.section`
  width: 100%;
  height: 100%;
`;
