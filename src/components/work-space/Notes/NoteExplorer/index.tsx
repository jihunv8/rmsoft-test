import styled from 'styled-components';
import NoteMenu from './NoteMenu';
import { Note } from '../../../../utils/controler/types/Note';

interface NoteExplorerProps {
  notes: Note[];
  selectedNote: Note;
  notebookId?: string;
}

function NoteExplorer({ notes, selectedNote, notebookId }: NoteExplorerProps) {
  return (
    <NoteExplorerWrapper>
      <Header>
        <Title>{notebookId || 'All Notes'}</Title>
      </Header>
      <ul>
        {notes.map((note) => {
          const isSelected = note.id === selectedNote.id;
          return (
            <li key={note.id}>
              <NoteMenu note={note} notebookId={notebookId} selected={isSelected} />
            </li>
          );
        })}
      </ul>
    </NoteExplorerWrapper>
  );
}

export default NoteExplorer;

const NoteExplorerWrapper = styled.nav`
  flex-shrink: 0;
  height: 100%;
  width: 270px;
  color: #8a8a8a;
  background-color: #1c1d1d;
  border-right: 1px solid #111114;
`;

const Header = styled.div`
  height: 38px;
  background-color: #232426;
  border-bottom: 1px solid #111114;
  display: flex;
  align-items: center;
  padding: 0 18px;
`;

const Title = styled.h2`
  color: #d9d9d9;
`;
