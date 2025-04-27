import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Menu} from "../../components/menu/Menu.tsx";
import {Socials} from "../../components/socials/Socials.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Header = () => {
    return (

        <StyledHeader>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Logo/>
                <Menu/>
                <Socials/>
            </FlexWrapper>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    position: sticky;
`


