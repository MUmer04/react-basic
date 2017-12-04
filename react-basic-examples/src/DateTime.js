import React,  {Component} from 'react';
class NewDate extends Component{
    render()
    {
    let newTime = new Date().toLocaleTimeString();
    let newDate = new Date().toLocaleDateString();
        return(
            <div>
            <h1> Time is {newTime}</h1>
            <h1>Date is {newDate}</h1>
            </div>
        )
    }
}
export default NewDate;