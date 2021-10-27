import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Navigation from "../Navigation/Navigation"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Wrapper, Content, SearchBox } from "./Header.styles"
import { Logo } from "../IconsV2/IconsV2"
import styled from "styled-components";
import "./elementor.css";

const useScroll = () => {
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        console.log('scroll');
        if (
          !isShrunk &&
          (document.body.scrollTop > 8 ||
            document.documentElement.scrollTop > 8)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 2 &&
          document.documentElement.scrollTop < 2
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return isShrunk;
}

const SoccialWrapper = styled.div`

`;

const Social = () => {
  <div class="elementor-social-icons-wrapper elementor-grid">
		<span class="elementor-grid-item">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-jki-facebook-light elementor-repeater-item-2d0b27f" target="_blank">
						<span class="elementor-screen-only">Jki-facebook-light</span>
						<i class="jki jki-facebook-light"></i>					</a>
				</span>
							<span class="elementor-grid-item">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-jki-twitter-light elementor-repeater-item-2b18e40" target="_blank">
						<span class="elementor-screen-only">Jki-twitter-light</span>
						<i class="jki jki-twitter-light"></i>					</a>
				</span>
							<span class="elementor-grid-item">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-jki-youtube-v-light elementor-repeater-item-a577534" target="_blank">
						<span class="elementor-screen-only">Jki-youtube-v-light</span>
						<i class="jki jki-youtube-v-light"></i>					</a>
				</span>
							<span class="elementor-grid-item">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-jki-whatsapp-1-light elementor-repeater-item-9bfa527" target="_blank">
						<span class="elementor-screen-only">Jki-whatsapp-1-light</span>
						<i class="jki jki-whatsapp-1-light"></i>					</a>
				</span>
							<span class="elementor-grid-item">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-telegram-plane elementor-repeater-item-301efbb" target="_blank">
						<span class="elementor-screen-only">Telegram-plane</span>
						<i class="fab fa-telegram-plane"></i>					</a>
				</span>
	</div>
}

const ContactLayout = styled.div`
  display: flex;
  flex-direction: row;
  & > p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85em;
    padding: 3px 10px 0 10px;
    // border-right: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const Contact = () => {
  return (
    <ContactLayout>
      <p>tel : +(62) 800-567-8990</p>
      <p>email : randai@domain.com</p>
      <p>godz. kontaktu : Pn - Sr : 09:00 - 17:00</p>
    </ContactLayout>
  )
}


const Search = () => (
  <SearchBox>
    <input type="search" />
    <button type="submit">
      <span className="sr-only">Szukaj</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="23.6" height="23.373" viewBox="0 0 23.6 23.373">
        <path d="M488.856,580.409l-6-6a9.447,9.447,0,1,0-2.2,2.259l5.969,5.972c.192.192.952.771,1.455.268l.488-.488.016-.016.036-.036.514-.514C489.669,581.32,489.048,580.6,488.856,580.409Zm-19.956-11.3a6.222,6.222,0,1,1,6.222,6.222A6.228,6.228,0,0,1,468.9,569.112Z" transform="translate(-465.746 -559.736)" fill="#596fa2"></path>
      </svg>
    </button>
  </SearchBox>
)


const Header = () => {
  const { site, menu } = useMenuQuery()

  const isShrunk = useScroll();

  return (
    <Wrapper className={isShrunk ? 'shrunk' : ''}>
      <Content className="social">
        <Contact />
      </Content>
      <Content>
        <Link to="/">
          <Logo />
          {/* <img src={Logo} alt={site.siteMetadata.title} /> */}
        </Link>
        <Navigation menu={menu.menuItems.nodes} />
        {/* <Search/> */}
      </Content>
    </Wrapper>
  )
}

export default Header
