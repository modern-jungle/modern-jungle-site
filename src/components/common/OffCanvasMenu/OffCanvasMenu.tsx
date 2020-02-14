import styled from "@emotion/styled"
import { globalHistory } from "@reach/router"
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react"

const Wrapper = styled.div`
  @media (min-width: 720px) {
    display: none;
  }

  display: flex;
  flex: 1;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;

  input {
    display: none;
  }

  input:checked ~ div {
    transform: translateX(0);
  }

  input:checked ~ label > span {
    background: #eb8677;
  }

  input:checked ~ label > span:nth-of-type(1) {
    transform: translateX(0.6rem) rotate(45deg);
  }

  input:checked ~ label > span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  input:checked ~ label > span:nth-of-type(3) {
    transform: translateX(0.6rem) rotate(-45deg);
  }
`

const Menu = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  transition: transform 200ms ease-out;
  transform: translateX(100%);
  width: 100vw;
  background-color: #fff;
  z-index: 999;
  padding: 1rem;
`

export type OffCanvasMenuProps = PropsWithChildren<{
  id: string
}>

const OffCanvasMenuButton = styled.label`
  width: 2.5rem;
  height: 3rem;
  position: relative;
  z-index: 1000;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-right: 1rem;

  span {
    display: flex;
    height: 4px;
    width: 100%;
    background: #54a698;
    border-radius: 0px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  span:nth-of-type(1) {
    transform-origin: left center;
  }

  span:nth-of-type(2) {
    transform-origin: left center;
  }

  span:nth-of-type(3) {
    transform-origin: left center;
  }
`

export function OffCanvasMenu(props: OffCanvasMenuProps) {
  const [open, setOpen] = useState(false)
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setOpen(e.target.checked),
    [],
  )

  useEffect(() => {
    return globalHistory.listen(() => setOpen(false))
  }, [])

  useEffect(() => {
    document.body.style.height = open ? "100vh" : ""
    document.body.style.overflowY = open ? "hidden" : ""
  }, [open])

  return (
    <Wrapper>
      <input type="checkbox" id={props.id} onChange={onChange} checked={open} />
      <OffCanvasMenuButton htmlFor="mobile-navigation" role="button">
        <span></span>
        <span></span>
        <span></span>
      </OffCanvasMenuButton>
      <Menu>{props.children}</Menu>
    </Wrapper>
  )
}
