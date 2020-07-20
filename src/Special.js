import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { loginUser } from './redux/actions/actions';
import { Link } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'


const Special = (props) => {
    return (
        <div className="top-section" style={{ height: '52em' }}>
            {props.responseLogin === 'good' ?
                (
                    <h2>WELCOME ON THIS SPECIAL PAGE! <br /> YOU ARE NOW LOGGED IN</h2>
                )
                : <h2>OPS! <br /> YOU CAN'T VISIT THIS PAGE! TRY AGAIN!</h2>}
        </div>
    )
}

//map to state redux
const mapStateToProps = (state) => {
    return {
        responseLogin: state.root.responseLogin
    }
}

//export
export default connect(mapStateToProps, { loginUser })(Special)