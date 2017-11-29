import React, { Component } from 'react';
import './App.css';
import Submit from './Submit.js';

// import dd from './dd.JPG';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Father_Name: "",
            Email: "",
            show: false
        }
    }
    OnChange(e) {
        this.setState({
            Name: e.target.value

        });
    }
    OnChange1(e) {
        this.setState({
            Father_Name: e.target.value

        });
    }
    OnChange2(e) {
        this.setState({
            Email: e.target.value

        });
    }

    submitForm(event) {
        event.preventDefault();
        this.setState({ show: true })
    }
    render() {
        let SubmitComponent = ""
        if (this.state.show === true) SubmitComponent = <Submit allValues={this.state} />
        return (
            <div>
                <form onSubmit={this.submitForm.bind(this)}>
                    Name:<br />
                    <input type="text" onChange={this.OnChange.bind(this)} /><br />
                    FatherNAme:<br />
                    <input type="text" onChange={this.OnChange1.bind(this)} /> <br />
                    Email:<br />
                    <input type="text" onChange={this.OnChange2.bind(this)} /><br />
                    <input type="submit" value="submit" />
                </form>
                {/* {this.state.Name}<br /> */}
                {/* {this.state.Father_Name}<br /> */}
                {/* {this.state.Email} */}
                {SubmitComponent}
            </div>
        )
    }
}

export default Form;
