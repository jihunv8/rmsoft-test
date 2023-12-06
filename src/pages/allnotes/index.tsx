import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useCreateNote } from '../../hooks/controler/note/useCreateNote';

function AllNotes() {
  const navigate = useNavigate();
  const createNote = useCreateNote();

  const onCreateNote = () => {
    const { data: createdNote } = createNote('', '', '');
    navigate(`/allnotes/${createdNote.id}`);
    return;
  };

  return (
    <NotebookWrapper>
      <ContentsContainer>
        <Icon>!</Icon>
        <Description>Have a thought to jot down? Tap on the button below</Description>
        <NewNoteButton onClick={onCreateNote}>New Note</NewNoteButton>
      </ContentsContainer>
    </NotebookWrapper>
  );
}

export default AllNotes;

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

const Icon = styled.div`
  color: #d9d9d9;
  font-size: 5rem;
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
