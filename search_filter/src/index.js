import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/ImageSlider.css';
import ImageSlider from './components/ImageSlider/ImageSlider';
import reportWebVitals from './reportWebVitals';

function App(props) {
  const titles = [
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
  ];

  const contents = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris augue neque gravida in fermentum. A diam maecenas sed enim. Turpis egestas integer eget aliquet nibh praesent. Ipsum suspendisse ultrices gravida dictum. Orci a scelerisque purus semper eget duis at. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Massa id neque aliquam vestibulum morbi blandit. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Justo eget magna fermentum iaculis eu. Lorem ipsum dolor sit amet.',
    'Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Sit amet mauris commodo quis imperdiet massa. Ut lectus arcu bibendum at varius vel pharetra vel. Faucibus ornare suspendisse sed nisi. Ornare lectus sit amet est. Eget mi proin sed libero enim sed.',
  ];

  const nbr = titles.length;
  const list = [];

  for (let x = 0; x < nbr; x++) {
    list.push(
      
    )
  }
  
  return(<ImageSlider />);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
