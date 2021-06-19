import { FC } from 'react';
let ReactQuill =
  typeof window === 'object' ? require('react-quill') : () => false;

import 'react-quill/dist/quill.snow.css';

interface IRichEditorProps {
  theme?: string;
  onChange: (content: string) => void;
  content?: string;
}

export const RichEditor: FC<IRichEditorProps> = (props) => {
  const { onChange, content, theme } = props;

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  return (
    <ReactQuill
      theme={theme}
      placeholder={'Start from here..'}
      value={content || ''}
      onChange={onChange}
      formats={formats}
      modules={modules}
    />
  );
};
