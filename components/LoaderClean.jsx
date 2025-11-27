import React from 'react';
import styled from 'styled-components';

const LoaderClean = () => {
  return (
    <StyledWrapper>
      <p className="loader"><span>Web Technality</span></p>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    max-width: fit-content;
    color: var(--foreground, rgb(242, 255, 240));
    font-size: 50px;
    font-family: Mine, system-ui, -apple-system, 'Segoe UI', Roboto;
    position: relative;
    font-style: italic;
    font-weight: 600;
    padding: 1rem 0;
  }

  .loader span {
    animation: cut 2s infinite;
    transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .loader:hover { color: var(--foreground, #fcffdf); }

  .loader::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 6px;
    border-radius: 4px;
    background-color: var(--primary, #ff8282);
    opacity: 0.55;
    top: 0px;
    filter: blur(10px);
    animation: scan 2s infinite;
    left: 0;
    z-index: 0;
    transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .loader::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 5px;
    border-radius: 4px;
    background-color: var(--primary-foreground, #ff8282);
    top: 0px;
    animation: scan 2s infinite;
    left: 0;
    z-index: 1;
    opacity: 0.9;
    transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @keyframes scan {
    0% { top: 0px; }
    25% { top: 54px; }
    50% { top: 0px; }
    75% { top: 54px; }
    100% { top: 0px; }
  }

  @keyframes cut {
    0% { clip-path: inset(0 0 0 0); }
    25% { clip-path: inset(100% 0 0 0); }
    50% { clip-path: inset(0 0 100% 0); }
    75% { clip-path: inset(0 0 0 0); }
    100% { clip-path: inset(0 0 0 0); }
  }
`;

export default LoaderClean;
