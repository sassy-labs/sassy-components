import styled, { css } from 'styled-components';

export const StyledIcon = styled.div<{
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

export const Svg = styled.svg`
  display: block;
  height: 100%;
  width: 100%;
`;
