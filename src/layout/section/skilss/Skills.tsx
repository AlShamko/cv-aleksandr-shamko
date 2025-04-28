import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/icon.tsx";
import {TitleSection} from "../../../components/TitleSection.tsx";
import {TextSection} from "../../../components/TextSection.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <TitleSection>My Tech Stack</TitleSection>
            <TextSection> Technologies I’ve been working with recently</TextSection>
            <FlexWrapper wrap={"wrap"} justify={"center"} align={"center"}>
                <IconBox>
                    <Icon iconId={"gitHubBig"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                </IconBox>
                <IconBox>
                    <Icon iconId={"greensock"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                </IconBox>
                <IconBox>
                    <Icon iconId={"bootstrap"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                </IconBox>
                <IconBox>
                    <Icon iconId={"react"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                </IconBox>
                <IconBox>
                    <Icon iconId={"sass"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                </IconBox>
                <IconBox>
                    <Icon iconId={"git"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                </IconBox>
                <IconBox>
                    <Icon iconId={"css"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                </IconBox>
                <IconBox>
                    <Icon iconId={"html"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                </IconBox>
                <IconBox>
                    <Icon iconId={"js"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                </IconBox>
                <IconBox>
                    <Icon iconId={"tailwind"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                </IconBox>
                <IconBox>
                    <Icon iconId={"vscode"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                </IconBox>
                <IconBox>
                    <Icon iconId={"postgrest"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                </IconBox>
                </FlexWrapper>
        </StyledSkills>
);
};


const StyledSkills = styled.section`
    display: flex;
    flex-direction: column;
`

const IconBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
`

