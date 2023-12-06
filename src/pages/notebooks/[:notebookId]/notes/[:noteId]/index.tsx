import styled from 'styled-components';
import Notes from '../../../../../components/work-space/Notes';
import { getNotes } from '../../../../../utils/controler/note/getNotes';
import { useParams } from 'react-router-dom';

function NoteInNotebook() {
  const { notebookId } = useParams<{ notebookId: string }>();
  const { data: notes } = getNotes(notebookId);

  return (
    <NoteInNotebookWrapper>
      <Notes notes={notes} notebookId={notebookId} />
    </NoteInNotebookWrapper>
  );
}

export default NoteInNotebook;

const NoteInNotebookWrapper = styled.section`
  width: 100%;
  height: 100%;
`;
