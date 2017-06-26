import React from "react";
import style from '../.././styles/main.scss';
import {Motion, spring} from '../../node_modules/react-motion/build/react-motion';
import Headings from './headings.jsx';
import data from './stats.json';
import Sleep from './Bars/sleep.jsx'
import Work from './Bars/work.jsx'
import Study from './Bars/study.jsx'
import Reading from './Bars/reading.jsx'
import Internet from './Bars/internet.jsx'
import Cooking from './Bars/cooking.jsx'
import Video from './Bars/video.jsx'
import Music from './Bars/music.jsx'
import Videogames from './Bars/videogames.jsx'

export default class midData extends React.Component {
    constructor() {
        super();
        this.state = { slideDown: false, border: false };
        setTimeout(() => this.setState({ border: true }), 200);

    }
    componentDidMount() {
        this.props.moveStuff ? this.setState({ slideDown: true }) : this.setState({ slideDown: false });
    }

    render() {
        return (
            <Motion style={{ x: spring(this.state.slideDown ? 60 : 40, { stiffness: 110, damping: 13 }), y: spring(this.state.slideDown ? -11 : 0, { stiffness: 110, damping: 13 }) }}>
                {value => {
                    return <div className={style.MidData + ' ' + style.draw + ' ' + (this.state.border ? style.draw1 : null) }
                        style={{
                            height: value.x + "%",
                            WebkitTransform: `translate3d(0, ${value.y}vw, 0)`,
                            transform: `translate3d(0, ${value.y}vw, 0)`,
                            top: '11vw',
                            marginTop: '-10%'
                        }}>
                            <Headings />
                        <div style={{
                            display:'flex',
                            flexDirection:'column',
                            height:'94%',
                            justifyContent:'space-around',
                            padding:'3% 0 3% 0',
                            width:'79%',
                            overflow:'hidden'
                        }}>
                    
                        <Sleep sleepInfo={this.props.ageInfo.sleep}/>
                        <Work workInfo={this.props.ageInfo.work}/>
                        <Study studyInfo={this.props.ageInfo.study}/>
                        <Reading readingInfo={this.props.ageInfo.read}/>
                        <Internet internetInfo={this.props.ageInfo.web}/>
                        <Cooking cookingInfo={this.props.ageInfo.eat}/>
                        <Video videoInfo={this.props.ageInfo.movie}/>
                        <Music musicInfo={this.props.ageInfo.music}/>
                        <Videogames videoGameInfo={this.props.ageInfo.game}/>
                        </div>
                    </div>

                } }
            </Motion>




        );
    }
}