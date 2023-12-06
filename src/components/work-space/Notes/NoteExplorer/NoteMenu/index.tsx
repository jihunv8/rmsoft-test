import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Note } from '../../../../../utils/controler/types/Note';
import { getFormedDate } from '../../../../../utils/formedDate/getFormedDate';
import { useDeleteNote } from '../../../../../hooks/controler/note/useDeleteNote';

interface NoteMenuProps {
  note: Note;
  notebookId?: string;
  selected?: boolean;
}

function NoteMenu({ note, selected = false, notebookId }: NoteMenuProps) {
  const baseLinkPath = notebookId === undefined ? '/allnotes/' : `/notebooks/${encodeURIComponent(notebookId)}/notes/`;
  const linkPath = baseLinkPath + note.id;
  const deleteNote = useDeleteNote();
  const navigate = useNavigate();

  const onDelete = () => {
    deleteNote(note.id);
    if (notebookId !== undefined) {
      navigate(`/notebooks/${encodeURIComponent(notebookId)}`);
      return;
    }

    navigate(`/allnotes`);
  };

  return (
    <NoteMenuWrapper selected={selected}>
      <Anchor to={linkPath}>
        <InnerWrapper selected={selected}>
          <Title>{note.title || 'New Note'}</Title>
          <Contents>{note.preview || 'No additinal text'}</Contents>
          <Date>{getFormedDate(note.updatedAt)}</Date>
        </InnerWrapper>
      </Anchor>
      <DeleteButtonContainer>
        <DeleteButton onClick={onDelete}>X</DeleteButton>
      </DeleteButtonContainer>
    </NoteMenuWrapper>
  );
}

export default NoteMenu;

const DeleteButtonContainer = styled.div`
  padding: 20px 16px;
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  visibility: hidden;
  background-color: transparent;
  border: none;

  color: #c6292d;

  &:hover {
    color: #ff7b76;
  }
`;

const NoteMenuWrapper = styled.div<{ selected: boolean }>`
  width: 100%;
  background-color: ${({ selected }) => (selected ? '#28292b' : 'transparent')};
  display: flex;

  &:hover ${DeleteButton} {
    visibility: visible;
  }
`;

const Anchor = styled(Link)`
  display: block;
  flex-basis: 100%;
  padding: 20px 16px 1px;
  text-decoration: none;
  overflow: hidden;
`;

const InnerWrapper = styled.div<{ selected: boolean }>`
  padding-bottom: 22px;
  border-bottom: solid 1px ${({ selected }) => (selected ? 'transparent' : '#303039')};
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
`;

const Title = styled.h3`
  color: #d9d9d9;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Contents = styled.div`
  color: #a7a7a7;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  color: #858585;
  font-size: 0.75rem;
`;
