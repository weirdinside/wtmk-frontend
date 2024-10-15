import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header";

import LoginModal from "../LoginModal/LoginModal";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import NewTabOverlay from "../NewTabOverlay/NewTabOverlay";
import PreviewModal from "../PreviewModal/PreviewModal";
import RecipeFinder from "../RecipeFinder/RecipeFinder";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [activePhoto, setActivePhoto] = useState({image: null, source: null});

  function closeModal() {
    setActiveModal("");
  }

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  function openPreview() {
    setActiveModal("preview");
  }

  return (
    <div className="page">
      <Header isLoggedIn={isLoggedIn} setActiveModal={setActiveModal}></Header>
      <Routes>
        <Route
          path="/"
          element={<Main setActivePhoto={setActivePhoto} openPreview={openPreview}></Main>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/api" element={<RecipeFinder></RecipeFinder>}></Route>
      </Routes>

      <LoginModal
        closeModal={closeModal}
        setActiveModal={setActiveModal}
        activeModal={activeModal}
      ></LoginModal>

      <PreviewModal closeModal={closeModal} activePhoto={activePhoto} activeModal={activeModal}></PreviewModal>
      <Footer></Footer>
      <NewTabOverlay></NewTabOverlay>
    </div>
  );
}

export default App;
