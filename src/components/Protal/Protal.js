import { useEffect } from "react";
import ReactDOM from "react-dom";

function Protal({ children }) {
  const wrapper = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(wrapper);

    return () => {
      document.body.removeChild(wrapper);
    };
  }, []);

  return ReactDOM.createPortal(children, wrapper);
}

export default Protal;
