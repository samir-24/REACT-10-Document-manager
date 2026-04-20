import React, { useState } from "react";
import UploadFile from "../components/UploadFile";
import FileList from "../components/FileList";
import SearchFilter from "../components/SearchFilter";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const { list } = useSelector((state) => state.files);

  const filteredFiles = list.filter((file) =>
    file.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-3xl font-bold text-center mb-6">
          Digital Document Manager
        </h1>

        <SearchFilter setSearch={setSearch} />
        <UploadFile />
        <FileList files={filteredFiles} />

      </div>

    </div>
  );
};

export default Dashboard;