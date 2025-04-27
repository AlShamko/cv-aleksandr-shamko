import {Icon} from "../icon/icon.tsx";
import styled from "styled-components";

export const Socials = () => {
    return (
        <StyledSocials>
            <a href="#" target="_blank" aria-label="GitHub">
                <Icon iconId={'gitHub'}/>
            </a>
            <a href="#" target="_blank" aria-label="Telegram">
                <Icon iconId={'telegram'}/>
            </a>
            <a href="#" target="_blank" aria-label="Linkedin">
                <Icon iconId={'linkedin'}/>
            </a>
        </StyledSocials>
    );
};

const StyledSocials = styled.div`
    display: flex;
    gap: 20px;
`

