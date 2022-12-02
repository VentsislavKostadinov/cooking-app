import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  boxShadow: {
    boxShadow:
      "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.2)",
  },
  imageTopPositioning: {
    left: "15%",
  },

  footer: {
    bottom: "0",
  },
  listStyleType: {
    listStyleType: "circle",
  },

  centerBottomRightIcon: {
    left: "22px",
    bottom: "15px",
    "&:hover": {
      cursor: "pointer",
    },
  },
});