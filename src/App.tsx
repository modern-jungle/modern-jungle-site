import styled from "@emotion/styled"
import { Match, RouteComponentProps, Router, Link } from "@reach/router"
import React from "react"
import { Root, Routes } from "react-static"
import "./app.css"
import InBrowserOnly from "./components/common/InBrowserOnly"
import { MainContent } from "./components/common/MainContent"
import ManageScroll from "./components/common/ManageScroll"
import { NavLink } from "./components/common/NavLink"
import { OffCanvasMenu } from "./components/common/OffCanvasMenu/OffCanvasMenu"
import { ImageContainer } from "./components/common/ImageContainer"

const Header = styled.header`
  margin-bottom: 3rem;
  position: fixed;
  z-index: 998;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  display: flex;

  @media (min-width: 720px) {
    position: static;
  }
`

const HeaderCat = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  max-width: initial;
  position: relative;
  z-index: 100;
  display: block;

  transition: all 100ms linear;

  :hover {
    transform: scale(1.02);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  }
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  nav {
    width: 100%;
  }

  nav a {
    padding: 0 0.75rem;
    height: 4rem;
    line-height: 4rem;
  }

  nav a:after {
    content: "";
    height: 2px;
    background-color: #aaa;
    position: relative;
    bottom: 2px;
    right: 0.5rem;
    z-index: 99;
    width: calc(100% + 1rem);
    display: block;
    visibility: hidden;
  }

  nav a.active:after,
  nav a:hover:after {
    visibility: visible;
  }

  nav a.active:after {
    background-color: #222;
  }
`

const NavLeft = styled.nav`
  display: none;
  position: relative;
  flex: 1;

  @media (min-width: 720px) {
    display: flex;
  }
`

const NavRight = styled.nav`
  display: none;
  justify-content: flex-end;
  position: relative;
  left: 0.5rem;
  flex: 1;

  @media (min-width: 720px) {
    display: flex;
  }
`

const NavStacked = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const FooterCat = styled(Link)`
  transition: all 100ms linear;
  width: 100px;

  :hover {
    transform: scale(1.02);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  }
`

function App() {
  return (
    <Root>
      <MainContent margin={false}>
        <Header>
          <NavLink to="/">
            <HeaderCat
              src="/modern_jungle_cat.jpg"
              alt="Modern Jungle cat logo"
            />
          </NavLink>
          <NavContainer>
            <NavLeft>
              <NavLink to={`/fiction`}>Fiction</NavLink>
              <NavLink to={`/features`}>Features</NavLink>
              <NavLink to={`/opinion`}>Opinion</NavLink>
              <NavLink to={`/culture`}>Culture</NavLink>
              <NavLink to={`/life`}>Life</NavLink>
              <NavLink to={`/humor`}>Humor</NavLink>
            </NavLeft>
            <NavRight>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contests">Contests</NavLink>
            </NavRight>
            <OffCanvasMenu id="mobile-navigation">
              <Link to="/">
                <h2>Modern Jungle</h2>
              </Link>
              <NavContainer>
                <NavStacked>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to={`/fiction`}>Fiction</NavLink>
                  <NavLink to={`/features`}>Features</NavLink>
                  <NavLink to={`/opinion`}>Opinion</NavLink>
                  <NavLink to={`/culture`}>Culture</NavLink>
                  <NavLink to={`/life`}>Life</NavLink>
                  <NavLink to={`/humor`}>Humor</NavLink>
                </NavStacked>
              </NavContainer>
            </OffCanvasMenu>
          </NavContainer>
        </Header>
      </MainContent>
      <main>
        <React.Suspense fallback={<em>Loading...</em>}>
          <InBrowserOnly>
            <Match path="">
              {(props: RouteComponentProps) => <ManageScroll {...props} />}
            </Match>
          </InBrowserOnly>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </main>
      <MainContent>
        <Footer>
          <FooterCat to="/">
            <ImageContainer>
              <img src="/cat.jpg" alt="Cat logo" />
            </ImageContainer>
          </FooterCat>
        </Footer>
      </MainContent>
    </Root>
  )
}

export default App
