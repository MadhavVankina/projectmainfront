import React, { useState, useEffect, useCallback, useMemo } from "react";
import { IoClose } from "react-icons/io5";
import { RiUpload2Fill } from "react-icons/ri";
import { FaFile } from "react-icons/fa";

const FileAttachment = ({
  name,
  label,
  onChange = () => {},
  validationRules = [],
  formSubmitted = false,
  onFocus = () => {},
  setIsError = () => {},
  accept = "*/*",
  maxSize = 5, // in MB
  multiple = false,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [isDragActive, setIsDragActive] = useState(false);

  const validateFiles = useCallback(
    (fileList) => {
      let error = "";

      if (formSubmitted && validationRules.includes("required") && fileList.length === 0) {
        error = "File attachment is required";
      }

      for (let file of fileList) {
        if (file.size > maxSize * 1024 * 1024) {
          error = `File size should not exceed ${maxSize}MB`;
        }
      }

      return error;
    },
    [validationRules, formSubmitted, maxSize]
  );

  const generatePreviews = useCallback((fileList) => {
    return Promise.all(
      Array.from(fileList).map((file) => {
        if (file.type.startsWith('image/')) {
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              resolve({
                type: 'image',
                url: reader.result,
                name: file.name,
                size: file.size
              });
            };
            reader.readAsDataURL(file);
          });
        } else {
          // For non-image files, return a default preview object
          return Promise.resolve({
            type: 'file',
            name: file.name,
            size: file.size,
            extension: file.name.split('.').pop().toLowerCase()
          });
        }
      })
    );
  }, []);

  const handleFileChange = useCallback(async (newFiles) => {
    const updatedFiles = multiple ? [...files, ...newFiles] : newFiles;
    const newPreviews = await generatePreviews(newFiles);
    
    setFiles(updatedFiles);
    setPreviews(multiple ? [...previews, ...newPreviews] : newPreviews);
    onChange({ target: { name, value: updatedFiles } });
  }, [files, multiple, onChange, name, previews, generatePreviews]);

  const removeFile = (indexToRemove) => {
    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
    const updatedPreviews = previews.filter((_, index) => index !== indexToRemove);
    setFiles(updatedFiles);
    setPreviews(updatedPreviews);
    onChange({ target: { name, value: updatedFiles } });
  };

  const validationResult = useMemo(
    () => validateFiles(files),
    [validateFiles, files]
  );

  useEffect(() => {
    setErrorMessage(validationResult);
    setIsError(validationResult.length > 0);
  }, [validationResult, setIsError]);

  useEffect(() => {
    if (isFocused) {
      setErrorMessage("");
    }
  }, [isFocused]);

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="flex flex-col gap-1 relative">
      {label && (
        <label className="text-black/60 dark:text-white/60 text-xs">
          {label}{" "}
          {validationRules.includes("required") && (
            <span className="text-red-600 dark:text-red-300">*</span>
          )}
        </label>
      )}
      
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragActive(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsDragActive(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragActive(false);
          handleFileChange(Array.from(e.dataTransfer.files));
        }}
        className={`
          relative border-2 border-dashed p-4
          bg-fieldColor-light/10 dark:bg-fieldColor-dark/10 
          border-fieldColor-light/20 dark:border-fieldColor-dark/20
          ${isDragActive ? "border-blue-500 dark:border-blue-400" : ""}
          min-h-[100px]
        `}
      >
        <input
          type="file"
          name={name}
          accept={accept}
          multiple={multiple}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={(e) => handleFileChange(Array.from(e.target.files))}
          onFocus={() => {
            setIsFocused(true);
            onFocus();
          }}
          onBlur={() => setIsFocused(false)}
        />
        
        {previews.length === 0 ? (
          <div className="flex flex-col items-center gap-2">
            <RiUpload2Fill className="w-6 h-6 text-fieldColor-light/50 dark:text-fieldColor-dark/50" />
            <p className="text-sm text-fieldColor-light/50 dark:text-fieldColor-dark/50">
              Drag and drop files here or click to browse
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {previews.map((preview, index) => (
              <div
                key={index}
                className="relative group bg-fieldColor-light/5 dark:bg-fieldColor-dark/5 p-2 rounded"
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeFile(index);
                  }}
                  className="absolute -right-2 -top-2 z-10 bg-red-500 text-white rounded-full p-1 
                           opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <IoClose className="w-4 h-4" />
                </button>

                {preview.type === 'image' ? (
                  <img
                    src={preview.url}
                    alt={preview.name}
                    className="w-full h-20 object-cover rounded"
                  />
                ) : (
                  <div className="w-full h-32 flex items-center justify-center bg-fieldColor-light/10 dark:bg-fieldColor-dark/10 rounded">
                    <FaFile className="w-12 h-12 text-fieldColor-light/50 dark:text-fieldColor-dark/50" />
                  </div>
                )}
                
                <div className="mt-2 text-xs">
                  <p className="truncate" title={preview.name}>{preview.name}</p>
                  <p className="text-fieldColor-light/50 dark:text-fieldColor-dark/50">
                    {formatFileSize(preview.size)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

const ErrorMessage = ({ message }) => (
  <p className="absolute text-[11px] font-medium -bottom-1 left-1 text-red-600 dark:text-red-300">
    {message}
  </p>
);

export default FileAttachment;