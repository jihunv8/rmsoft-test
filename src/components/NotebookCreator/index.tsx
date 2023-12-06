import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import { useCreateNotebook } from '../../hooks/controler/notebook/useCreateNotebook';

interface NotebookCreator {
  closeModal: () => void;
}

function NotebookCreator({ closeModal }: NotebookCreator) {
  const [inputName, setInputName] = useState('');
  const navigate = useNavigate();
  const createNotebook = useCreateNotebook();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputName.length <= 0) return;

    const { data: createdNotebook } = createNotebook(inputName);

    navigate(`/notebooks/${encodeURIComponent(createdNotebook.id)}`);
    closeModal();
  };

  const onInputNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  return (
    <NotebookCreatorWrapper>
      <Top>
        <Title>Create New Notebook</Title>
      </Top>
      <Form onSubmit={onSubmit}>
        <div>
          <Field>
            <div>
              <FieldName>Name</FieldName>
            </div>
            <FieldEditorArea>
              <Input value={inputName} onChange={onInputNameChange} placeholder="Enter notebook name" />
            </FieldEditorArea>
          </Field>
        </div>
        <FormBottom>
          <SubmitButton active={inputName.length > 0}>Create</SubmitButton>
        </FormBottom>
      </Form>
    </NotebookCreatorWrapper>
  );
}

export default NotebookCreator;

const NotebookCreatorWrapper = styled.div`
  background-color: #242525;
  padding: 22px 30px 15px;
  border-radius: 5px;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  color: #d9d9d9;
  font-size: 1.125rem;
`;

const Form = styled.form`
  margin-top: 30px;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FieldName = styled.div`
  width: 100px;

  color: #d9d9d9;
  font-size: 0.875rem;
`;

const FieldEditorArea = styled.div`
  width: 410px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 2px;
  outline: none;

  background-color: #3d3d41;

  color: #d9d9d9;
  caret-color: #418af9;
`;

const FormBottom = styled.div`
  display: flex;
  justify-content: flex-end;

  padding-top: 15px;
`;

const SubmitButton = styled.button<{ active: boolean }>`
  padding: 8px 20px;
  background-color: transparent;

  border: 1px solid #5b5b5b;
  border-radius: 4px;

  color: #858585;
  cursor: default;
  ${({ active }) =>
    active &&
    css`
      cursor: pointer;
      background-color: #418af9;
      color: #fff;
      border: none;

      &:hover {
        background-color: #2c6bca;
      }
    `};
`;
