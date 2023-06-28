import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.5rem;
  font-size: 1rem;
  letter-spacing: var(--letterSpacing);
  transition: var(--transition);
  cursor: pointer;
  color: var(--white);
  background: var(--primary-600);
  padding: 0.5rem 1rem;
  border-radius: var(--borderRadius);
  border-color: transparent;
  box-shadow: var(--shadow-2);
  &:hover {
    background: var(--primary-700);
    box-shadow: var(--shadow-3);
  }
`;
