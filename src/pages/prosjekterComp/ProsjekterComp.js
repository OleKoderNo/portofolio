import styled from "styled-components";
import pokeDexPreview from "../pageImages/Pokemon_API_preview.png"
import parallaxPreview from "../pageImages/Parallax_preview.png"

export const FlexRight=styled.div`
    display: flex;
    flex-direction: row;
    max-width: 80%;
    margin: 3rem auto;
    @media (max-width: 501px){
      margin-left: 0 auto;
    }
`

export const FlexLeft=styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin: 3rem auto;
    max-width: 80%;
    @media (max-width: 501px){
      margin-right: 0 auto;
    }
    
`

export const PokeDexPreview=styled.div`
    background-image: url(${pokeDexPreview});
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    background-position: center;
    min-width: 15rem;
    min-height: 15rem;
    @media (max-width: 501px){
      min-height: 200px;
      min-width: 100px;
    
    }
`
export const ParallaxPreview=styled.div`
    background-image: url(${parallaxPreview});
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    background-position: center;
    min-width: 15rem;
    min-height: 15rem;
    @media (max-width: 501px){
      min-height: 200px;
      min-width: 100px;
    
    }
`
export const ProsjektText=styled.p`
    text-align: left;
    color: rgb(159, 159, 159);
    max-width: 90%;
    margin: 2rem;
    font-size: 1.5rem;
    @media (max-width: 501px){
        font-size: .9rem;
    }
`