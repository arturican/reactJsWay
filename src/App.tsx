import React from 'react';
import './App.css';

function App() {
  return (
    <div>
     <Header />
     <Technologies />
    </div>
  );
}

const Technologies = () => {
    return (
        <div>
            <h2>Hello, samurai! Let's go!</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
            </ul>
        </div>
    )

}
const Header = () => {
    return (
        <div>
            <a href="#">Home</a>
            <a href="#">New Feed</a>
            <a href="#">Messages</a>
        </div>
    )

}
export default App;
