import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
  constructor(){
    super();
    this.state = {
      activeTip:0
    }
  }
  render() {
    return (
      <div className="header_main">
        <div onClick={(e)=>{this.headerClick(1)}}>
          sss{this.state.activeTip}
        </div>
        {this.props.headerTitle.map((item,index)=>{
          return (
            <div 
            onClick = {(e)=>{
              this.props.changeTit(index)
              this.setState({
                activeTip:index
              })
            }}
            key = {item}
            className = {(index === this.state.activeTip) ? "active" : ""}
            >
              {item}
              {this.props.children}
            </div>
          )
        })}
      </div>
    )
  }
  headerClick(index){
    this.props.changeTit(index)
  }
}
