import { $getRoot, CLEAR_HISTORY_COMMAND, EditorState, EditorThemeClasses } from 'lexical';
import { InitialConfigType, LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HeadingNode } from '@lexical/rich-text';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

import styled from 'styled-components';
import { useUpdateNoteContent } from '../../../../hooks/controler/note/useUpdateNoteContent';
import { Note } from '../../../../utils/controler/types/Note';
import { updateNoteTitle } from '../../../../utils/controler/note/updateNoteTitle';
import { useEffect } from 'react';

const EMPTY_EDITOR_STATE =
  '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}';

const UpdatePlugin = ({ note }: { note: Note }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const editorState = editor.parseEditorState(note.content.length > 0 ? note.content : EMPTY_EDITOR_STATE);
    editor.setEditorState(editorState);

    editor.dispatchCommand(CLEAR_HISTORY_COMMAND, undefined);
  }, [note.id]);

  return null;
};

const EditorTheme: EditorThemeClasses = {
  root: 'editor-root',
  paragraph: 'editor-paragraph',
};

interface NoteEditorProps {
  note: Note;
}

function NoteEditor({ note }: NoteEditorProps) {
  const updateNoteContent = useUpdateNoteContent();

  const initialConfig: InitialConfigType = {
    namespace: 'NoteEditor',
    theme: EditorTheme,
    nodes: [HeadingNode],
    editorState: note.content || undefined,
    onError: (error: Error) => {
      console.error(error);
    },
  };

  let timeout: NodeJS.Timeout | null = null;

  const onChange = (editorState: EditorState) => {
    if (note.id === '') return;
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(() => {
      editorState.read(() => {
        const textContent = $getRoot().getTextContent();
        const splitedTextContent = textContent.split(/\r\n|\r|\n/);
        const title = splitedTextContent[0] ?? '';

        const findFirstTextContent = (arrOfStr: string[]) => {
          for (let i = 1; i < arrOfStr.length; i++) {
            const str = arrOfStr[i];
            if (str.length > 0) return str;
          }
          return '';
        };

        const preview = findFirstTextContent(splitedTextContent);

        const editorStateJSON = editorState.toJSON();
        updateNoteTitle(note.id, title);
        updateNoteContent(note.id, JSON.stringify(editorStateJSON), preview);
      });
    }, 500);
  };

  return (
    <NoteEditorWrapper>
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<div className="editor-placeholder">Type / for menu or select from Templates</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={onChange} />
        <UpdatePlugin note={note} />
      </LexicalComposer>
    </NoteEditorWrapper>
  );
}

export default NoteEditor;

const NoteEditorWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  position: relative;

  .editor-root {
    width: 100%;
    height: 100%;
    padding: 30px 80px;
    outline: none;
  }

  .editor-placeholder {
    position: absolute;
    top: 30px;
    left: 80px;
  }

  .editor-paragraph {
    color: #d9d9d9;
    font-size: 0.875rem;
    line-height: 1.7;
    &:first-child {
      font-size: 1.25rem;
    }
  }
`;
