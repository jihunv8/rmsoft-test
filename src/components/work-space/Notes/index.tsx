import styled from 'styled-components';
import NoteExplorer from './NoteExplorer';
import { Note } from '../../../utils/controler/types/Note';

interface NotesProps {
  notes: Note[];
  notebookId?: string;
}

function Notes({ notes, notebookId }: NotesProps) {
  return (
    <NotesWrapper>
      <NoteExplorer notes={notes} notebookId={notebookId} />
    </NotesWrapper>
  );
}

export default Notes;

const NotesWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
