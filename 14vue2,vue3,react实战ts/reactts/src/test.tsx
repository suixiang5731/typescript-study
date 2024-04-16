/*
// 老写法 使用class
import React from "react";
interface stateType {
    num: number
}
interface propsType {
    num1: number
}
class Test extends React.Component<propsType,stateType> {
    constructor(props) {
        super(props);
        this.state={
            num:123
        }
    }

    render():JSX.Element {
        setTimeout(() => {
            this.setState({
                num: 123
            })
        }, 1000)
        return <div>
            <h1>{ this.props.num1 }</h1>
            <h1>{ this.state.num }</h1>
        </div>;
    }
}*/
// hook 写法
import React from "react";
import {useState} from "react";
export default function Test():JSX.Element {
    const [state1, setState1] = useState({
        num: 123
    })
    setTimeout(() => {
        setState1({
            num: 999
        })
    }, 1000)
    return <div>
        <h1>{state1.num}</h1>
    </div>
}
// 使用 export default 导出组件