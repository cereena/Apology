import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Landing from "./components/Landing";
import ApologyLetter from "./components/ApologyLetter";
import MySide from "./components/MySide";
import FrogGetPage from "./components/FrogGetPage";
import LastPage from "./components/LastPage";
import lastPageBg from "./assets/bg.png";
import letterBg from "./assets/letter.png";

import "./App.css";

import frogImage from "./assets/hypnotise.jpg";
// Change this to the actual image filename in your assets folder.
import coupleImage from "./assets/final.png";

function App() {
  const [page, setPage] = useState(1);


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [page]);

  return (
    <AnimatePresence mode="wait">
      {page === 1 && (
        <Landing
          key="landing"
          onEnter={() => setPage(2)}
        />
      )}

      {page === 2 && (
        <ApologyLetter
          key="letter"
          onBack={() => setPage(1)}
          onContinue={() => setPage(3)}
        />
      )}

      {page === 3 && (
        <MySide
          key="my-side"
          onBack={() => setPage(2)}
          onContinue={() => setPage(4)}
        />
      )}

      {page === 4 && (
        <FrogGetPage
          key="frog-get"
          onBack={() => setPage(3)}
          onContinue={() => setPage(5)}
          hypnosisImage={frogImage}
          coupleImage={coupleImage}
        />
      )}

      {page === 5 && (
        <LastPage
          key="last-page"
          backgroundImage={lastPageBg}
          letterBackground={letterBg}
        />
      )}

    </AnimatePresence>
  );
}

export default App;
