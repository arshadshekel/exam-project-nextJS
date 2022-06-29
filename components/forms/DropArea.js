// https://codesandbox.io/s/v68jl33m3l?file=/src/DropArea.js

import React, { useState, useEffect } from "react";

const DropArea = ({ image }) => {
  const [data, setData] = useState(false);
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    image ? setData(image) : "";
  }, [image]);

  const onDrop = (e) => {
    e.preventDefault();
    const {
      dataTransfer: { files },
    } = e;
    console.log("Files: ", files);
    const { length } = files;
    const reader = new FileReader();
    if (length === 0) {
      return false;
    }
    const fileTypes = ["image/jpeg", "image/jpg", "image/png"];
    const { size, type } = files[0];
    setData(false);
    if (!fileTypes.includes(type)) {
      setErr("File format must be either png or jpg");
      return false;
    }
    if (size / 1024 / 1024 > 2) {
      setErr("File size exceeded the limit of 2MB");
      return false;
    }
    setErr(false);
    reader.readAsDataURL(files[0]);
    reader.onload = (loadEvt) => {
      setData(loadEvt.target.result);
    };
    console.log(image);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {err && <p>{err}</p>}
      <div
        className="mt-5"
        onDrop={(e) => onDrop(e)}
        onDragOver={(e) => onDragOver(e)}
      >
        <label className="ml-6 block text-sm font-medium text-gray-700">
          Cover photo
        </label>
        <div className="mt-1 flex justify-center mx-6 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed ">
          {file || data ? (
            ""
          ) : (
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-backgroundWhite  font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={(event) => setFile(event.target.files[0])}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          )}

          {file ? <img src={URL.createObjectURL(file)} /> : <img src={data} />}
        </div>
        <div className="px-6 flex flex-row justify-center">
          {(data || file) && (
            <button
              onClick={() => {
                setData(false);
                setFile(false);
              }}
              className="px-5 py-2 text-white bg-red-500 my-5"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default DropArea;
