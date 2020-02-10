import { Link, Router } from "@reach/router";
import React from "react";
import { Root, Routes } from "react-static";
import styled from "styled-components";
import "./app.css";
import { MainContent } from "components/common/MainContent";

const NavLink = (props: any) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "#87c69b" : "#000"
        }
      };
    }}
  />
);

const MJ = styled.h1`
  display: inline;
  font-size: 1.1rem;
  margin: 0;
  color: #000;
`;

const NavContainer = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: row;
`;

const NavLeft = styled.nav`
  display: flex;
  position: relative;
  left: -1rem;
`;

const NavRight = styled.nav`
  display: flex;
  justify-content: flex-end;
  position: relative;
  left: 1rem;
`;

function App() {
  return (
    <Root>
      <header style={{ marginBottom: "1rem" }}>
        <MainContent margin={false}>
          <NavContainer>
            <NavLeft>
              <NavLink to="/">
                <MJ>Home</MJ>
              </NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contests">Contests</NavLink>
              <NavLink to={`/category/features`}>Features</NavLink>
            </NavLeft>
            <NavRight>
              <NavLink to={`/category/fiction`}>Fiction</NavLink>
              <NavLink to={`/category/opinion`}>Opinion</NavLink>
              <NavLink to={`/category/culture`}>Culture</NavLink>
              <NavLink to={`/category/life`}>Life</NavLink>
              <NavLink to={`/category/humor`}>Humor</NavLink>
            </NavRight>
          </NavContainer>
        </MainContent>
      </header>
      <main>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </main>
    </Root>
  );
}

export default App;
