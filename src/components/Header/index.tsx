import styled from 'styled-components';
import { createNote } from '../../utils/controler/note/createNote';
import { useNavigate, useParams } from 'react-router-dom';
import { useCreateNote } from '../../hooks/controler/note/useCreateNote';

function Header() {
  const navigate = useNavigate();
  const { notebookId } = useParams<{ notebookId?: string }>();
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
    <HeaderWrapper>
      <NewNoteButton onClick={onCreateNote}>New Note</NewNoteButton>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  padding: 5px 125px;
  color: #8a8a8a;
  background-color: #1c1d1d;
  border-bottom: 1px solid #111114;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NewNoteButton = styled.button`
  padding: 10px 12px;
  border: none;
  border-radius: 4px;
  background-color: #418af9;

  color: #fff;

  &:hover {
    background-color: #2c6bca;
  }
`;
