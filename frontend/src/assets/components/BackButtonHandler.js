import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BackButtonHandler = ({ setTransitionDirection }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [historyIndex, setHistoryIndex] = useState(window.history.state?.idx || 0);

  useEffect(() => {
    const handlePopState = () => {
      const currentIdx = window.history.state?.idx || 0;

      if (currentIdx < historyIndex) {
        setTransitionDirection("back"); // Set transition direction
        console.log("Back navigation detected");
      } else if (currentIdx > historyIndex) {
        setTransitionDirection("forward"); // Set transition direction
        console.log("Forward navigation detected");
      }

      setHistoryIndex(currentIdx); // Update the index
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [historyIndex, setTransitionDirection]);

  return null;
};

export default BackButtonHandler;