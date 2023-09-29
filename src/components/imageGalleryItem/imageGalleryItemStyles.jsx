export const styles = {
  imageListItem: {
    width: "calc((100% - 48px) / 4)",
    borderRadius: 10,
    maxHeight: 240,
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 4px 10px 0px rgba(9, 9, 9, 0.61)",
    },
    "@media screen and (max-width: 480px)": {
      width: "calc((100% - 10px) / 2)",
    }
  },
  image: {
    width: "100%",
    objectFit: "cover",
    height: "100%",
    borderRadius: 10,

  }

}