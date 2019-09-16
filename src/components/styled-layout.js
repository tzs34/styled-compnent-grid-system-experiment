import React from 'react';
import styled from 'styled-components'

export const Column= styled.div`
--width: ${props => props.width};
background: ${props => props.background};
`

export const Row = styled.div`
    margin: 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
--columns: ${props => props.columns || 4};

${Column}{
  
  --initialbasis: calc(var(--width, 0) / var(--columns) * 100%);
  --gap: 1%;/*calc((var(--columns) - var(--width)) * 0.25%);*/
  flex-basis: calc(var(--initialbasis) - var(--gap));
}
`