import React,{Component} from 'react';
import Link from './link.js';
export default class Menu extends Component{
    render(){
        let menus = ['Home', 'About Us','Contact Us','Services','Portfolio'];

        return(
            <div>
                {menus.map((x, i) => {
                return <div key = {i}><Link label = {x}/></div>}
                )
                }
            </div>
        )
    }
}
