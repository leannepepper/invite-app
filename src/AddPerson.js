import React, {Component} from 'react'; 

class AddPerson extends Component {
    state = {
        value: ''
    }; 

    valueChange = (e) => {
        this.setState(
            {
                value: e.target.value
            }
        )
    }
    handleSubmit = (e) => {
        e.preventDefault(); 
        this.props.addPerson(this.state.value); 
        this.setState({value: ''});
    }


    render() {
        return (
            <form className="add-person" onSubmit={this.handleSubmit}>
                <input className="add-input" type="text" onChange={this.valueChange} value={this.state.value} placeholder="Invite Another Person"/>
                <input className="add-button" type="submit" value="Invite!"/>
            </form>
        )
    }
  
}
export default AddPerson; 