import styled from 'styled-components';

// grid-gap: 20px;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0;
  max-width: 100vw;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
