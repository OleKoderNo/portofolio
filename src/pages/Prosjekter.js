import { Tittel } from "../globalComponents/NavBar";
import { UnderTittel } from "./landingPage/LandingPageComp";
import { FlexLeft, FlexRight, ParallaxPreview, PokeDexPreview, ProsjektText } from "./prosjekterComp/ProsjekterComp";



function Prosjekter() {
    return(
        <>
            <Tittel>Mine prosjekter</Tittel>
            <FlexRight>
                <a href="https://olekodehode.github.io/pokedex/" target="_blank" rel="noreferrer">
                <PokeDexPreview />        
                </a>
                <ProsjektText>I dette prosjektet har brukt vanilla javascript der jeg laget en pokedex ved hjelp av et API call, som går igjennom alle de 898 Pokémonene, og viser forskjellig type informasjon jeg har hentet ut.</ProsjektText>      
            </FlexRight>
            <FlexLeft>
                <a href="https://olekodehode.github.io/parallax/" target="_blank" rel="noreferrer">
                <ParallaxPreview />
                </a>
                <ProsjektText>I dette prosjektet laget jeg en utrolig fin parallax nettside som er opptimalisert for alle skjermstørrelser og lærte mye om styling på bilder.</ProsjektText>
            </FlexLeft>
            <UnderTittel>Siden er under oppbygging</UnderTittel>
        </>
        
    )
}

export default Prosjekter;