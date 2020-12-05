import { Icon } from './../icon/Icon';
import styled, { css } from 'styled-components';
import { Variant } from '../../util/Variant.type';

export const AlertIcon = styled(Icon)`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  margin: auto;
  ${({ theme: { sassy } }) => css`
    font-size: ${sassy.fontSizeLarge};
    margin-left: ${sassy.spacingLarge};
  `}
`;

export const AlertMessage = styled.span`
  flex: 1 1 auto;
  overflow: hidden;
  ${({ theme: { sassy } }) => css`
    padding: ${sassy.spacingLarge};
  `}
`;

export const AlertClose = styled.span`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  ${({ theme: { sassy } }) => css`
    font-size: ${sassy.fontSizeLarge};
    padding-right: ${sassy.spacingMedium};
  `}
`;

export const StyledAlert = styled.div<{ variant?: Variant }>`
  position: relative;
  display: flex;
  align-items: stretch;
  box-shadow: none;
  line-height: 1.6;
  opacity: 0;
  transform: scale(0.9);
  ${({ theme: { sassy }, hidden, variant = 'primary' }) => {
    if (!sassy)
      throw new Error(
        'Please mount the sassy theme provider at a higher place in the component tree'
      );
    return css`
      background-color: ${sassy.colors.white};
      border: solid 1px ${sassy.colors.gray[90]};
      border-radius: ${sassy.borderRadiusMedium};
      font-family: ${sassy.fontSans};
      font-size: ${sassy.fontSizeSmall};
      font-weight: ${sassy.fontWeightNormal};
      color: ${sassy.colors.gray[30]};
      transition: opacity ${sassy.transitionMedium} ease,
        transform ${sassy.transitionMedium} ease;

      border-top-color: ${sassy.colors[variant][50]};

      & ${AlertIcon} {
        color: ${sassy.colors[variant][50]};
      }

      ${!hidden && `opacity: 1; transform: scale(1);`}
    `;
  }}
  border-top-width: 3px;
`;
