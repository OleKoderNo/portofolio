import styled from "styled-components";
import pokeDexPreview from "../pageImages/Pokemon_API_preview.png"
import parallaxPreview from "../pageImages/Parallax_preview.png"

export const FlexRight=styled.div`
    display: flex;
    flex-direction: row;
    margin: 3rem;
    @media (max-width: 501px){
      margin-left: .5rem;
    }
`

export const FlexLeft=styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin: 3rem;
    @media (max-width: 501px){
      margin-right: -10rem;
    }
    
`

export const PokeDexPreview=styled.div`
    background-image: url(${pokeDexPreview});
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    background-position: center;
    min-width: 250px;
    min-height: 250px;
`
export const ParallaxPreview=styled.div`
    background-image: url(${parallaxPreview});
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    background-position: center;
    min-width: 250px;
    min-height: 250px;
`
export const KontaktText=styled.p`
    text-align: center;
    color: rgb(159, 159, 159);
    max-width: 90%;
    margin: 2rem;
    font-size: 1.5rem;
`