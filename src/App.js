import React from 'react';
import {Row, Column} from './components/styled-layout'
import {TextElement} from './components/styled-text'

function App() {
  return (
    <div>
      <Row columns={6}>
        <Column desktop={1} tablet={2} mobile={6} >
          <div style={{background:'#AA88EE',  padding: 10}}>
            <TextElement><h1>One</h1></TextElement>
          </div>
        </Column>
        <Column desktop={2} tablet={2} mobile={6}>
          <div style={{background:'#AA88EE',  padding: 10}}>
            <TextElement><h2>Two</h2></TextElement> 
          </div>
        </Column>
        <Column desktop={3} tablet={2} mobile={6}>
          <div style={{background:'#CCEEDD', padding: 10}}>
           <TextElement>Three</TextElement> 
          </div>
        </Column>
      </Row>
   </div>
  );
}

export default App;
