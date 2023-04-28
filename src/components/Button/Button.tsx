import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
  return (
    <StyledButton type="button" primary={primary} size={size} style={{ backgroundColor }} {...props}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<Pick<ButtonProps, 'primary' | 'size'>>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${({ primary }) =>
    primary
      ? css`
          color: white;
          background-color: #1ea7fd;
        `
      : css`
          color: #333;
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        `};

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          font-size: 12px;
          padding: 10px 16px;
        `;
      case 'medium':
        return css`
          font-size: 14px;
          padding: 11px 20px;
        `;
      case 'large':
        return css`
          font-size: 16px;
          padding: 12px 24px;
        `;
    }
  }};
`;

export default Button;
