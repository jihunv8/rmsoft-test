import styled from 'styled-components';
import Notes from '../../../components/work-space/Notes';
import { useNotes } from '../../../hooks/controler/note/useNotes';
import { useParams } from 'react-router-dom';
import { useNote } from '../../../hooks/controler/note/useNote';

function NoteInAllNotes() {
  const { noteId } = useParams<{ noteId: string }>();
  if (noteId === undefined) throw new Error('noteId가 undefined입니다.');

  const { data: notes } = useNotes();
  const { data: note } = useNote(noteId);

  return (
    <NoteInAllNotesWrapper>
      <Notes notes={notes} selectedNote={note} />
    </NoteInAllNotesWrapper>
  );
}

export default NoteInAllNotes;

const NoteInAllNotesWrapper = styled.section`
  width: 100%;
  height: 100%;
`;
