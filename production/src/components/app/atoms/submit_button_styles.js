import styled from "styled-components";
import {headings} from "../../../styles/global/typography";
import {colors} from "../../../styles/global/colors";

export const Button = styled.button`
background: ${colors.sand};
box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
width: 200px;
padding: 15px;
margin: 5px;
border: none;
color: ${colors.dark_dark_purple};
${headings.heading5_18px}
cursor: pointer;
transition: .3s;
&:hover {
    opacity: .8;
}
`;