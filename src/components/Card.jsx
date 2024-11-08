import React, { useState } from "react";
import { MdAssignment } from "react-icons/md";
import { FaElementor, FaRegComments } from "react-icons/fa";
import { IoMdAttach } from "react-icons/io";
import { FaCalendarDays } from "react-icons/fa6";
import axios from "axios";
import Swal from "sweetalert2";

const Card = ({ task }) => {
  const {
    assigneeName,
    avatarUrl,
    clientName,
    commentsCount,
    dueDate,
    taskDescription,
    taskProgress,
    id,
  } = task;

  const [showModal, setShowModal] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fetchedFilesCount, setFetchedFilesCount] = useState(0); // State to store fetched files count

  const handleAttachedFile = () => {
    // Clear previously attached files
    setAttachments([]);
    setSelectedFiles([]);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const updatedFiles = files.map((file) => ({
      name: file.name,
      extension: file.name.split(".").pop(),
      file,
    }));

    setAttachments((prev) => [...prev, ...updatedFiles]);
    setSelectedFiles((prev) => [...prev, ...files]);
  };

  const handleSubmitData = async () => {
    const formData = new FormData();
    formData.append("taskId", id);
    selectedFiles.forEach((file) => formData.append("files", file));

    try {
      const response = await axios.post(
        "http://localhost:5000/uploadfiles",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.data.status == "exist") {
        Swal.fire({
          icon: "error",
          text: response.data.message,
        });
      }

      if (response.status === 200) {
        const taskFilesResponse = await axios.get(
          `http://localhost:5000/uploadfiles/${id}`
        );
        setFetchedFilesCount(taskFilesResponse.data.files.length);
      }
      closeModal(); // Close the modal after successful upload
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-md my-3">
      {/* Card content */}
      <div className="p-2">
        <div className="flex justify-between items-center py-2">
          <div className="avatar items-center">
            <div className="w-6 rounded-full">
              <img src={avatarUrl} alt="client" />
            </div>
            <p className="pl-1">
              <small>{clientName}</small>
            </p>
          </div>
          <div className="avatar items-center">
            <div className="w-6 rounded-full">
              <img src={avatarUrl} alt="assignee" />
            </div>
            <p className="pl-1">
              <small>{assigneeName}</small>
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <FaElementor />
            <p className="px-2">
              <small>{taskDescription}</small>
            </p>
          </div>
          <div className="flex items-center">
            <MdAssignment />
            <p>
              <small>{taskProgress}</small>
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <FaRegComments />
            <p className="px-1">{commentsCount}</p>
          </div>
          <div
            onClick={handleAttachedFile}
            className="flex items-center cursor-pointer"
          >
            <IoMdAttach />
            <p className="px-1">{fetchedFilesCount}</p>{" "}
            {/* Display the fetched files count here */}
          </div>
          <div className="flex items-center">
            <FaCalendarDays />
            <p className="px-1">{dueDate}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl mb-4">Upload Attachments</h3>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="mb-4"
            />
            <div>
              <h4 className="text-lg">Attachments:</h4>
              <ul>
                {attachments.map((attachment, index) => (
                  <li key={index}>
                    {attachment.name} <small>({attachment.extension})</small>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center">
              <button
                className="bg-blue-500 text-white p-2 mt-4 rounded"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="bg-[#2b2e29] text-white p-2 mt-4 rounded"
                onClick={handleSubmitData}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
