import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useCreateNote } from '../../../hooks/controler/note/useCreateNote';

function Notebook() {
  const { notebookId } = useParams<{ notebookId: string }>();
  const navigate = useNavigate();
  const createNote = useCreateNote();

  const onCreateNote = () => {
    if (notebookId === undefined) {
      const { data: createdNote } = createNote('', '');
      navigate(`/allnotes/${createdNote.id}`);
      return;
    }

    const { data: createdNote } = createNote('', '', notebookId);
    navigate(`/notebooks/${encodeURIComponent(notebookId)}/notes/${createdNote.id}`);
  };

  return (
    <NotebookWrapper>
      <ContentsContainer>
        <Thumbnail />
        <Description>Have a thought to jot down? Tap on the button below</Description>
        <NewNoteButton onClick={onCreateNote}>New Note</NewNoteButton>
      </ContentsContainer>
    </NotebookWrapper>
  );
}

export default Notebook;

const NotebookWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Thumbnail = styled.div`
  width: 100px;
  height: 125px;
  border-radius: 10px;
  background-color: #c6292d;
  background: linear-gradient(135deg, #c6292d 50%, #ff7b76);
`;

const Description = styled.p`
  color: #858585;
  margin-top: 30px;
`;

const NewNoteButton = styled.button`
  margin-top: 8px;
  padding: 10px 12px;
  color: #2c6bca;
  border: none;
  background-color: transparent;
`;
