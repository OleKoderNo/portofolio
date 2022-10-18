import { t } from "i18next";
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
                {t("LandingPage.title")}
            </Tittel>
            <Selvportrett />
            <HeaderPic />
            <TextBackground>
                <UnderTittel>
                    {t("LandingPage.aboutMe")}
                </UnderTittel>
                <SideText>
                    {t("LandingPage.infoAboutMe")}
                </SideText>
                <SideText>
                    {t("LandingPage.infoFreeTime")}
                </SideText>
                <SideText>
                    {t("LandingPage.infoCharity")}
                </SideText>
                <SideText>
                    {t("LandingPage.infoPersona")}
                </SideText>
            </TextBackground>
            <UnderTittel>
                {t("LandingPage.mySkills")}
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
