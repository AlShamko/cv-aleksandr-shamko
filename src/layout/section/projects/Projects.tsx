import {TextSection} from "../../../components/TextSection.tsx";
import {TitleSection} from "../../../components/TitleSection.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";

export const Projects = () => {
    return (
        <StyledProjects>
            <TitleSection>Projects</TitleSection>
            <TextSection>Things I’ve built so far</TextSection>
            <FlexWrapper>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`

`
