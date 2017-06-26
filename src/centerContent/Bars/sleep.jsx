import React from "react";
import style from '../../.././styles/main.scss';
import {Motion, spring} from '../../../node_modules/react-motion/build/react-motion';

export default class Sleep extends React.Component {
    constructor() {
        super();
        this.state = { move: false};
    }

    componentDidMount() {
        setTimeout(() => this.setState({ move: true }), 1600);
    }
     componentWillReceiveProps(){
        this.setState({time: JSON.stringify(Math.round(0.12*this.props.sleepInfo*10)/10)});
    }

    render() {
        return (
            <div  style={{
                position: 'relative',
                height: "10%",
                width: "95%",

            }}>
                <Motion style={{ x: spring(this.state.move ? this.props.sleepInfo : 0) }}>
                    {value => {
                        return <div style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "#FFFFFF",
                            position: 'relative',
                            left: '-100%',
                            WebkitTransform: `translate3d(${value.x}%, 0, 0)`,
                            transform: `translate3d(${value.x}%, 0, 0)`,
                        }}>
                        </div>

                    } }
                </Motion>
                <Motion style={{x: spring(this.state.move ? 100 : 0),y: spring(this.state.move ? 0 : 10) }}>
                    {value => {
                 return <div style={{
                    height: "100%",
                    width: value.x + '%',
                    background: 'linear-gradient(to right, rgba(220,220,220,0), rgba(220,220,220,0.8))',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    overflow: 'hidden',
                }}>
                      <p style={{
                                height: '100%',
                                textAlign: 'right',
                                display: 'inline-flex',
                                justifyContent: 'flex-end',
                                width: '98%',
                                alignItems: 'center',
                                WebkitTransform: `translate3d(${value.y}%, 0, 0)`,
                                transform: `translate3d(${value.y}%, 0, 0)`,
                                position: 'relative',
                            }}>Sleeping<br />
                               {this.state.time} Hours</p>
                </div>
  } }
                </Motion>
            </div>

        );
    }
}