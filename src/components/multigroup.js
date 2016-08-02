import React from 'react';

export default class MultiGroup extends React.Component {
  _getNumberOfPages(){
    return (React.Children.count(this.props.children));
  }
  _getChild(){
       return(
          React.Children.map(this.props.children, (child,i) => {
            return ( child );
            })
        );

  }
  render(){
    const child = this._getChild();
    const numOfPages = this._getNumberOfPages();
    return(
     <div>
      The number of child are: {numOfPages}
     {child}
     </div>
    );
  }
}


