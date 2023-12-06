import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Notebook } from '../../../../../utils/controler/types/Notebook';

import { useNotes } from '../../../../../hooks/controler/note/useNotes';
import { useDeleteNotebook } from '../../../../../hooks/controler/notebook/useDeleteNotebook';

interface NotebookMenuProps {
  notebook: Notebook;
  selected?: boolean;
}

function NotebookMenu({ notebook, selected = false }: NotebookMenuProps) {
  const { data: notes } = useNotes(notebook.id);
  const deleteNotebook = useDeleteNotebook();
  const navigate = useNavigate();
  const { notebookId } = useParams<{ notebookId?: string }>();

  const onDeleteNotebook = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    deleteNotebook(notebook.id);
    if (notebookId === notebook.id) {
      navigate('/notebooks');
    }
  };

  return (
    <NotebookMenuWrapper selected={selected}>
      <Anchor to={`/notebooks/${encodeURIComponent(notebook.id)}`}>
        <NameArea>
          <Thumbnail></Thumbnail>
          <Name>{notebook.id}</Name>
          {notes.length <= 0 || <NumOfNotes>{notes.length}</NumOfNotes>}
        </NameArea>
      </Anchor>
      <DeleteButton onClick={onDeleteNotebook}>X</DeleteButton>
    </NotebookMenuWrapper>
  );
}

export default NotebookMenu;

const DeleteButton = styled.button`
  height: 100%;
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

const NotebookMenuWrapper = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? '#28292b' : 'transparent')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;

  &:hover {
    background-color: #28292b;

    > ${DeleteButton} {
      visibility: visible;
    }
  }
`;

const Anchor = styled(Link)`
  flex-basis: 100%;
  display: flex;
  align-items: center;
  padding: 6px 0 7px 24px;
  text-decoration: none;
  overflow: hidden;
`;

const Thumbnail = styled.div`
  width: 21px;
  height: 26px;
  border-radius: 2px;
  background: linear-gradient(135deg, #c6292d 50%, #ff7b76);
  flex-shrink: 0;
`;

const NameArea = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  overflow: hidden;
`;

const Name = styled.span`
  font-size: 0.875;
  color: #d9d9d9;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const NumOfNotes = styled.span`
  font-size: 0.8125;
  color: #858585;
`;
