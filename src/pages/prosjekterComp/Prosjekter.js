import { t } from "i18next";
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
    return (
        <>
            <Tittel>
                {t("Projects.myProjects")}
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
                    {t("Projects.projectPokedex")}
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
                    {t("Projects.projectParallax")}
                </KontaktText>
            </FlexLeft>
            <FlexRight>
                <a
                    href="https://andreastak86.github.io/Solsytemet/"
                >
                    <KontaktText>
                        {t("Projects.projectSolarsystem")}
                    </KontaktText>
                </a>
            </FlexRight>
            <UnderTittel>
                {t("Projects.build")}
            </UnderTittel>
        </>

    )
}

export default Prosjekter;
