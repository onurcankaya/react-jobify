import styled from "styled-components";

export const Link = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.5rem;
  font-size: 1rem;
  letter-spacing: var(--letterSpacing);
  transition: var(--transition);
  cursor: pointer;
  display: inline-block;
  color: var(--primary-600);
  background-color: transparent;
  border: none;
  &:hover {
    color: var(--primary-700);
  }
`;
