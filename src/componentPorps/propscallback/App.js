import React,{ Component } from "react"
import Sub from './SubComponent.js'
export default class Propscallback extends Component{
    callback(msg){
        console.log(msg)
    }
    render(){
        return(
            <div>
                <Sub  callback={this.callback}/>
            </div>
        )
    }

}