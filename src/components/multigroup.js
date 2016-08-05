// ERROR LINE 44
import React from 'react';
import MultiScroll from './multiscroll'

export default class MultiGroup extends React.Component {
  constructor(props){
    super(props);
    this.state={nPage: 1, count: React.Children.count(this.props.children) };
    this.onWheel= this.onWheel.bind(this);
    this.selectPage=this.selectPage.bind(this);
    this.height=document.documentElement.clientHeight;
    this.scrollAllow=true;
    this.allowTimer=700;
    this.animTime=5.0;
    this.web={};
    this._getChild();
  }
  
  
  _getNumberOfPages(){
    return this.state.count;

  }
  _getChild(){
       React.Children.map(this.props.children, (child,key) => {
          this._getSection(child,key);
       })
       
       console.log(this.web);
       /*return(
          React.Children.map(this.props.children, (child,index) => {
            return ( 
              <MultiScroll nPage={index} content={child}  animation={this.animTime}/> 
            );
          })
        );*/
  }
  _getSection(child,key){
     
      if (child.type == "multiScroll"){
            let content = {};
            React.Children.map(child.props.children, (section) => {
                switch(section.type){
                  case "leftSide"  : this.web["left"][key]={page: key, content: section};
                  case "rightSide" : this.web.right={page: key, content: section};
                }              
            })
            
      }
      
  }
  
  onWheel(e){   // To know in which page are we and were are we going. Also it forbids to do a mousewheel if it's doing his job 
    if( !this.scrollAllow){
      e.preventDefault();
    }  
    else{
      const step = e.deltaY > 0 ? this.state.nPage+1 : this.state.nPage-1;    
      if (this.scrollAllow && step >= 1 && step <= this.state.count){
        this.scrollAllow = false;
        setTimeout(()=>{this.scrollAllow=true},this.allowTimer);
        this.setState({nPage: step})
      }
    }    
  }



  selectPage(nPage){
      this.setState({nPage})
  }
  render(){
    //const content = this._getChild();
    //const revChild =child.slice().reverse();
    let nPage = this.state.nPage;
    const numOfPages = this._getNumberOfPages();
    const transition= `all ${this.animTime}s`;

    return(
      <div onWheel={this.onWheel}  className="slider">
       
      </div>
    );
  }
}


/*<div className="1 left" style={{height: this.height, top:`-${this.height*(nPage-1)}px`,transition}} >
        The number of child are {numOfPages}
        </div>
        <div className="2 right" style={{height: this.height, bottom:`-${this.height*(nPage-1)}px`,transition}} >
        The number of child AGAIN are {numOfPages}
        </div>
*/