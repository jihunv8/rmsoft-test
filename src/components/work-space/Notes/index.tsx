import styled from 'styled-components';
import NoteExplorer from './NoteExplorer';
import { Note } from '../../../utils/controler/types/Note';
import NoteEditor from './NoteEditor';

interface NotesProps {
  notes: Note[];
  selectedNote: Note;
  notebookId?: string;
}

function Notes({ notes, selectedNote, notebookId }: NotesProps) {
  return (
    <NotesWrapper>
      <NoteExplorer notes={notes} selectedNote={selectedNote} notebookId={notebookId} />
      <NoteEditor note={selectedNote} />
    </NotesWrapper>
  );
}

export default Notes;

const NotesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
