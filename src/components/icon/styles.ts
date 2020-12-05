import styled, { css } from 'styled-components';

export const StyledIcon = styled.svg<{
  width?: string;
  height?: string;
  color?: string;
}>`
  display: inline-block;
  contain: strict;
  box-sizing: content-box !important;

  ${({ width = '1em', height = '1em', color = 'currentColor' }) => css`
    width: ${width};
    height: ${height};
    color: ${color};
  `}
`;
