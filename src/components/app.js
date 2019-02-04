import React, { Component } from 'react'; 
import '../assets/css/app.css';
import InitialList from './initialList';
import ListView from './listView';

class App extends Component {
    render(){
        return (
            <div className="overallContainer">
                <div className="titleContainer">
                    <div className="titleHeader">
                        To-Do List
                    </div>
                </div>
                <div className="listContainer">
                    <InitialList/>
                    <ListView/>
                </div>
            </div>
        )
    }
}

export default App; 