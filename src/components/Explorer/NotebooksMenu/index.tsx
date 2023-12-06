import styled from 'styled-components';
import arrowIcon from '../../../images/icons/arrow.svg';
import crossIcon from '../../../images/icons/cross.svg';
import { useState } from 'react';
import NotebookMenuList from './NotebookMenuList';
import { useModal } from '../../../hooks/modal/useModal';
import NotebookCreator from '../../NotebookCreator';
import { Link } from 'react-router-dom';

function NotebooksMenu() {
  const [isListOpen, setIsListOpen] = useState(false);
  const [openModal, closeModal, Modal] = useModal();

  const onToggle = () => {
    setIsListOpen((prev) => !prev);
  };

  return (
    <NotebooksMenuWrapper>
      <Modal>
        <NotebookCreator closeModal={closeModal} />
      </Modal>
      <Menu>
        <TogleButton onClick={onToggle} open={isListOpen}>
          <div className="image-container">
            <img alt="arrow-icon" src={arrowIcon} />
          </div>
        </TogleButton>
        <Anchor to="/notebooks">NOTEBOOKS</Anchor>
        <AddButton onClick={openModal}>
          <div className="image-container">
            <img alt="cross-icon" src={crossIcon} />
          </div>
        </AddButton>
      </Menu>
      {isListOpen && <NotebookMenuList />}
    </NotebooksMenuWrapper>
  );
}

export default NotebooksMenu;

const NotebooksMenuWrapper = styled.div``;

const Menu = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

const TogleButton = styled.button<{ open: boolean }>`
  width: 24px;
  height: 100%;
  background-color: transparent;
  border: none;

  > .image-container {
    width: 7px;
    height: 12px;

    > img {
      transform: ${({ open }) => (open ? 'rotate(90deg)' : 'rotate(0)')};
    }
  }
`;

const Anchor = styled(Link)`
  height: 100%;
  color: #418af9;
  text-decoration: none;

  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const AddButton = styled.button`
  width: 31px;
  color: #418af9;
  height: 100%;
  background-color: transparent;
  border: none;

  > .image-container {
    width: 13px;
    height: 13px;
  }
`;
