import {TextSection} from "../../../components/TextSection.tsx";
import {TitleSection} from "../../../components/TitleSection.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import imgOne from "../../../assets/images/imgOne.webp"
import imgTwo from "../../../assets/images/imgTwo.webp"

export const Projects = () => {
    return (
        <StyledProjects>
            <TitleSection>Projects</TitleSection>
            <TextSection>Things I’ve built so far</TextSection>
            <FlexWrapper>
                <Project
                    src={imgOne}
                    title={"Project Tile goes here"}
                    text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                    stack={"Tech stack : HTML , JavaScript, SASS, React"}
                />
                <Project
                    src={imgTwo}
                    title={"Project Tile goes here"}
                    text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                    stack={"Tech stack : HTML , JavaScript, SASS, React"}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`

`
