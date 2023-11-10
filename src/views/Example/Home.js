import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/react-one-1536x864.jpg';
import { Connect, connect } from "react-redux";

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }
    handleDeleteUser = (user) => {
        console.log('>>> check user delete: ', user)
        this.props.deleteUserRedux(user);
    }
    handleCreateUser = () => {
        this.props.addUserRedux();
    }
    render() {
        console.log('>>> check props redux: ', this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello World from HomePage
                </div>
                <div>
                    <img src={logo} style={{ width: '450px', height: '300px', marginTop: '20px' }} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }
}

// export default withRouter(Home);

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));