import React from 'react';
import Menu from './menu';

export default class multiscroll extends React.Component {
    constructor(props){
        super(props);
        this.state={step:1, count:this.props.data.length, estat:0};
        this.onWheel=this.onWheel.bind(this);
      	this.selectStep=this.selectStep.bind(this);
        this.renderList=this.renderList.bind(this);
        this.h=document.documentElement.clientHeight;
      	this.allow=true;
      	this.timer=700;
      	this.animTime=5.7;
    }
    componentWillMount(){
        let estat = this.state.estat+1
        this.setState({estat});
    }

    onWheel(e){
    	if( !this.allow) e.preventDefault();
     	let step = e.deltaY > 0 ? this.state.step+1 : this.state.step-1;
      	
      	if( this.allow && step>=1 && step <= this.state.count){
            this.allow=false;
 			setTimeout(()=>{this.allow=true},this.timer);
            this.setState({step});
        }
    }

    renderList(list){
        return list.map((e,i)=> <div className="img"
                style={{ backgroundImage:`url(${e.img})`, height:`${this.h}px` }}
                key={i}/>)
    }

	selectStep(step){
		this.setState({step})
	}
    



    render(){
        let {data}= this.props;
        let {step}= this.state;
        let transition= `all ${this.animTime}s`;
        let reversedata=data.slice().reverse();
        console.log(this.state.estat);
        return (
            <div onWheel={this.onWheel} className="slider">
                <div className="left" style={{top:`-${this.h*(step-1)}px`,transition}}>
                    {this.renderList(data)}
                </div>
                <div className="right" style={{bottom:`-${this.h*(step-1)}px`,transition}}>
                    {this.renderList(reversedata)}
                </div>

				<div className="right-panel">
					<div className='btn-panel'>
						{data.map((e,i)=><Menu key={i} 
						onPress={this.selectStep}
						step={i+1}
						selected={step==i+1}/>)}

					</div>
				</div>
                <div style={{zIndex:'999', position:'fixed', color:'#fff'}}>
					Step {this.state.step}</div>
            	</div>
		);
	}
}
