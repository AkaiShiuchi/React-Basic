import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/react-one-1536x864.jpg';

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }
    render() {
        console.log('>>> check props: ', this.props)
        return (
            <>
                <div>
                    Hello World from HomePage
                </div>
                <div>
                    <img src={logo} style={{ width: '450px', height: '300px', marginTop: '20px' }} />
                </div>
            </>
        )
    }
}

// export default withRouter(Home);
export default Color(Home);