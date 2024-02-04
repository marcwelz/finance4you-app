"use client";
import { createTheme, Theme } from "@mui/material/styles";

export const palette = {
  primary: {
    main: "#F4F1DE",
    terraCotta: "#E07A5F",
    mutedSageGreen: "#81B29A",
    deepSlateBlue: "#3D405B",
  },
  secondary: {
    main: "#3D405B",
  },
  error: {
    main: "#e0895f",
  },
};

const CustomTheme: Theme = createTheme({
  palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          borderColor: palette.primary.terraCotta,
          borderWidth: "2px",
          ":hover": {
            borderWidth: "2px",
          },
        },
      },
      variants: [
        {
          props: { color: "primary" },
          style: {
            backgroundColor: `${palette.primary.terraCotta}`,
            boxShadow: "inset 0 -0.12rem 0 rgba(0, 0, 0, 0.2)",
            ":hover": {
              backgroundColor: `${palette.primary.terraCotta}`,
            },
          },
        },
      ],
    },
  },
});

export default CustomTheme;
