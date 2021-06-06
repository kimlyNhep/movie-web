import React, { CSSProperties, Dispatch, SetStateAction, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { Image } from 'antd';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

interface IDropZone {
  setSelectedFile: Dispatch<SetStateAction<{ preview: string } | undefined>>;
  selectedFile: any;
  height: number;
}

export const UploadDropZone: React.FC<IDropZone> = ({
  setSelectedFile,
  selectedFile,
  height,
}) => {
  const { isDragActive, isDragAccept, isDragReject } = useDropzone({
    accept: 'image/*',
  });
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setSelectedFile(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )[0]
      );
    },
  });

  const style = useMemo(
    () =>
      ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {}),
      } as CSSProperties),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = (
    <div>
      <Image src={selectedFile?.preview} preview={false} />
    </div>
  );

  return (
    <section>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside
        className='mt-8 overflow-hidden flex justify-center'
        style={{ minHeight: height }}
      >
        {thumbs}
      </aside>
    </section>
  );
};
