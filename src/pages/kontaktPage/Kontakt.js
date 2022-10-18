import { t } from "i18next";
import {
    Header,
    Tittel
} from "../../globalComponents/NavBar";
import { UnderTittel } from "../landingPage/LandingPageComp";


function Kontakt() {
    return (
        <>
            <Header>
                <Tittel>
                    {t("Contact.contact")}
                </Tittel>
                <UnderTittel>
                    {t("Contact.build")}
                </UnderTittel>
            </Header>
        </>

    )
}

export default Kontakt;
