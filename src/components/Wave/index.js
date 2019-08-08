// import React from 'react';
// import { render } from 'react-dom';
// import { Wave } from 'react-animated-text';

// const exampleStyle = {
//     display: 'inline-block',
//     border: '1px solid #ccc',
//     marginBottom: '1em',
//     padding: '2em 1em 1em 1em',
//     width: '80%',
//     fontSize: '1.5rem',
//   }
  
//   const codeDivStyle = {
//     backgroundColor: '#eee',
//     marginTop: '2em',
//     padding: '1px 1em',
//     overflow: 'scroll',
//     fontSize: '1rem',
//   };
  
//   const codeStyle = {
//     textAlign: 'left'
//   };
  
//   const buttonStyle = {
//     cursor: 'pointer',
//     backgroundColor: '#69c',
//     border: 'none',
//     color: 'white',
//     appearance: 'none',
//     boxShadow: 'none',
//     borderRadius: 0,
//     fontSize: '1.0rem',
//     padding: '0.2em 2em',
//   };

// export class Wave2 extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { paused: true };
//       this.togglePause = this.togglePause.bind(this);
//       this.reset = this.reset.bind(this);
//     }
  
//     togglePause() {
//       this.setState(prevState => ({ paused: !prevState.paused }));
//     }
  
//     reset() {
//       this.setState('paused', true);
//     }
  
//     render() {
//       return (
//         <div style={exampleStyle}>
//           <a onClick={this.togglePause} style={{cursor: 'pointer'}}>
//             <Wave
//               text="About Me"
//               effect="verticalFadeOut"
//               effectChange={2.5}
//               effectDirection='down'
//               iterations={1}
//               paused={this.state.paused}
//             />
//           </a>
//           <br />
//           <button style={buttonStyle} onClick={this.togglePause}>Reset</button>
  
        
//         </div>
//       )
//     }
//   }
//   export default Wave2;