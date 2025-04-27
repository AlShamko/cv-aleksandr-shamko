import styled from "styled-components";
import photo from "../../../assets/images/foto.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-between"}>
                <TitleMain>Hi 👋,<br/>
                    My name is<br/>
                    Shamko Aleksandr<br/>
                    I am front end developer</TitleMain>

                <PhotoMain src={photo} alt="Foto"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`

`
const TitleMain = styled.h1`
    text-align: start;
`

const PhotoMain = styled.img`
    width: 349px;
    height: 349px;
    object-fit: cover;
`
