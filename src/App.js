import { useEffect, useState } from "react";
import "./App.css";
import axiosInstance from "./AxiosInterceptor";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("doc", selectedFile);

    try {
      console.log("befoer req");
      const { data } = await axiosInstance.post("data/add/excel", formData, {
        onUploadProgress: (ProgressEvent) => {
          const progress = Math.round(
            (ProgressEvent.loaded * 100) / ProgressEvent.total
          );
          setUploadProgress(progress);
        },
      });
      console.log("data is ", data);
      // File uploaded successfully
    } catch (error) {
      // Handle error
      console.log("error called")
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {<p>Upload Progress: {uploadProgress}%</p>}
    </>
  );
}

export default App;
