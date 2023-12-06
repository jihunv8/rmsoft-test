import styled from 'styled-components';
import Notes from '../../../../../components/work-space/Notes';
import { useParams } from 'react-router-dom';
import { useNotes } from '../../../../../hooks/controler/note/useNotes';
import { useNote } from '../../../../../hooks/controler/note/useNote';

function NoteInNotebook() {
  const { notebookId, noteId } = useParams<{ notebookId: string; noteId: string }>();
  if (notebookId === undefined) throw new Error('notebookId가 undefined입니다.');
  if (noteId === undefined) throw new Error('noteId가 undefined입니다.');

  const { data: notes } = useNotes(notebookId);
  const { data: note } = useNote(noteId);

  return (
    <NoteInNotebookWrapper>
      <Notes notes={notes} selectedNote={note} notebookId={notebookId} />
    </NoteInNotebookWrapper>
  );
}

export default NoteInNotebook;

const NoteInNotebookWrapper = styled.section`
  width: 100%;
  height: 100%;
`;
