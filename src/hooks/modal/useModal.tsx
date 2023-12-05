import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const Modal = ({ children }: PropsWithChildren) => {
    return (
      <ModalWrapper
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeModal();
          }
        }}
      >
        {children}
      </ModalWrapper>
    );
  };

  const ModalWrapper = styled.div`
    display: ${isOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10;

    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  `;

  return [openModal, closeModal, Modal] as const;
};
