import React from "react"


const Sub = (props)=>{

    const cb = (msg)=>{
       return ()=> {
           props.callback(msg)
       }

    }
    return(
        <h1>
            <button onClick={cb("我们通信吧")}>子组件向父组件传值</button>
        </h1>
    )
}
export default Sub