import React from 'react';
// Intentar de posar dintre del state el height, aixi fara un render automatic
export default class MultiGroup extends React.Component {
  constructor(props){
    super(props);
    this.state={nPage: 1, count: React.Children.count(this.props.children), height: document.documentElement.clientHeight };
    this.onWheel= this.onWheel.bind(this);
    this.selectPage=this.selectPage.bind(this);
    this.scrollAllow=true;
    this.animTime=3.0;
    this.webLeft=[];
    this.webRight=[];
    this._defineContent();
    this._handleResize = this._handleResize.bind(this);


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
    console.log(this.scrollAllow)
    if( !this.scrollAllow){
      e.preventDefault();
    }
    else{
      const step = e.deltaY > 0 ? this.state.nPage+1 : this.state.nPage-1;
      //console.log(step);
      if (this.scrollAllow && step >= 1 && step <= this.state.count){
        this.scrollAllow = false;
        setTimeout(()=>{this.scrollAllow=true},(this.animTime*1000));
        this.setState({nPage: step})
      }
    }
  }
  selectPage(nPage){
      this.setState({nPage})
  }
  renderList(list){
          return(
            list.map((content)=>{
              return(
                <div className={`page-${content.page+1}`}
                style={{ height:`${this.state.height}px` }}
                key={content.page}>{content.content}</div>
              )
            })
          );
      }
  render(){
    let contRight=this.webRight.slice().reverse();
    let contLeft=this.webLeft;
    let {nPage}= this.state;
    let transition= `all ${this.animTime}s`;
    return (
        <div onWheel={this.onWheel} className="scroller">
            <div className="left" style={{top:`-${this.state.height*(nPage-1)}px`,transition}}>
                {this.renderList(contLeft)}
            </div>
            <div className="right" style={{bottom:`-${this.state.height*(nPage-1)}px`,transition}}>
                {this.renderList(contRight)}
            </div>

            <div className="right-panel">
                  <div className='btn-panel'>
                    {contLeft.map((e,i)=><Menu key={i}
                    onPress={this.selectPage}
                    step={i+1}
                    selected={nPage==i+1}/>)}
                  </div>
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
      let {selected,step}= this.props;
      let select =selected?'selected':'';
      return <div onClick={this.onClick} className={`step-btn ${select}`}>{this.props.step}</div>;
      }
}

