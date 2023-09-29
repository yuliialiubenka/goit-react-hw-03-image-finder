import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  loaderWrapper: {
    "& .loader": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(180deg, rgba(116,26,187,0.5719421557685574) 21%, rgba(39,112,255,0.6111578420430672) 100%)",
      position: "fixed",
      height: "calc(100% - 76px)",
      width: "100%",
      left: 0,
      top: 76,
      zIndex: 11,
    }
  }
});