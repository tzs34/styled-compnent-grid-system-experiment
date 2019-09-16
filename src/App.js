import React from 'react';
import {Row, Column} from './components/styled-layout'

function App() {
  return (
    <div>
      <Row columns={6}>
        <Column desktop={1} tablet={2} mobile={6} >
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
