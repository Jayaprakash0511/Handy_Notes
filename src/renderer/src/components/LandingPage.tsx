import { useState } from "react";
import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  FloatingNoteTitle,
  MarkdownEditor,
  NotePreviewList,
  RootLayout,
  Sidebar,
} from "@/components";
import logo from "@/assets/logo.png";

const App = ({ font, setClicked }) => {
  return (
    <RootLayout>
      <Sidebar className="p-2">
        <ActionButtonsRow setClicked={setClicked} className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3 space-y-1" onSelect={() => {}} />
      </Sidebar>
      <Content className="border-l bg-zinc-900/50 border-l-white/20">
        <FloatingNoteTitle className="pt-2" />
        <MarkdownEditor font={font} />
      </Content>
    </RootLayout>
  );
};
export const LandingPage = () => {
  const [clicked, setClicked] = useState<any>(false);

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column" }}>
      {!clicked ? (
        <>
          {/* Centered Logo at the Top */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "275px", // Adjust margin to position the logo
            }}
          >
            <img src={logo} alt="App Logo" className='logo' />
          </div>

          {/* Buttons at the Bottom */}
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              padding: "375px", // Padding to add space at the bottom
            }}
          >
            <button className="custom-button" onClick={() => setClicked("normal")}>
              Create Note
            </button>
            <button className="custom-button" onClick={() => setClicked("handwritten")}>
              Personalised Handwriting<sup><i>(beta)</i></sup>
            </button>
          </div>
        </>
      ) : (
        <App font={clicked} setClicked={setClicked} />
      )}
    </div>
  );
};

export default LandingPage;
