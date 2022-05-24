import styled from "styled-components";
import portettimg from "../Images/portettbilde.jpg"
import headerbg from "../Images/header-background.jpg"

export const Header=styled.header`
    width: 100vw;
    min-height: 90vh;
    @media (min-width: 501px) {
        min-height: 100vh;
        background-position: top;
    }
`

export const NavBar=styled.ul`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    color: cyan;
    height: 3rem;
    background-color: black;
    padding: 0 5%;
    position: fixed;
    top: 0;
    z-index: 100;
    align-items: center;
    list-style: none outside none;
    text-align: center;
`
export const Tittel=styled.h1`
    text-align: center;
    color: rgb(159, 159, 159);
    font-size: 2rem;
    margin-top: 3.5rem;
    @media (min-width: 501px) {
        font-size: 3rem;
    }
`

export const Selvportrett=styled.div`
    background: url(${portettimg});
    background-size: cover;
    position: relative;
    background-position: center;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    margin-top: 2.5rem;
    border-radius: 50%;
`

export const HeaderPic=styled.div`
    background-image: url(${headerbg});
    background-size: cover;
    position: relative;
    background-position: center;
    margin: 2.5rem auto;
    width: 100%;
    height: 15rem;
    @media (min-width: 501px) {
        height: 25rem;
    }
`