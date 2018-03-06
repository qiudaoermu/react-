import React ,{Component} from 'react'
import Protypes from 'prop-types'
import  Sub from './Sub'


export default class Context extends Component{


    static childContextTypes = {
        color:Protypes.string,
        callback:Protypes.func
    }



    getChildContext(){
        return{
            color:"red",
            callback : this.callback
        }
    }
    callback(msg){
        console.log(msg)
    }
    render(){
        return(
            <div>
                <Sub></Sub>
            </div>
        )
    }
}