import React, { Component } from 'react'; 
import '../assets/css/list.css';

class ListView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: '',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.resetForm();
    }

    resetForm = () => {
        document.getElementById('inputText').reset();
        this.setState({
            item: '',
        })
    }

    render() {
        return (
            <div className="listViewContainer">
            <div className="addItemBox">
            
                    <form onSubmit={this.handleSubmit} className="" id="addListItem">
                        <input type="text" id="addListItem" onChange={ (e)=> {
                            this.setState({
                                item: e.target.value
                            })
                        }}/>
                        <button onClick={this.handleSubmit} className="button" id="addListItemButton">Add Item</button>
                    </form>
            
            </div>
                <div className="listViewInfo">
                        <ul>
                            

                        </ul>

                </div>
            </div>
        )
    }
}

export default ListView;