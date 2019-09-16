import React from 'react';
import styled from 'styled-components'
import { device } from '../helpers/app-helpers';

export const Column= styled.div`
    --width: ${props => props.width};
    order: ${props => props.moborder};

    @media only screen and ${device.tablet}  {
        --width: ${({mobile, tablet}) => tablet || mobile};
        order: ${({moborder, taborder}) => taborder || moborder};
    }

    @media only screen and  ${device.desktop}{
        --width: ${({desktop, tablet}) => desktop || tablet};
        order: ${({dtorder, taborder, }) => dtorder || taborder};
    }
  
`

export const Row = styled.div`
  	margin: 0;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
    --columns: ${props => props.columns || 4};

  ${Column}{
    --initialbasis: calc(var(--width, 0) / var(--columns) * 100%);
    --gap: calc((var(--columns) - var(--width)) * 0.2%);
    flex-basis: calc(var(--initialbasis) - var(--gap));
  }
`