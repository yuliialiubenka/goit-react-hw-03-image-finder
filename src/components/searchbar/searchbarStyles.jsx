import Image from "../../images/pixabay.svg";

export const styles = {
    header: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "20px 15px",
        zIndex: 1,
        boxShadow: "0px 4px 10px 0px rgba(9, 9, 9, 0.61)",
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(0deg, rgb(116, 26, 187) 0%, rgb(39, 112, 255) 100%)",
    },
    searchForm: {
        position: "relative",
        maxWidth: 420,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        "&:before": {
            content: "'px'",
            position: "absolute",
            color: "#FFF",
            left: 0,
            fontFamily: "Comfortaa",
            fontSize: 40,
            lineHeight: 1,
        },
        "&:after": {
            content: "''",
            display: "block",
            width: 70,
            height: 70,
            position: "absolute",
            right: -12,
            top: -20,
            backgroundImage: `url(${Image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

        }
    },
    searchInput: {
        width: 300,
        padding: "12px 40px 12px 12px",
        borderRadius: 10,
        border: "none",
        fontSize: 16,
        fontWeight: 500,
        fontFamily: "inherit",
        color: "#3800a1",
        "&:focus": {
            outline: "2px solid #fff",
            outlineOffset: "5px",
        },
        "@media screen and (max-width: 480px)": {
            width: "100%",
        }
    },
    label: {
        position: "relative",
        "@media screen and (max-width: 480px)": {
            width: "65%",
        }
    },
    searchButton: {
        cursor: "pointer",
        position: "absolute",
        width: 30,
        height: 40,
        border: "none",
        background: "transparent",
        right: 6,

        "& img": {
            height: "100%",
            width: "100%"
        }
    }
}