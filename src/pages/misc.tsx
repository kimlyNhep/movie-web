import React, { useState } from 'react';
import { Upload, message, Button } from 'antd';
import ImgCrop from 'antd-img-crop';
import { UploadFile } from 'antd/lib/upload/interface';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useUploadMoviePhotoMutation } from '../generated/graphql';

function beforeUpload(file: Blob) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

function getBase64(img: Blob, callback: (result: string | undefined) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () =>
    callback(reader.result as string | undefined)
  );
  reader.readAsDataURL(img);
}

const Demo = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [selectedFile, setSelectedFile] = useState<Blob>();
  const [fileList] = useState<UploadFile<any>[]>([]);
  const [uploadMoviePhoto] = useUploadMoviePhotoMutation();

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(false);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        setImageUrl(imageUrl);
      });

      setSelectedFile(info.file.originFileObj);
    }
  };

  const onPreview = async (file: any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow!.document.write(image.outerHTML);
  };

  const onRemoveImage = () => {
    setImageUrl('');
  };

  const onUpload = async () => {
    try {
      const response = await uploadMoviePhoto({
        variables: {
          id: '39e4cf12-2662-43c0-8309-5754999d3d40',
          photo: selectedFile,
        },
      });
      if (response.data?.uploadMoviePhoto.imageUrl) {
        console.log('success');
      } else if (response.data?.uploadMoviePhoto.errors) {
        console.log('error');
      }
    } catch (err) {}
  };

  const uploadButton = (
    <div>{loading ? <LoadingOutlined /> : <PlusOutlined />}</div>
  );

  return (
    <>
      <ImgCrop rotate>
        <Upload
          listType='picture-card'
          onChange={handleChange}
          onPreview={onPreview}
          beforeUpload={beforeUpload}
          onRemove={onRemoveImage}
        >
          {fileList.length < 1 && imageUrl ? null : uploadButton}
        </Upload>
      </ImgCrop>
      <Button onClick={onUpload}>Upload</Button>
    </>
  );
};

export default Demo;
