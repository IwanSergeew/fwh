import styled from 'styled-components';

export const DragOverlayContainer = styled.div<{ show: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  user-select: none;
  pointer-events: none;
  opacity: ${({ show }) => show};
  transition: opacity 500ms ease-in-out;
  display: grid;
  place-items: center;
`;

export const DragOverlayInner = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 2rem;
  background-color: white;
  display: grid;
  place-items: center;
  background-color: rgb(255, 255, 255);
  font-size: clamp(1rem, 10vw, 5rem);
  font-weight: 700;
`;
