import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  imageList: {
    padding: "100px 16px 16px 16px",
    display: "flex",
    justifyContent: "center",
    gap: 16,
    flexWrap: "wrap",
    "@media screen and (max-width: 480px)": {
      gap: 10,
    }
  }
});