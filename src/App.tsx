import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile'
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

type PostsType = {
    posts: Array<PostsArrayType>
}

type PostsArrayType = {
    id: number,
    message: string,
    likes: number
}

type DialogsDataType = {
    dialogs: Array<DialogsType>
}

type DialogsType = {
    id: number,
    name: string
}

type MessageDataType = {
    message: Array<MessageType>
}

type MessageType = {
    message: string
}

const App = (props: PostsType | DialogsDataType | MessageDataType) => {


    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route exact path='/dialogs' render={()=><Dialogs dialogs/>}/>
                <Route exact path='/profile' render={()=><Profile />}/>
            </div>
        </div>
        </BrowserRouter>
    );
}


export default App;
