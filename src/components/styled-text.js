/* based on the font size generated for
 font Robot 
 using https://type-scale.com/
 at the scale of 1.250 - Major Third
*/
import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
        * {
            @import url('https://fonts.googleapis.com/css?family=Roboto:400|Poppins:400');
            font-family: Roboto !important;
           
        }
    `
    export const TextElement = styled.div`
        --default-size: ${props => props.size || 0.8};
        --scale: ${props => props.scale || 1.25};
    
        --h1:  calc(var(---default-size) * var(--scale))em;
        --h2:  calc(var(--h1) * var(--scale))em;
        --h3:  calc(var(--h2) * var(--scale))em;
        --h4:  calc(var(--h3) * var(--scale))em;
        --h5: calc(var(--h4) * var(--scale))em;

        
        font-size: var(---default-size)em; 

        & h1{
            font-size: --h5
        }
        & h2{
            font-size: --h2;
        }
        & h3{
            font-size: h3;
        }
        & h4{
            font-size: --h4
        }
        & h5{
            font-size: --h5;
        }
    `

