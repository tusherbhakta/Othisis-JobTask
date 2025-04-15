import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { PiUploadSimpleLight } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
// Sidebar with draggable template items
const TemplateSidebar = ({ templates }) => {
  return (
    <div className="w-64 bg-[#E3E3E3] border-r border-gray-200 p-4">
      <h2 className="font-bold text-xl text-center mb-4">Templates</h2>
      <div className="bg-white rounded-xl">
        <input
          type="text"
          placeholder="Search Templates"
          className="mb-4 w-full px-2 py-1 border text-center border-gray-300 rounded"
        />
        <div className="h-[400px] overflow-y-auto text-center pr-2 space-y-2">
          {templates.map((item, index) => (
            <DraggableItem key={index} item={item} />
          ))}
        </div>
      </div>
      <button className="w-full mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-600">
        Edit
      </button>
    </div>
  );
};

// Draggable item component
const DraggableItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "template",
    item: { item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`bg-gray-100 text-gray-800 p-2 rounded-md text-sm cursor-move ${isDragging ? "opacity-50" : ""
        }`}
    >
      {item}
    </div>
  );
};

// Drop zone where items land
const DropZone = ({ onDrop, children }) => {
  const [, drop] = useDrop(() => ({
    accept: "template",
    drop: (item) => onDrop(item.item),
  }));

  return (
    <div ref={drop} className="flex-1 bg-white px-6  overflow-y-auto">
      {children}
    </div>
  );
};

// Main content area
const RootCanalNote = ({ droppedItems, onContentChange, onSave }) => {
  const defaultNotes = [
    { label: "Subjective", text: "Toothache for few days." },
    {
      label: "History of Presenting Complaint",
      text: "Toothache present for few days.",
    },
    { label: "Extra Oral Examination", text: "Not performed" },
    {
      label: "Intra Oral Examination",
      text: "Tenderness around molar\nSwollen gum",
    },
    {
      label: "Radiographic Findings",
      text: "X-ray planned to confirm extent of infection",
    },
    { label: "Diagnosis", text: "Suspected tooth abscess" },
    {
      label: "Treatment",
      text: "Root canal planned to remove infected tissue",
    },
  ];

  return (
    <div className="flex bg-[#E3E3E3] pl-10 flex-col">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Root Canal</h1>
        <div className="flex items-center space-x-2">
        <button className="px-4 py-2 cursor-pointer gap-2 items-center flex border border-gray-300 bg-white rounded-xl m-5 hover:bg-gray-100">
          <FaMicrophone size={18} className="text-black" />
          Resume
        </button>
        <button className="px-2 py-2 ">
          <PiUploadSimpleLight size={25} className="text-black cursor-pointer" />
        </button>
        <button className="px-2 py-2 ">
          <MdDeleteOutline size={25} className="text-red-500 cursor-pointer" />
        </button>
        </div>
      </div>

      <div className="h-10/12 overflow-y-auto bg-white pb-6 pt-6 mr-6 space-y-4">
        {defaultNotes.map((item, index) => (
          <div
            key={`note-${index}`}
            className="bg-[#E3E3E3] w-11/12 mx-auto rounded p-4"
          >
            <strong>{item.label}:</strong>
            <p className="whitespace-pre-line">{item.text}</p>
          </div>
        ))}

        {droppedItems.map((item, index) => (
          <div
            key={`dropped-${index}`}
            className="bg-[#E3E3E3] rounded p-4 w-11/12 mx-auto"
          >
            <strong>{item.label}:</strong>
            {item.isSaved ? (
              <p className="mt-1 whitespace-pre-line text-gray-800">
                {item.content}
              </p>
            ) : (
              <>
                <textarea
                  rows={3}
                  placeholder="Enter content..."
                  value={item.content}
                  onChange={(e) => onContentChange(index, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded text-sm mt-2"
                />
                <button
                  className="mt-2 px-4 py-1 bg-black text-white rounded hover:bg-gray-700 text-sm"
                  onClick={() => onSave(index)}
                >
                  Save
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Main page component
export default function HomePage() {
  const [templates] = useState([
    "Subjective",
    "Objective",
    "Assessment & Plan",
    "Findings",
    "Diagnoses",
    "Treatment",
    "Recovery",
  ]);

  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (label) => {
    setDroppedItems((prev) => [...prev, { label, content: "", isSaved: false }]);
  };

  const handleContentChange = (index, newContent) => {
    setDroppedItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, content: newContent } : item
      )
    );
  };

  const handleSave = (index) => {
    setDroppedItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isSaved: true } : item
      )
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-11/12 mx-auto flex flex-col h-screen bg-gray-100">
        <div className="flex mt-6 flex-1 overflow-hidden">
          <TemplateSidebar templates={templates} />
          <DropZone onDrop={handleDrop}>
            <RootCanalNote
              droppedItems={droppedItems}
              onContentChange={handleContentChange}
              onSave={handleSave}
            />
          </DropZone>
        </div>
      </div>
    </DndProvider>
  );
}

