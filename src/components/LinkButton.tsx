import styled from "styled-components";
import { Link } from "react-router-dom";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  to: string;
};

export function LinkButton({ to, children }: ButtonProps) {
  return <StyledLinkButton to={to}>{children}</StyledLinkButton>;
}

const StyledLinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.5rem;
  font-size: 1rem;
  letter-spacing: var(--letterSpacing);
  transition: var(--transition);
  padding: 1rem 2rem;
  cursor: pointer;
  color: var(--white);
  background: var(--primary-600);
  border: 1px solid var(--primary-600);
  border-radius: 999px;
  box-shadow: var(--shadow-2);
  text-decoration: none;
  display: inline-block;
  &:hover {
    background: var(--primary-700);
    box-shadow: var(--shadow-3);
  }
`;
