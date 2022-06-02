import styled from "styled-components";
// import portettimg from "../Images/portettbilde.jpg"
import htmlImg from "../pageImages/html.svg"
import cssImg from "../pageImages/css.svg"
import jsImg from "../pageImages/jslogo.svg"
import logoImg from "../pageImages/logo.svg"

export const TextBackground=styled.div`

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.126);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 80%;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items:center;
`

export const UnderTittel=styled.h2`
  text-align: center;
  color: rgb(159, 159, 159);
  font-size: 1.75rem;
  padding-top: 2rem;
`

export const SideText=styled.p`
  text-align: center;
  color: rgb(159, 159, 159);
  max-width: 90%;
  margin: 1rem auto;
  font-size: 1.5rem;
  @media (min-width: 501px){
      max-width: 60%;
  }
`

export const SkillTree=styled.div`
  display: flex;
  flex-direction: column;
`

export const Column=styled.div`
    display: flex;
    align-items:  center;
    flex-direction: column;

  @media (min-width: 501px){
      display: flex;
      justify-content: space-evenly;
      flex-direction: row;
  }
`
export const HtmlLogo=styled.div`
background-image: url(${htmlImg});
background-size: contain;
background-repeat: no-repeat;
    position: relative;
    background-position: center;
width: 10rem;
height: 10rem;
`

export const CssLogo=styled.div`
  background-image: url(${cssImg});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  background-position: center;
  width: 10rem;
  height: 10rem;
`
export const JsLogo=styled.div`
  display: flex;
  margin-top: 2rem;
  background-image: url(${jsImg});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  background-position: center;
  width: 10rem;
  height: 8rem;
`

export const ReactLogo=styled.div`
  background-image: url(${logoImg});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  background-position: center;
  margin-top: 2rem;
  width: 10rem;
  height: 10rem;
`