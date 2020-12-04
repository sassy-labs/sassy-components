import styled, { css } from 'styled-components';

export const StyledIconButton = styled.button`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  font-size: inherit;
  cursor: pointer;
  -webkit-appearance: none;

  ${({ theme: { sassy }, disabled }) => css`
    border-radius: ${sassy.borderRadiusMedium};
    color: ${sassy.colors.gray[50]};
    padding: ${sassy.spacingXSmall};
    transition: color ${sassy.transitionMedium};

    ${!disabled &&
      css`
        &:hover,
        &:focus {
          color: ${sassy.colors.primary[50]};
        }

        &:active {
          color: ${sassy.colors.primary[40]};
        }
      `}
  `}

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
