import React,{ Component } from "react";
import PropTypes from "prop-types";

export default class Subsub extends Component{

    static contextTypes = {
        color:PropTypes.toString,
        callback:PropTypes.func
    };
    render(){
        console.log(this.context.color)
        const style = { color:this.context.color };
        const cb = (msg)=>{
            return ()=>{
                this.context.callback(msg)
            }
        };
        return(
            <div style={{ color:this.context.color }}>
                    SuBsub
                  <button onClick={cb('我胡汉三又回来了')}>我胡汉三又回来了</button>
            </div>
        )
    }
}