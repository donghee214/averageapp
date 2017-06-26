import React from 'react';
import Background from'./landing.jsx';
import Center from './center.jsx';
import Info from './info.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div style={{
        height: "100%",
        width: "100%",
        position: 'absolute',
        top: 0
      }}>
        <Background />
        <Center />
        <Info />
      </div>
    )
  }
}
