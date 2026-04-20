import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFile } from "../features/fileSlice";

const UploadFile = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.files);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(uploadFile(file));
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <input type="file" onChange={handleUpload} />

      {loading && <p className="text-blue-500 mt-2">Uploading...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default UploadFile;