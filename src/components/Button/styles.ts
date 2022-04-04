import styled from 'styled-components';
import { shade } from 'polished';

interface IContainerProps {
  bgColor?: string;
}

export const Container = styled.button<IContainerProps>`
  width: 250px;
  height: 52px;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
  font-size: 18px;
  transition: background-color 0.2s;

  color: #fff;

  // if don't have bgColor, we set #00b9ff by default
  background-color: ${props =>
    props.bgColor ? `#${props.bgColor}` : '#00b9ff'};

  &:hover {
    background: ${props =>
      props.bgColor ? shade(0.1, `#${props.bgColor}`) : shade(0.1, '#00b9ff')};
  }

  @media screen and (max-width: 281px) {
    width: 203px;
  }
`;
