import React, { Component } from 'react'; 
import '../assets/css/intialList.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import listData from '../dummy_data/list';
import {randomString} from '../helpers/index';
import RenderListItem from './renderList';

class InitialList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: {
                title: ' ',
                details: ' ',
                _id: '',
                toggle: false,
            },
            list: listData,
            expandBox: false,
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { itemInfo, list } = this.state;
        this.setState({
            list: [...list, itemInfo], 
        })
        this.resetForm();
    }

    resetForm = () => {
        document.getElementById('inputText').reset();
        this.setState({
            itemInfo: {
                title: ' ',
                details: ' ',
                _id: '',
                toggle: false,
            }
        })
    }
    

    deleteItem = (key) => {
        const { list } = this.state;
        for (let i =0; i < list.length; i++) {
            if ( list[i]._id == key ) {
                list.splice(i,1);
                this.setState(
                    {
                        list:list
                    }
                )
                break;
            }
        }
        console.log('did it delete me?',key)
    }


    checkBoxIfExpanded = () => {
        if(this.state.expandBox) {
            this.setState({expandBox: false})
        } else {
            console.log('was this clicked?')
            this.setState({expandBox: true})
        }
    }

    render() {
        const { list } = this.state
        const listItem = list.map((item, index) => {
            return (
                <RenderListItem key={item._id} data={item} delete={this.deleteItem} checkBox={this.checkBoxIfExpanded} check={this.expandBox} />
            )
        } ) 
        return(
            <div className="iLContainer">
            
                <div className="ilItems">
                <div className="ilItemsBorder">
                <form onSubmit={this.handleSubmit} className="text" id="inputText">
                    <input type="text" id="" onChange={ (e)=> {
                        this.setState({
                            itemInfo: {...this.state.itemInfo, title: e.target.value, _id:randomString(e.target.value.length) }
                        })
                    }}/>
                </form>
                        <button onClick={this.handleSubmit} className="button" id="addButton">Add Item</button>
                </div>
                </div>
                    {listItem}
            </div>
        )
    }
}

export default InitialList;