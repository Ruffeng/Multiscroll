/*import React from 'react';

export default class StepBtn extends React.Component {
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
		return (
					<div onClick={this.onClick} className={`step-btn ${select}`}>{this.props.step}</div>
		);
	}
}
*/