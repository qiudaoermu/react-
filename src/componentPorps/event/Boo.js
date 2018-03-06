import React ,{ Component} from 'react'
import emitter from "./ev"


export default class  Boo extends Component{


    render(){
        const cb =(msg)=>{
            return ()=>{
                emitter.emit("callMe",msg)
            }
        }

        return(
            <div>

                我是非嵌套2号
                <button onClick={cb("blue")}></button>
            </div>
        )
    }

}