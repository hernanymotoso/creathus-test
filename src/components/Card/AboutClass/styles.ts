import styled, { css } from 'styled-components';

interface IContainerProps {
  aboutClassActive: boolean;
}
interface IContentProps {
  contentHeight?: number;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  position: relative;
  transition: all 0.5s;
  padding-top: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  opacity: 0;
  overflow: hidden;
  visibility: hidden;
  margin-top: -90px;

  ${props =>
    props.aboutClassActive &&
    css`
      margin-top: -10px;
      opacity: 1;
      visibility: visible;
    `}
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 25px 16px;

  > p {
    padding: 0 10px;
    font-weight: 500;
    color: #464646;
  }
  > svg {
    height: 30px;
    width: 25px;
    color: #464646;
    cursor: pointer;
  }
`;
export const Content = styled.div<IContentProps>`
  overflow: hidden;
  transition: height 1s;

  height: ${props =>
    props.contentHeight ? `${props.contentHeight}px` : '0px'};

  > .Content__Container {
    padding: 0px 16px 18px 16px;

    > .Content__single {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      width: 100%;

      & + .Content__single {
        margin-top: 25px;
      }

      > .Content___top {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 10px;
        margin-bottom: 10px;

        > span {
          display: flex;
          justify-content: center;
          align-items: center;
          /* background-color: red; */
          flex: 5;
          > img {
            margin-right: 10px;
            width: 18px;
          }

          > p {
            font-size: 12px;
            font-weight: 500;
            color: #464646;
            flex: 5;
          }
        }

        > p {
          font-size: 12px;
          font-weight: 500;
          color: #464646;
        }
      }
      > .Content___bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 44px;

        border-radius: 14px;
        background-color: #fafafa;

        padding: 0 18px;

        > p {
          font-weight: 500;
          color: #464646;
        }
        > span {
          display: flex;
          justify-content: center;
          align-items: center;

          > img {
            margin-right: 8px;
            width: 20px;
          }
        }
      }
    }
    /* > div {
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
    } */
  }
`;
