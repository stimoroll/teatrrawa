import styled from 'styled-components';

export const Wrapper = styled.aside`
  margin: 40px 0 0 0;
  min-width:25%;
  background: rgba(0, 0, 0, 0.5);
  height: fit-content;

  @media (min-width: 992px) {
    margin: 125px 15px 0 0;
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  padding: 0 20px 0 0;
  margin: 0;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;

  .count {
    margin: 0 10px 0 0;
    padding: 0;
    font-size: 0.8rem;
    background: #aaa;
    color: #fff;
    border-radius: 20px;
    width: 30px;
    height: 21px;
    display: block;
    text-align: center;
    float: left;
  }

  .sidebar-menu-header {
    border-bottom: 2px #e4e4e4 solid;
    font-weight: 600;
    letter-spacing: 1px;
    background: rgba(0, 0, 0, 0);
    padding: 10px 10px 15px 0;
    text-transform: uppercase;
    span:before {
      width: 20px;
      height: 20px;
      background: #000;
      display: flex;
    }
  }

  li {
    margin: 0 0 5px 0px;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 600;
    line-height: 1.2em;
    padding: 0.2em 1.2em;    

    a:hover {
    }
  }

  .sidebar-highlighted {
    font-weight: 600;
  }

  p {
    font-size: 0.85rem;
    line-height: 1.2rem;
    letter-spacing: 0.5px;

    a {
      font-weight: 800;
    }
  }

  img {
    float: left;
    padding: 0 10px 0 0;
    width: 38px;
    height: auto;
  }
`;
