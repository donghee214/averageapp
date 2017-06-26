import React from "react";
import style1 from '../.././styles/main.scss';
import {Motion, spring} from '../../node_modules/react-motion/build/react-motion';

export default class Title extends React.Component {
    render() {
        return (
            <Motion style={{ x: spring(this.props.moveStuff ? -11 : 0, { stiffness: 110, damping: 13 }) }}>
                {value => {
                    return <div className={style1.content} style={{
                        WebkitTransform: `translate3d(-50%, ${value.x}vw, 0)`,
                        transform: `translate3d(-50%, ${value.x}vw, 0)`,
                    }}>
                        <div className={style1.visible}>
                            <p>
                                Time
                            </p>
                            <ul>
                                <li>Sleeping</li>
                                <li>Eating</li>
                                <li>Playing</li>
                                <li>Living</li>
                            </ul>
                        </div>
                    </div>
                } }
            </Motion>

        );
    }
}