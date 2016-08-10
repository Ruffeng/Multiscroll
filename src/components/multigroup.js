import React from 'react';
export default class MultiGroup extends React.Component {
  constructor(props){
    super(props);
    this.state={nPage: 1, count: React.Children.count(this.props.children), height: document.documentElement.clientHeight };
    this.onWheel= this.onWheel.bind(this);
    this.onTouch= this.onTouch.bind(this);
    this.selectPage=this.selectPage.bind(this);
    this._handleResize = this._handleResize.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.scrollAllow=true;
    this.animTime=3.0;
    this.webLeft=[];
    this.webRight=[];
    this.initPosition=0;
    this.lastPosition=0;
    this._defineContent();
    console.log(this.backgrounds);
  }
  componentDidMount() {
       window.addEventListener("resize", this._handleResize);
  }
  _handleResize(){
      this.setState({height: document.documentElement.clientHeight})
  }
  _defineContent(){
       React.Children.map(this.props.children, (child,key) => {
          this._setSidePage(child,key);
       })
  }
  _setSidePage(child,key){
      if (child.type == "multiScroll"){
            let bgColor = child.props.bgColor|| "red";
            React.Children.map(child.props.children, (section) => {
                switch(section.type){
                  case "leftSide" :
                    this.webLeft.push({page: key, content: section.props.children, bgColor });
                    break;
                  case "rightSide" :
                    this.webRight.push({page: key, content: section.props.children, bgColor});
                    break;
                }
            })
      }
  }

  onTouchStart(e){
    this.initPosition = e.touches[0].screenY
  }

  onTouchMove(e){
    this.lastPosition = e.touches[0].screenY;

  }
  onTouchEnd(d){
    console.log("First position: "+this.initPosition+". Last position: "+this.lastPosition);
  }

  onTouch(e){
    let initPosition = initPosition || e.touches[0].screenY;
    //console.log(initPosition);

  }
  onWheel(e){
    if( !this.scrollAllow){
      e.preventDefault();
    }
    else{
      const step = e.deltaY > 0 ? this.state.nPage+1 : this.state.nPage-1;
      if (this.scrollAllow && step >= 1 && step <= this.state.count){
        this.scrollAllow = false;

        setTimeout(()=>{this.scrollAllow=true},(this.animTime*1000));
        this.setState({nPage: step})
      }
    }
  }
  selectPage(nPage){
      this.setState({nPage});
  }
  renderList(list){
          return(
            list.map((content)=>{
              return(
                <div className={`page page-${content.page+1}`}
                style={{ height:`${this.state.height}px`, backgroundColor:content.bgColor }}
                key={content.page}>{content.content}</div>
              )
            })
          );
      }
  render(){
    const contRight=this.webRight.slice().reverse();
    const contLeft=this.webLeft;
    const {nPage}= this.state;
    const transition= `all ${this.animTime}s`;
    return (
        <div onWheel={this.onWheel} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd} className="scroller">
            <div className="left" style={{top:`-${this.state.height*(nPage-1)}px`,transition}}>
                {this.renderList(contLeft)}
            </div>
            <div className="menu" />
            <div className="right" style={{bottom:`-${this.state.height*(nPage-1)}px`,transition}}>
                {this.renderList(contRight)}
            </div>

            <div className="dotstyle">
                  <ul>
                    {contLeft.map((e,i)=><Menu key={i}
                    onPress={this.selectPage}
                    step={i+1}
                    selected={nPage==i+1}/>)}
                  </ul>
                </div>
        </div>
    );
  }
}
class Menu extends React.Component {
   constructor(props){
      super(props);
      this.onClick=this.onClick.bind(this);
    }
    onClick(){
      this.props.onPress(this.props.step)
    }
    render(){
      const {selected}= this.props;
      const select =selected?'current':'';
      return <li className={`${select}`}><a href="#" onClick={this.onClick}> </a></li>;
      }
}

