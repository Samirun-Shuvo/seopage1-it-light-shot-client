import React, { useState } from "react";
import { MdAssignment } from "react-icons/md";
import { FaElementor } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { IoMdAttach } from "react-icons/io";
import { FaCalendarDays } from "react-icons/fa6";

const Card = ({ index, task }) => {
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

  // State for managing the modal and attachments
  const [showModal, setShowModal] = useState(false);
  const [attachments, setAttachments] = useState([]);

  // Function to handle attachment icon click, opens modal
  const handleAttachedFile = (taskId) => {
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const fileList = files.map((file) => ({
      name: file.name,
      extension: file.name.split(".").pop(),
    }));
    setAttachments((prevAttachments) => [...prevAttachments, ...fileList]);
  };
  const handleSubmitData = (id) => {
    console.log(id);
  };

  return (
    <div className="card bg-base-100 w-96 shadow-md my-3">
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
          <div className="avatar items-center">
            <div className="w-6 rounded-full m-1">
              <img src={avatarUrl} alt="client" />
            </div>
            <div className="w-6 rounded-full m-1">
              <img src={avatarUrl} alt="assignee" />
            </div>
          </div>
          <div>12 + </div>
          <div className="flex items-center">
            <FaRegComments />
            <p className="px-1">{commentsCount}</p>
          </div>
          <div
            onClick={() => handleAttachedFile(id)}
            className="flex items-center cursor-pointer"
          >
            <IoMdAttach />
            <p className="px-1">{attachments.length}</p>
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
                onClick={() => handleSubmitData(id)}
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
