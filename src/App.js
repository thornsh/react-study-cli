import React, { Component } from 'react'
import Header from './Header'

import Message from './Message'
import Comment from './Commentcontent'
import { Button, Input } from 'antd'
import moment from 'moment';
// import 'antd/dist/antd.less'
import 'antd/dist/antd.css';
import Commentcontent from './Commentcontent'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      message:"ceshi",
      headerTitle:["第一项","第二项","第三项"],
      messageContent:[]
    }
  }
  render() {
    const {message,headerTitle} = this.state;
    return (
      <div>
        <Header headerTitle={headerTitle} changeTit={(index)=>this.changeTitle(index)}>
          <div>111</div>
          <div>222</div>
          <div>333</div>
        </Header>
        <h1>
          {message}
        </h1>
        <div>
          {
            this.state.messageContent.map((item)=>{
              return <Commentcontent content = {item} key={item}/>
            })
          }
          <Message changeMessageContent={e=>{this.changeMessageContent(e)}}/>
          
          
        </div>
      </div>
    )
  }
  changeTitle(index){
    this.setState({
      message:this.state.headerTitle[index]
    })
  }
  changeMessageContent(changeMessageContent){
    this.setState({
      messageContent:[...this.state.messageContent,changeMessageContent]
    })
  }
}
