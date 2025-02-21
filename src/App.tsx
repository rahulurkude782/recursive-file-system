import { useState } from "react";
import {
  HiFolder,
  HiFolderOpen,
  HiMiniChevronDown,
  HiDocument,
} from "react-icons/hi2";
type Folder = {
  name: string;
  folder?: Folder[];
  file?: string[];
};

const folders: Folder[] = [
  {
    name: "Home",
    folder: [
      {
        name: "Movies",
        folder: [
          {
            name: "Action",
            file: ["The Harry Potter.mp4"],
          },
          {
            name: "Comedy",
          },
          {
            name: "Thriller",
          },
        ],
      },
    ],
  },
  {
    name: "Desktop",
  },
  {
    name: "Downloads",
  },
  {
    name: "Documents",
  },
];

function App() {
  return (
    <div className="h-100">
      <nav className="border-b border-gray-700 p-2">
        <h2 className="text-2xl">Recursive Folder FileSystem</h2>
      </nav>

      <div className="flex">
        <div className="w-[40px] h-screen border-r border-gray-700"></div>
        <div className="w-max h-screen flex flex-col border-r border-gray-700 p-5">
          {folders.map((folder) => (
            <Folder folder={folder} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Folder({ folder }: { folder: Folder }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <span>
        <button className="cursor-pointer" onClick={toggle}>
          <div className="flex items-center gap-1">
            <HiMiniChevronDown
              className={`rotate-0 ${
                isOpen && "rotate-180"
              } transition-transform duration-100 ease-in-out`}
            />
            {isOpen ? (
              <HiFolderOpen className="text-xl text-blue-400" />
            ) : (
              <HiFolder className="text-xl text-blue-400" />
            )}
            <span>{folder.name}</span>
          </div>
        </button>
        {isOpen &&
          folder.folder?.map((folder) => (
            <div className="pl-6">
              <Folder folder={folder} />
            </div>
          ))}
        {isOpen &&
          folder.file &&
          folder.file?.map((file) => (
            <div className="flex items-center gap-1 pl-6">
              <HiDocument />
              <span>{file}</span>
            </div>
          ))}
      </span>
    </>
  );
}

export default App;
