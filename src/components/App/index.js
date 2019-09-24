import React from 'react';
import Card from '../Card';
import styled from 'styled-components';
const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  > * {
    margin: 60px;
  }
`;
const App = () => {
  return (
  <List>
    <Card></Card>
    <Card></Card>
    <Card></Card>
  </List>
  );
}

export default App;
