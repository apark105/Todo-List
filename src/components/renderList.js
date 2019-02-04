import React, { Component } from 'react'; 
import '../assets/css/intialList.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

class RenderListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkBox: false
        }
    }

    checkBoxClicked = (e) => {
        if(this.state.checkBox) {
            this.setState({checkBox: false})
        } else {
            console.log('was this clicked?')
            this.setState({checkBox: true})
        }
    }


    render() {

        const { data } = this.props
            return (
                <div id="ilItems" className="ilItems">
                    <div className="ilItemsBorder">
                        <div className="boxContainer"> 
                            <div onClick={this.checkBoxClicked} id="box" className={`box ${this.state.checkBox ? "boxText": ""}`}>
                            
                            </div>
                        </div>
                        <div id={`text`} className={`text ${this.state.checkBox ? "crossText": ""}`}>
                            {data.title} 
                        </div>
                            <button onClick={ () => {this.props.delete(data._id)}} className="button">Delete</button>
                    </div>
                
                </div>
            )
    }
}

export default RenderListItem;
