import './App.css'
import styled from "styled-components";
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/section/main/Main.tsx";
import {Skills} from "./layout/section/skilss/Skills.tsx";
import {Projects} from './layout/section/projects/Projects.tsx';


function App() {
    return (
        <StyledWrapper>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`
export default App

