import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 64px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Center = styled.div`
  max-width: 1194px;
  padding: 0 20px;
  height: 100%;
  margin: 0 auto;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 560px) {
    justify-content: center;
  }

  > span {
    @media screen and (max-width: 560px) {
      visibility: hidden;
      display: none;
    }
    > strong {
      color: #004098;
      cursor: pointer;
      &:hover {
        color: ${shade(0.8, '#004098')};
      }
    }
  }
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  > li {
    @media screen and (max-width: 560px) {
      visibility: hidden;
      display: none;
    }
    & + li {
      margin-left: 80px;

      @media screen and (max-width: 680px) {
        margin-left: 50px;
      }
    }

    > a {
      text-decoration: none;
      color: #004098;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.8, '#004098')};
      }
    }
  }
`;
