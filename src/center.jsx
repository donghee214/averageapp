import React from "react";
import Title from './centerContent/title.jsx'
import SubTitle from './centerContent/subtitle.jsx'
import Slider from './centerContent/slider.jsx'
import MidData from './centerContent/midData.jsx'
import data from './centerContent/stats.json';

export default class Center extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false, show1: false, show2: true, moveStuff: false, data1: null };
        setTimeout(() => this.setState({ show: true }), 3200);
        setTimeout(() => this.setState({ show1: true }), 3600);
    }
    hideSubtitle(e) {

        this.setState({ show: false, show1: false });
        setTimeout(() => this.setState({ show2: false }), 1000);
    }
    animateStuff(e) {
        this.setState({ moveStuff: true });
    }

    updateVal() {
        this.setState({ data1: data.age[dragVal] });
    }
    render() {
        return (
            <div style={{
                height: "100%",
                width: "100%",
                position: 'absolute',
                top: 0
            }}>
                <Title moveStuff={this.state.moveStuff}/>

                {this.state.moveStuff ? <MidData ageInfo={this.state.data1} moveStuff ={this.state.moveStuff}/> : <SubTitle show={this.state.show} show1={this.state.show1}/>}
                <Slider updateVal={this.updateVal.bind(this)} moveStuff={this.state.moveStuff} animateStuff={this.animateStuff.bind(this) } hideSubtitle={this.hideSubtitle.bind(this) }/>
            </div>
        );
    }
}