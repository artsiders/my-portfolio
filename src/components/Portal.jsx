import { createPortal } from "react-dom";

function Portal({ children, setVisible }) {
  return createPortal(
    <div
      onClick={(e) => {
        e.stopPropagation();
        setVisible(false);
      }}
      data-aos="fade"
      className="fixed top-0 flex items-center justify-center float-right w-screen h-screen bg-white/20 dark:bg-dark/20 backdrop-blur-sm"
    >
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export default Portal;
