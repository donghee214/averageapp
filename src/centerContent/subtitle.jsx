import React from "react";
import style from '../.././styles/main.scss'
import {Motion, spring} from '../../node_modules/react-motion/build/react-motion';

export default class SubTitle extends React.Component {



    render() {
        return (
            <div style={{ height: '20%' }}>
                <Motion style={{ x: spring(this.props.show ? 1 : 0), y: spring(this.props.show ? 0 : 50) }}>
                    {value => {
                        return <div className={style.sub} style ={{
                            opacity: value.x,
                            WebkitTransform: `translate3d(0, ${value.y}%, 0)`,
                            transform: `translate3d(0, ${value.y}%, 0)`,
                        }}>
                            Your <span className ={style.standOut}>&nbsp; divided&nbsp; </span> attention across your<span className ={style.standOut}>&nbsp; life</span>.
                        </div>

                    } }
                </Motion>
                <Motion style={{ x: spring(this.props.show1 ? 1 : 0), y: spring(this.props.show1 ? 0 : 50) }}>
                    {value => {
                        return <div className={style.sub} style ={{
                            opacity: value.x,
                            WebkitTransform: `translate3d(0, ${value.y}%, 0)`,
                            transform: `translate3d(0, ${value.y}%, 0)`,
                            marginTop: '2%',
                        }}>
                            Enter your <span className ={style.standOut}>&nbsp; Age</span>.
                        </div>

                    } }
                </Motion>
                <Motion style={{ x: spring(this.props.show1 ? 1 : 0), y: spring(this.props.show1 ? 0 : 50) }}>
                    {value => {
                        return <div className={style.sub} style ={{
                            opacity: value.x,
                            WebkitTransform: `translate3d(0, ${value.y}%, 0)`,
                            transform: `translate3d(0, ${value.y}%, 0)`,
                            marginTop: '2%',
                        }}>
                            Enter your <span className ={style.standOut}>&nbsp; Age</span>.
                        </div>

                    } }
                </Motion>
            </div>

        );
    }
}