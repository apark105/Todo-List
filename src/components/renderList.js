import React, { Component } from 'react'; 
import '../assets/css/intialList.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

class RenderListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkBox: false,
            expandBox: false,
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


    checkBoxIfExpanded = () => {
        if(this.state.expandBox) {
            this.setState({expandBox: false})
        } else {
            console.log('was this clicked?')
            this.setState({expandBox: true})
        }
    }

    render() {
        const overallCheck = this.state.expandBox && !this.state.checkBox ? "expandBox" : " "; 

        const { data } = this.props
            return (
                <div id="ilItems" className="ilItems">
                    <div className="ilItemsBorder">
                        <div className={`boxContainer ${overallCheck}`}> 
                            <div onClick={this.checkBoxClicked} id="box" className={`box ${this.state.checkBox ? "boxText": ""}`}>
                            
                            </div>
                        </div>
                        <div onClick={this.checkBoxIfExpanded} className={`text ${this.state.checkBox ? "crossText": ""} ${overallCheck}`}>
                            {data.title} 
                        </div>
                            <button onClick={ () => {this.props.delete(data._id)}} className="button">Delete</button>
                    </div>
                
                </div>
            )
    }
}

export default RenderListItem;
