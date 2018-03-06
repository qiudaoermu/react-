import React,{ Component } from 'react'
import emitter from "./ev"

export default class Foo extends Component{


    constructor(props){
        super(props)
        this.state = {
            msg:null
        }
    }

    componentDidMount(){
        this.eventEmitter = emitter.addListener("callMe",(msg)=>{
            this.setState({
                  msg
            })
        })
    }
    componentWillUnmount(){
        emitter.removeListener(this.eventEmitter)
    }
    render(){
        return(
            <div>
                {this.state.msg}
                我是非嵌套 1 号
            </div>
        )
    }
}