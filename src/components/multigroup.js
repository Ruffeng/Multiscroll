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
    this.webLeft=[];
    this.webRight=[];
    this._defineContent();
      
  }
  
  
  _getNumberOfPages(){
    return this.state.count;

  }
  _defineContent(){
       React.Children.map(this.props.children, (child,key) => {
          this._setSidePage(child,key);
       })
  }
  _setSidePage(child,key){
      if (child.type == "multiScroll"){
            React.Children.map(child.props.children, (section) => {
                switch(section.type){
                  case "leftSide" : 
                    this.webLeft.push({page: key, content: section.props.children}); 
                    break; 
                  case "rightSide" : 
                    this.webRight.push({page: key, content: section.props.children}); 
                    break; 
                }              
            })      
      } 
  }
  
  onWheel(e){   
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

// RUSSIAN
  renderList(list){                     
          return(
            list.map((content,i)=>{
              return(
                <div className="img"    
                style={{ height:`${this.height}px` }}
                key={i}>{content.content}</div>
              )
            })
          );


          //return 
          //  list.map((e,i)=> <div className="img"    
          //        style={{ height:`${this.height}px` }}
          //        key={i}>as</div>)
      }


  render(){
    let contRight=this.webRight.slice().reverse();
    let contLeft=this.webLeft;
    let {nPage}= this.state; // Agafes el pas en que sta actualment 
    let transition= `all ${this.animTime}s`;// Fa all i el numero que haguem posat a animTime. EX: all 0.7
    return (
        <div onWheel={this.onWheel} className="slider">
            <div className="left" style={{top:`-${this.height*(nPage-1)}px`,transition}}>
                {this.renderList(contLeft)}
            </div>
            <div className="right" style={{bottom:`-${this.height*(nPage-1)}px`,transition}}>
                {this.renderList(contRight)}
            </div>
            
        </div>
    );
  }
}


