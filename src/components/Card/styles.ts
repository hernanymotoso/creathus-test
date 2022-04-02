import styled from 'styled-components';

export const Container = styled.div`
  width: 275px;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 20px;

  > div:first-child {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
    background-color: #fff;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 126px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 18px 16px;
  background-color: #f5fcff;

  > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    > p {
      color: #464646;
      font-size: 13px;
      font-weight: 500;

      > strong {
        color: #00b9ff;
        font-weight: 500;
      }
    }
  }
  > h2 {
    font-size: 19px;
    color: #464646;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 18px 16px;

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: #464646;
    width: 100%;

    > .left {
      margin-right: 10px;
      flex: 6;
    }
    > .right {
      flex: 4;
    }

    > div {
      display: flex;

      > img {
        margin-right: 10px;
      }
      > p {
        color: #464646;
        font-size: 9px;
        line-height: 18px;

        > strong {
          margin-top: 5px;
          font-size: 14px;
          font-weight: 400;
          color: #464646;
        }
      }
    }
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    border-radius: 14px;
    font-size: 10px;
    background-color: #ffeba3;
    color: #464646;
    margin-bottom: 18px;
  }

  > hr {
    height: 1px;
    margin: 18px 0;
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
