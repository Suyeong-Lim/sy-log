import { css, keyframes } from "@emotion/react";
import tw from "twin.macro";
import styled from "@emotion/styled";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Sun from "public/static/icon/sun.svg";
import Moon from "public/static/icon/moon.svg";

export const Theme = {
  light: "light",
  dark: "dark",
} as const;

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  const themeClickHandler = () => {
    setTheme(theme === Theme.dark ? Theme.light : Theme.dark);
  };
  if (!mounted) return null;
  return (
    <StyledButton
      aria-label="Toggle Theme"
      type="button"
      onClick={themeClickHandler}
    >
      {!mounted ? (
        <div />
      ) : theme === Theme.light ? (
        <Sun className="light-theme" />
      ) : (
        <Moon className="dark-theme" />
      )}
    </StyledButton>
  );
};

const rotaeSun = keyframes`
 0% {
      opacity: .7;
      transform: rotate(20deg);
  }
  60% {
    opacity: 1;
    transform: rotate(-90deg);
  }
  100% {
      opacity: 1;
      transform: rotate(0);
  }
`;

const rotateMoon = keyframes`
  0% {
      opacity: .4;
      transform: rotate(-20deg);
  }
  60% {
    opacity: .6;
    transform: rotate(90deg);
  }
  100% {
      opacity: .5;
      transform: rotate(0deg);
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  .light-theme {
    animation: ${rotaeSun} 1s ease-in;
  }
  .dark-theme {
    animation: ${rotateMoon} 1s;
  }
`;

export default ThemeSwitch;
