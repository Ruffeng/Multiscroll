import React from 'react';

export default class MultiGroup extends React.Component {

  render(){
    console.log(this.props.children[0]._shadowChildren);  
    return(
    <div> 
      <p>total : {React.Children.count(this.props.children)} </p>
      {
        React.Children.forEach(this.props.children, (child,index) => {
              return (<div> hola que tal </div>);
        });

      }
      <p> {this.props.children[0].props.children}  </p>
    </div>  

    );
  }
}


