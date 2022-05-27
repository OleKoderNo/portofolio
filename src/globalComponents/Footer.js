import styled from "styled-components";

export const Footer=styled.footer`
  display: flex;
  border: solid black 2px;
  background-color: black;
  height: 20vh;
  color: rgb(159, 159, 159);;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`

export const FooterFill=styled.ul`
  list-style: none outside none;
  text-align: center;
`

function FooterBar() {
  return(
    <>
     <Footer>
        <FooterFill>
          <li>Ole Håvard Furuseth Bergan</li>
          <li>Epost: ohfb96@gmail.com</li>
          <li>Nummer: 96912304</li>
        </FooterFill>
      </Footer></>
  )
}

export default FooterBar;