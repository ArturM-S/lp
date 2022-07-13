import { css, Global } from '@emotion/react';

export const media = {
  mobile: '@media(max-width:768px)',
  tablet: '@media(min-width:768px)',
  laptop: '@media(min-width: 1000px)',
  desktop: '@media(min-width: 1400px)',
  large: '@media(min-width: 1600px)',
  maxLarge: '@media(max-width:2560px)',
};

export const globalStyles = (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
      }
      @media (max-width: 1080px) {
        html {
          font-size: 93.75%;
        }
      }
      @media (max-width: 720px) {
        html {
          font-size: 87.5%;
        }
      }

      #nprogress .bar {
        background: #ffd000;
      }

      body {
        background-color: var(--primaryBgColor);
        overflow-x: hidden;
      }
      body,
      input,
      button {
        font-size: 14px;
        font-family: 'Ubuntu', sans-serif;
      }
      button {
        cursor: pointer;
      }

      *::-webkit-scrollbar {
        width: 4px; /* width of the entire scrollbar */
      }

      *::-webkit-scrollbar-track {
        background: #222222; /* color of the tracking area */
      }

      *::-webkit-scrollbar-thumb {
        background-color: #7e7e7e; /* color of the scroll thumb */
        border-radius: 20px; /* roundness of the scroll thumb */
      }

      @keyframes loading {
        to {
          transform: rotate(1turn);
        }
      }

      @keyframes showup {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      :root {
        --primaryBgColor: white;
        --secondaryBgColor: white;

        --primaryTextColor: #870a28;
      }
    `}
  />
);
