import { IUserType } from "../../types/user";
import styles from "./styles.module.css";
import cx from "classnames";
import { useEffect, useState } from "react";
import { Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useUploadProfileMutation } from "../../generated/graphql";

interface IProfileProps {
  profile?: IUserType;
}

function getBase64(img: Blob, callback: (arg: any) => void) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export const ProfileSide: React.FC<IProfileProps> = ({ profile }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [
    uploadProfile,
    { loading: uploadLoading },
  ] = useUploadProfileMutation();

  const handleChange = async (info: any) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      await uploadProfile({
        variables: {
          photo: info.file.originFileObj,
        },
      });

      getBase64(info.file.originFileObj, (imageUrl: any) => {
        setImageUrl(imageUrl);
        setLoading(false);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  useEffect(() => {
    if (profile) setImageUrl(profile?.photo!);
  }, [profile]);

  useEffect(() => {
    if (uploadLoading) setLoading(true);
    else setLoading(false);
  }, [uploadLoading]);

  return (
    <div className={styles.profileSide}>
      <div className={cx(styles.photo, "relative")}>
        <div>
          <Upload
            name='avatar'
            listType='picture-card'
            className='avatar-uploader'
            showUploadList={false}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl!} alt='avatar' style={{ height: "250px" }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </div>
      </div>
    </div>
  );
};
