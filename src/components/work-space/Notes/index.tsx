import styled from 'styled-components';
import NoteExplorer from './NoteExplorer';

function Notes() {
  return (
    <NotesWrapper>
      <NoteExplorer />
    </NotesWrapper>
  );
}

export default Notes;

const NotesWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
