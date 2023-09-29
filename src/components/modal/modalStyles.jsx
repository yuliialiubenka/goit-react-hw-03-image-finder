export const styles = {
  overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: "111",

  },

  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0px 4px 10px 0px rgba(9, 9, 9, 0.61)",
    borderRadius: 10
  },

  modalImage: {
    display: "block",
    maxWidth: "calc(100vw - 64px)",
    maxHeight: "calc(100vh - 32px)",
    objectFit: "contain",
    borderRadius: 10,
    "@media screen and (max-width: 480px)": {
      maxWidth: "calc(100vw - 32px)",
    }
  }
}