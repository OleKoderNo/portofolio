import {
    HeaderPic,
    Selvportrett,
    Tittel
} from "../../globalComponents/NavBar";
import {
    Column,
    CssLogo,
    HtmlLogo,
    JsLogo,
    ReactLogo,
    SideText,
    SkillTree,
    TextBackground,
    UnderTittel
} from "./LandingPageComp";


function LandingPage() {
    return (
        <>
            <Tittel>
                Ole Håvard Furuseth Bergan
            </Tittel>
            <Selvportrett />
            <HeaderPic />
            <TextBackground>
                <UnderTittel>Om meg</UnderTittel>
                <SideText>
                    Hei, jeg heter Ole Håvard Furuseth Bergan, er 26 år gammel og kommer fra Kongsberg.
                </SideText>
                <SideText>
                    Jeg flyttet til Vestlandet i 2019. På fritiden min liker jeg å trene, gå tur, gaming, lage mat og se på anime.
                </SideText>
                <SideText>
                    Mye av fritiden min går også ut på veldedighet. Jeg er blandt annet økonomiansvarlig i Norsk Folkehjelps Solidaritetsungdom Bergen, og er med på de fleste aktiviteter vi arrangerer.
                </SideText>
                <SideText>
                    Jeg er utrolig glad i å lære nye ting, og liker utfordringer og problemløsninger. Dette er en av de største grunnene til at jeg er så utrolig glad i å kode, og synes dette er utrolig givende og utfordrene. Møter jeg på en utfordring så smiler jeg på innsiden da dette betyr at jeg har enda mer å lære og gir meg en enorm glede og motivasjon til å bli bedre.
                </SideText>
            </TextBackground>
            <UnderTittel>
                Mine egenskaper
            </UnderTittel>
            <SkillTree>
                <Column>
                    <HtmlLogo />
                    <CssLogo />
                    <JsLogo />
                    <ReactLogo />
                </Column>
            </SkillTree>
        </>



    )
}

export default LandingPage;
