import styled from "styled-components";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.5rem;
  font-size: 1rem;
  border-radius: 999px;
  letter-spacing: var(--letterSpacing);
  transition: var(--transition);
  padding: 1rem 2rem;
  cursor: pointer;
  color: var(--white);
  background: var(--primary-600);
  border: 1px solid var(--primary-600);
  box-shadow: var(--shadow-2);
  letter-spacing: var(--letterSpacing);
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    background: var(--primary-700);
    box-shadow: var(--shadow-3);
  }
`;
