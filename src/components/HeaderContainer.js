import React from "react";
import Header from "./Header";
import connect from "react-redux/es/connect/connect";
import {meFunc} from "../actions";


class HeaderContainer extends React.Component {
    componentWillMount() {
        this.props.meFunc();
    }

    render() {
        return <Header />
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        meFunc: () => {
            dispatch(meFunc())
        }
    }
};

const ConnectedHeaderContainer = connect(null, mapDispatchToProps)(HeaderContainer);

export default ConnectedHeaderContainer;