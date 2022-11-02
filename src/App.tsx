import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile, {PostsType} from './components/Profile/Profile'
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs, {DialogsDataType, MessageDataType} from "./components/Dialogs/Dialogs";


type AppType = PostsType & DialogsDataType & MessageDataType


const App = (props: AppType) => {


    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route exact path='/dialogs' render={()=><Dialogs message={props.message} dialogs ={props.dialogs} />}/>
                <Route exact path='/profile' render={()=><Profile posts={props.posts} />}/>
            </div>
        </div>
        </BrowserRouter>
    );
}


export default App;
