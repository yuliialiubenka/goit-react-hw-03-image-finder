import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  loadMoreBtn: {
    display: "block",
    padding: "12px 32px",
    color: "#fff",
    fontFamily: "inherit",
    fontWeight: 600,
    fontSize: 16,
    cursor: "pointer",
    borderRadius: 10,
    border: "none",
    margin: "0 auto 20px auto",
    background: "linear-gradient(0deg, rgb(116, 26, 187) 0%, rgb(39, 112, 255) 100%)",
    "&:hover": {
      boxShadow: "0px 4px 10px 0px rgba(9, 9, 9, 0.61)",
    }
  }
});