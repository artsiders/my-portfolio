import { createPortal } from "react-dom";

function Portal({ children, setVisible }) {
  return createPortal(
    <div
      onClick={(e) => {
        e.stopPropagation();
        setVisible(false);
      }}
      data-aos="fade"
      className="z-30 rounded-none backdrop-blur-xl bg-light/10 dark:bg-dark/10 mt-16 fixed top-0 flex items-center justify-center float-right w-screen h-screen"
    >
      <div
        data-aos="fade-up"
        className="relative rounded-none sm:-mt-20 w-screen h-screen overflow-y-scroll max-h-none sm:max-h-[90vh] py-6 flex flex-col gap-2 p-2 sm:p-6 bg-white dark:border-2 dark:border-primary/25 dark:bg-dark dark:shadow-none sm:h-fit sm:w-fit sm:rounded-xl shadow-card max-w-none sm:max-w-[90%]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Portal;
