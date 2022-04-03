import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1194px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  > h1 {
    color: #464646;
    margin: 30px 0;
    font-weight: 500;
  }
  > span {
    margin: 0 auto;
  }

  > div {
    width: 100%;
  }

  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;

    width: auto;
  }

  /* Style my items */
  .my-masonry-grid_column > div {
    margin-bottom: 30px;
  }
`;
