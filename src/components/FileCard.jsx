import React from "react";

const FileCard = ({ file, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full overflow-hidden">
      
      <p className="font-semibold text-lg truncate">{file.name}</p>

      {file.type?.startsWith("image/") && (
        <a href={file.url} target="_blank">
          <img
            src={file.url}
            alt=""
            className="w-full h-48 object-cover rounded mt-2"
          />
        </a>
      )}

      <p className="text-sm text-gray-500 mt-2">{file.type}</p>
      <p className="text-xs text-gray-400">{file.date}</p>
      <p className="text-xs text-gray-400">
        {(file.size / 1024).toFixed(2)} KB
      </p>

      <div className="flex gap-2 mt-3">
        <a
          href={file.url}
          target="_blank"
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
        >
          View
        </a>

        <button
          onClick={() => onDelete(file)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FileCard;