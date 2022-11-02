import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile, {PostsType} from './components/Profile/Profile'
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs, {DialogsDataType, MessageDataType} from "./components/Dialogs/Dialogs";


const App = (props: any) => {


    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route exact path='/dialogs' render={()=><Dialogs message={props.state.dialogsPage.message} dialogs ={props.state.dialogsPage.dialogs} />}/>
                <Route exact path='/profile' render={()=><Profile posts={props.state.postPage.posts} />}/>
            </div>
        </div>
        </BrowserRouter>
    );
}


export default App;
