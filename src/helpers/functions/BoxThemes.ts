export interface BoxThemesProps {}

const BoxThemes = (
  type: "inner" | "outer",
  darktheme: boolean
): React.CSSProperties => {
  if (type === "outer") {
    return {
      backgroundColor: darktheme ? "var(--bg800)" : "white",
      border: `1px solid ${darktheme ? "var(--bg600)" : "black"}`,
      boxShadow: darktheme ? "var(--boxOutlineLight)" : "var(--boxOutlineDark)",
      color: darktheme ? "white" : "black",
    };
  } else if (type === "inner") {
    return {
      backgroundColor: darktheme ? "var(--bg700)" : "white",
      border: `1px solid ${darktheme ? "var(--bg500)" : "black"}`,
    };
  } else {
    return {};
  }
};

export default BoxThemes;
