import React from 'react';
//import Menu from './menu';

export default class MultiScroll extends React.Component {
    constructor(props){
        super(props);
        this.state={key: this.props.npage};
        this.height=document.documentElement.clientHeight;

    }
    renderList(list){
    //    return list.map((e,i)=> <div className="img"
     //           style={{ backgroundImage:`url(${e.img})`, height:`${this.h}px` }}
     //           key={i}/>)
    }

	
    render(){

         const {content}= this.props;
        // const {key} = this.props.content;
         const {nPage}= this.props;
         const transition= `all ${this.props.animation}s`;
         console.log("data: "+ content +"NPage: "+nPage+"Transition: "+transition);

        return(
        <div className="wrapper" data-key={nPage} style={{height: this.height}}>
            <div className="left" style={{top:`-${this.height*nPage}px`,transition}} >
                {content}
            </div>
            <div className="right" style={{top:`-${this.height*nPage}px`,transition}} >
                {content}
            </div>
        </div>   
            	
		);
	}
}


/*
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
*/                    