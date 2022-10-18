import { 
    Tittel 
} from "../../globalComponents/NavBar";
import { UnderTittel } from "../landingPage/LandingPageComp";
import { 
    FlexLeft, 
    FlexRight, 
    KontaktText, 
    ParallaxPreview, 
    PokeDexPreview 
} from "./ProsjekterComp";



function Prosjekter() {
    return(
        <>
            <Tittel>
                Mine prosjekter
            </Tittel>
            <FlexRight>
                <a 
                    href="https://olekodehode.github.io/pokedex/" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <PokeDexPreview />        
                </a>
                <KontaktText>
                    I dette prosjektet har brukt vanilla javascript der jeg laget en pokedex ved hjelp av et API call, som går igjennom alle de 898 Pokémonene, og viser forskjellig type informasjon jeg har hentet ut.
                </KontaktText>        
            </FlexRight>
            <FlexLeft>
                <a 
                    href="https://olekodehode.github.io/parallax/" 
                    target="_blank" 
                    rel="noreferrer"
                >
                <ParallaxPreview />
                </a>
                <KontaktText>
                    I dette prosjektet laget jeg en utrolig fin parallax nettside som er opptimalisert for alle skjermstørrelser og lærte mye om styling på bilder.
                </KontaktText>
            </FlexLeft>
            <FlexRight>
                <a
                    href="https://andreastak86.github.io/Solsytemet/"
                >
                <KontaktText>
                    I dette gruppeprosjektet har vi laget hele solsystemet. Det jeg jobbet mest med her var oppsettet av navbaren, footeren, i18next og få planetene til å rotere på forsiden. Prosjektet har hovedfokus på bruken av Styled Components og bra routing.
                </KontaktText>
                </a>
            </FlexRight>
            <UnderTittel>
                Siden er under oppbygging
            </UnderTittel>
        </>
        
    )
}

export default Prosjekter;
