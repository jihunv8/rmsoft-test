import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Note } from '../../../../../utils/controler/types/Note';
import { getFormedDate } from '../../../../../utils/formedDate/getFormedDate';

interface NoteMenuProps {
  note: Note;
  notebookId?: string;
}

function NoteMenu({ note, notebookId }: NoteMenuProps) {
  const { noteId } = useParams<{ noteId: string }>();

  const baseLinkPath = notebookId === undefined ? '/allnotes/' : `/notebooks/${encodeURIComponent(notebookId)}/notes/`;
  const linkPath = baseLinkPath + note.id;

  const isSelected = noteId === note.id;
  return (
    <NoteMenuWrapper selected={isSelected}>
      <Anchor to={linkPath}>
        <InnerWrapper selected={isSelected}>
          <Title>{note.title || 'New Note'}</Title>
          <Contents>{note.content || 'No additinal text'}</Contents>
          <Date>{getFormedDate(note.updatedAt)}</Date>
        </InnerWrapper>
      </Anchor>
    </NoteMenuWrapper>
  );
}

export default NoteMenu;

const NoteMenuWrapper = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? '#28292b' : 'transparent')};
`;

const Anchor = styled(Link)`
  display: block;
  padding: 20px 16px 1px;
  text-decoration: none;
`;

const InnerWrapper = styled.div<{ selected: boolean }>`
  padding-bottom: 22px;
  border-bottom: solid 1px ${({ selected }) => (selected ? 'transparent' : '#303039')};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h3`
  color: #d9d9d9;
  font-size: 0.875rem;
`;

const Contents = styled.div`
  color: #a7a7a7;
  font-size: 0.875rem;
`;

const Date = styled.div`
  color: #858585;
  font-size: 0.75rem;
`;
