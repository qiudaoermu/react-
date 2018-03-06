import React ,{ Component } from 'react'
import Foo from './Foo'
import Boo from './Boo'

export default class Event extends Component{
    render(){
        return(
            <div>
                <Foo/>
                <Boo/>
            </div>
        )
    }
}