import React from "react";
import style from '../.././styles/main.scss';
import SVGInline from "react-svg-inline";
import {Motion, spring} from '../../node_modules/react-motion/build/react-motion';

var __html = require('./slider/slider.html');
var template = { __html: __html };


export default class Slider extends React.Component {
    constructor() {
        super();
        this.state = { clickable: false };
        setTimeout(() => this.setState({ clickable: true }), 3600);
       
    }
    handleChange(e) {
        this.props.hideSubtitle()
 
    }

    moveComp(e) {
        this.props.animateStuff();
    }

 
onDragHandle(e){
  this.props.updateVal();
}
    render() {
        
        return (
            <Motion style={{ x: spring(this.props.moveStuff ? 20 : 0) }}>
                {value => {
                    return <div className={style.slider} style={this.state.clickable ? {
                        pointerEvents: 'auto',
                   
                    } : {
                            pointerEvents: 'none'
                        }}
                        dangerouslySetInnerHTML={template} onClick={this.handleChange.bind(this) } onMouseUp={this.moveComp.bind(this) } onMouseMove={this.onDragHandle.bind(this)} onTouchMove={this.onDragHandle.bind(this)} onTouchEnd={this.moveComp.bind(this)}>
                    </div>

                } }
            </Motion>
        );


    }
}