import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NoteMenuProps {
  selected?: boolean;
}

function NoteMenu({ selected = false }: NoteMenuProps) {
  return (
    <NoteMenuWrapper selected={selected}>
      <Anchor to="/notebooks/notebook1/notes/note1">
        <InnerWrapper selected={selected}>
          <Title>note1</Title>
          <Contents>note1 is ...</Contents>
          <Date>Today, 1:32PM</Date>
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
