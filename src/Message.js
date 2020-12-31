import React, { PureComponent } from 'react'

import { Button, Input } from 'antd'
import moment from 'moment';
// import 'antd/dist/antd.less'
import 'antd/dist/antd.css';

export default class Message extends PureComponent {
  constructor(){
    super();
    this.state = {
      TextareaContent:""
    }
  }
  render() {
    const { TextArea } = Input;
    return (
      <div style = {{width:"500px"}}>
        <TextArea 
        rows={4} cols={30} 
        onChange = {e=>{this.changeHendle(e)}}
        />
        <Button type="primary" onClick = {e=>{this.buttonClick()}}>
          添加文本
        </Button>
        
      </div>
    )
  }
  changeHendle(e){
    console.log(e.target.value)
    const currentTextarea = e.target.value;
    this.setState({
      TextareaContent:currentTextarea
    })
  }
  buttonClick(){
    const currentText = this.state.TextareaContent;

    this.props.changeMessageContent(currentText);
  }
}
