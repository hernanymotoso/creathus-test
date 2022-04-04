import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface INavMenuProps {
  menuActive: boolean;
}

export const Container = styled.div`
  position: relative;
  visibility: hidden;
  display: none;
  > svg {
    cursor: pointer;
  }

  @media screen and (max-width: 560px) {
    visibility: visible;
    display: unset;
  }
`;
export const NavMenu = styled.nav<INavMenuProps>`
  list-style: none;
  top: 0;
  right: -400px;
  position: absolute;
  background-color: #00b9ff;
  transition: all 1s;

  /* margin-right: -400px; */
  visibility: hidden;
  display: none;
  opacity: 0;

  ${props =>
    props.menuActive &&
    css`
      right: -20px;
      visibility: visible;
      display: unset;
      opacity: 1;
    `}

  margin-top: -19px;

  display: flex;

  flex-direction: column;
  height: 100vh;
  width: 350px;

  > li {
    margin: 0 auto;
    padding: 10px;

    > a {
      text-decoration: none;
      color: #fff;
      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }
  }

  > span {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 150px;
    height: 30px;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 20px;

    cursor: pointer;
    &:hover {
      background-color: ${shade(0.2, '#fff')};
    }
  }

  > svg {
    margin-left: auto;
    margin-right: 30px;
    margin-top: 10px;
    color: #fff;
    cursor: pointer;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;
