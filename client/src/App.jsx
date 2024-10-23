import { useEffect, useState } from "react";
import useDrivePicker from "react-google-drive-picker";
import drive from "./assets/google-drive.svg";
import upload from "./assets/upload.svg";
function App() {
  const [openPicker, authResponse] = useDrivePicker();
  const [fileData, setFileData] = useState([]);
  console.log(fileData, "fileuploaded data");

  const handleOpenPicker = () => {
    openPicker({
      clientId:
        "404879240094-od09a0fjk17g1qnh39otkh00umo3832m.apps.googleusercontent.com",
      developerKey: "AIzaSyC84CZuJXJwe-RsOTFkeeFrcqkSaJJFnnE",
      viewId: "DOCS",
      token:
        "ya29.a0AcM612za8NTlaOXP9VhrEAGWoeQKCg4b14PvgLGlsQWblojAmY5o3f4awNoUitls8mmpWPMAwVgioRJpbUyx6wuyKIeoHdXYGJ58SeQGxoaMSdVq0PltkLjdrMIR7nKN19gcD_1ZKVmwJL1DcYxU8iQqPACr3JoSqIA8OwOsaCgYKAUYSARASFQHGX2MiuRKiOMakV7sPISGLgn4prg0175",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log(data, "docs data");
        setFileData(data);
        console.log(data.action, "is the action clicked");
      },
    });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="   border-2  rounded-md  border-black flex p-12 flex-col items-center justify-center ">
        <div className=" border-dashed rounded-md  border-gray-500  flex flex-col items-center p-12 border-2 justify-center ">
          {/*  */}
          <img width={70} src={drive} alt="" />

          <button
            onClick={() => handleOpenPicker()}
            className="bg-blue-500 flex items-center gap-4 hover:bg-blue-400 transition-all duration-300 rounded-xl text-white  px-8 py-2  font-semibold tracking-wide"
          >
            Click here to upload files{" "}
            <span>
              <img className="text-white" width={25} src={upload} alt="" />
            </span>
          </button>

          {fileData && fileData.action === "picked" ? (
            <a
              target="_blank"
              className="mt-4 text-blue-500 cursor-pointer hover:underline"
              href={fileData.docs[0].url}
            >
              <p>Click here to download or see the file</p>
            </a>
          ) : (
            <></>
          )}
          {fileData && fileData.length > 0 ? (
            <p>{fileData.docs[0].name}</p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
