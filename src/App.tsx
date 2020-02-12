import { Link, Match, RouteComponentProps, Router } from "@reach/router"
import React from "react"
import { Root, Routes } from "react-static"
import styled from "@emotion/styled"
import "./app.css"
import InBrowserOnly from "./components/common/InBrowserOnly"
import { MainContent } from "./components/common/MainContent"
import ManageScroll from "./components/common/ManageScroll"

const NavLink = (props: any) => (
  <Link
    {...props}
    getProps={({ isPartiallyCurrent }) => ({
      className: isPartiallyCurrent ? "active" : "",
    })}
  />
)

const Header = styled.header`
  margin-bottom: 3rem;
`

const MJ = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 1rem;
  max-width: initial;
  position: relative;
  z-index: 100;
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;

  nav {
    width: 100%;
  }

  nav a {
    padding: 0 0.75rem;
    height: 3.5rem;
    line-height: 4rem;
  }

  nav a:after {
    content: "";
    display: none;
    height: 2px;
    background-color: #aaa;
    position: relative;
    bottom: 0.6rem;
    right: 0.5rem;
    z-index: 99;
    width: calc(100% + 1rem);
  }

  nav a.active:after,
  nav a:hover:after {
    display: block;
  }

  nav a.active:after {
    background-color: #222;
  }
`

const NavLeft = styled.nav`
  display: flex;
  position: relative;

  a:first-child {
    padding: 0;
  }

  a:first-child:after {
    display: none !important;
  }
`

const NavRight = styled.nav`
  display: flex;
  justify-content: flex-end;
  position: relative;
  left: 0.5rem;
`

const Footer = styled.footer``

function App() {
  return (
    <Root>
      <MainContent margin={false}>
        <Header>
          <NavContainer>
            <NavLeft>
              <NavLink to="/">
                <MJ src="/modern_jungle_cat.jpg" alt="Modern Jungle" />
              </NavLink>
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
          <NavContainer>
            <NavLeft>
              <NavLink to={`/fiction`}>Fiction</NavLink>
              <NavLink to={`/features`}>Features</NavLink>
              <NavLink to={`/opinion`}>Opinion</NavLink>
              <NavLink to={`/culture`}>Culture</NavLink>
              <NavLink to={`/life`}>Life</NavLink>
              <NavLink to={`/humor`}>Humor</NavLink>
            </NavLeft>
          </NavContainer>
        </Footer>
      </MainContent>
    </Root>
  )
}

export default App
