import React from 'react';
//import Menu from './menu';

export default class MultiScroll extends React.Component {
    
    renderList(list){
    //    return list.map((e,i)=> <div className="img"
     //           style={{ backgroundImage:`url(${e.img})`, height:`${this.h}px` }}
     //           key={i}/>)
    }

	
    render(){
     //   const data = this.props.content
     //   const reverseData = data.slice().reverse();
     //   const nPage = this.props.npage;
     //  const transition= `all ${this.props.animation}s`;
       // console.log("data: "+data+". Reverse: "+reverseData)+"NPage: "+nPage+"Transition: "+transition);
        return(
            <div> dins 
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