import React from 'react'
import PageNotFound from '../components/404Error';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    if(this.props.statusCode){

      if(this.props.statusCode === 404){
        return(<PageNotFound />)
      }
      else{
        return(<p>`An error ${this.props.statusCode} occurred on server`</p>)
      }

    }else{
      return(<p>An error occurred on client</p>);
    }
  }
}

export default Error;