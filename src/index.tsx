import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';





let dialogsData = [
    {id: 1, name: 'Artur'},
    {id: 2, name: 'Dilpopo'},
    {id: 3, name: 'Arturican'},
    {id: 4, name: 'Vasya'},
]
let messageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Как дела?'},
    {id: 3, message: 'Что нового?'},
    {id: 4, message: 'Йоу'},
]

let posts = [
    {id: 1, message: 'Всем привет!', likes: 10},
    {id: 2, message: 'Всем привет!', likes: 10},
    {id: 3, message: 'Всем привет!', likes: 10},
    {id: 4, message: 'Всем привет!', likes: 10},
    {id: 5, message: 'Всем привет!', likes: 10},
    {id: 6, message: 'Всем привет!', likes: 10},
]


ReactDOM.render(
    <App posts={posts} dialogs={dialogsData} message={messageData}/>,
  document.getElementById('root')
);