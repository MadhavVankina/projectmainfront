import toast from "react-hot-toast";

const getToastOptions = (duration) => {
  const theme = localStorage.getItem("theme");
  return theme === "dark"
    ? {
        style: {
          fontWeight: "bold",
          background: "#333",
          color: "#E7E6E4",
          fontFamily: "roboto",
          fontWeight: "500",
        },
        duration: duration,
      }
    : {
        style: { fontWeight: "500", fontFamily: "roboto" },
        duration: duration,
      };
};

export const ToastMe = {
  success: (message, duration = 2000) => {
    toast.success(message, getToastOptions(duration));
  },
  error: (message, duration = 2000) => {
    toast.error(message, getToastOptions(duration));
  },
};
