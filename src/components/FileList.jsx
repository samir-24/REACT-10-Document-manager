import React from "react";
import { useDispatch } from "react-redux";
import { deleteFile } from "../features/fileSlice";
import FileCard from "./FileCard";

const FileList = ({ files }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {files.map((file) => (
        <FileCard
          key={file.url}
          file={file}
          onDelete={(file) => dispatch(deleteFile(file))}
        />
      ))}
    </div>
  );
};

export default FileList;