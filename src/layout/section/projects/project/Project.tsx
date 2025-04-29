import styled from "styled-components";
import {Icon} from "../../../../components/icon/icon.tsx";

type ProjectPropsType = {
    title: string;
    text: string;
    src: string;
    stack: string;
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ImageProject src={props.src} alt="Project" />
            <TitleProject>{props.title}</TitleProject>
            <TextProject>{props.text}</TextProject>
            <Stack>{props.stack}</Stack>
            <div>
                <div>
                    <Icon iconId={"link"}></Icon>
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
    max-width: 375px;
    width: 100%;
`

const ImageProject = styled.img`
    max-width: 375px;
    height: 260px;
    width: 100%;
`

const TitleProject = styled.h3`
    
`

const TextProject = styled.p`

`
const Stack = styled.p`

`

const IconLink = styled.a`

`