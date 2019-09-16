import React from 'react';
import styled from 'styled-components'
import { device } from './helpers/app-helpers';

const Column= styled.div`
  --width: ${props => props.mobile};

  @media only screen and ${device.tablet}  {
    --width: ${({mobile, tablet}) => tablet || mobile};
  }

  @media only screen and  ${device.desktop}{
    --width: ${({mobile, desktop}) => desktop || mobile};
  }

`

const Row = styled.div`
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

function App() {
  return (
    <div>
    <Row columns={6}>
      <Column desktop={1} tablet={2} mobile={6}>
        <div style={{background:'#AA88EE'}}>One</div>
      </Column>
      <Column desktop={2} tablet={2} mobile={6}>
        <div style={{background:'#AA77AA'}}>Two</div>
      </Column>
      <Column desktop={3} tablet={2} mobile={6}>
        <div style={{background:'#CCEEDD'}}>Three</div>
      </Column>
    </Row>

    </div>
  );
}

export default App;
