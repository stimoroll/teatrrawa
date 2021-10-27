import styled from 'styled-components';

export const Wrapper = styled.nav`
  letter-spacing: 1px;
  display: none;

  .nav-active {
    color: #e7e7e7;
    border-bottom: 3px solid #e7e7e7;
  }

  @media (min-width: 992px) {
    font-size: 0.85rem;
    display: block;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  ul {
    display: flex;
    marigin: 0;
    height: 100%;
    align-items: center;
  }

  ul li {
    display: inline-flex;
    margin: 0 10px 0 0;
    padding: 0 0 0 10px;
    float: left;
    height: 100%;
    position: relative;

    a {
      display: flex;
      transition: all 0.4s ease;
      text-decoration: none;
      color: #e7e7e7;
      opacity: 0.7;
      :hover {
        opacity: 1;
      }
      div {
        margin: -4px 0 0 5px;
      }
    }
  }

  ul li:last-child {
    margin: 0;
  }

  ul li:hover > ul {
    display: block;
  }

  ul li a:hover {
    
  }

  ul ul {
    animation: fadeInMenu 0.3s both ease-in;
    display: none;
    position: absolute;
    left: 0;
    margin: 0;
    top: 30px;
    text-transform: none;
    background: #fff;
    padding: 15px 10px 10px 10px;
    box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);
  }

  ul ul li {
    width: auto;
    min-width: 170px;
  }

  ul ul li a {
    padding: 5px 10px;
    text-decoration: none;
    white-space: nowrap;
  }

  @keyframes fadeInMenu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
