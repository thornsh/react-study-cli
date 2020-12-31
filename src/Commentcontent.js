import React, { PureComponent } from 'react'
import { Comment } from 'antd';

export default class Commentcontent extends PureComponent {
  render() {
    return (
      <div>
        <Comment content={this.props.content} />
      </div>
    )
  }
}
