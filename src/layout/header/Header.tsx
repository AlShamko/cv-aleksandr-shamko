import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Menu} from "../../components/menu/Menu.tsx";
import {Socials} from "../../components/socials/Socials.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Header = () => {
    return (

        <StyledHeader>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Logo/>
                <Menu menuItems={items}/>
                <Socials/>
            </FlexWrapper>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
`


