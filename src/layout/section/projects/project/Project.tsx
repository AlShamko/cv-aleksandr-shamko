import styled from "styled-components";
import {Icon} from "../../../../components/icon/icon.tsx";

export const Project = () => {
    return (
        <StyledProject>
            <ImageProject/>
            <TitleProject></TitleProject>
            <TextProject></TextProject>
            <p></p>
            <div>
                <div>
                    <Icon iconId={"gitHub"}></Icon>
                    <IconLink>Live Preview</IconLink>
                </div>
                <div>
                    <Icon iconId={"gitHub"}></Icon>
                    <IconLink>View Code</IconLink>
                </div>
            </div>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    
`

const ImageProject = styled.img`

`

const TitleProject = styled.h3`
    
`

const TextProject = styled.p`

`

const IconLink = styled.a`

`