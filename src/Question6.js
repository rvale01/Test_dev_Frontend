import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { loginUser } from './redux/actions/actions';
import { Link } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
const Question5 = (props) => {

    const { register, handleSubmit, watch, errors } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const [PopUp, setPopUp] = useState(false)

    useEffect(() => {
        console.log(props.responseLogin, 'test')
    }, [props.responseLogin]);

    const onSubmit = data => {
        props.loginUser(data)
        setPopUp(true)
    }
    return (
        <div className="top-section" style={{ height: '52em' }}>

            <Alert show={PopUp} variant="info" onClose={() => setPopUp(false)} dismissible style={{ marginBottom: 100 }}>
                {console.log(props.responseLogin)}
                {props.responseLogin === 'email does not exist'
                    ? (
                        <div>
                            <Alert.Heading>OPS!</Alert.Heading>
                            <div>Email or password wrong</div>
                        </div>
                    )

                    : null
                }
                {props.responseLogin === 'good'
                    ? (
                        <div>
                            <Alert.Heading>Yeah!</Alert.Heading>
                            <div>You can now login!</div>
                        </div>
                    )
                    : null
                }
                {props.responseLogin === 'email or password wrong'
                    ? (
                        <div>
                            <Alert.Heading>OPS!</Alert.Heading>
                            <div>Email or password wrong!</div>
                        </div>
                    )
                    : null
                }
            </Alert>
            <form onSubmit={handleSubmit(onSubmit)} className='offset-1'>

                <h3 style={{ marginBottom: 30 }}>Sign up form</h3>

                {/* {submitErrors && submitErrors.map(
                    error => <div class='error-notification'>{error.message}</div>
                )} */}

                <div class='input-container'>
                    <label>Email</label>
                    <input name="email" style={{ marginLeft: 20 }} ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                    {errors && errors.email && <span class='input-error'>Email is a invalid</span>}
                </div>

                <div class='input-container'>
                    <label>Password</label>
                    <input type="password" name="password" style={{ marginLeft: 20 }} ref={register({ required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/ })} />
                    {errors && errors.password && <span class='input-error' >Password must contain: one number and one uppercase and lowercase letter, and at least 8 or more characters</span>}
                </div>

                {/*  */}

                <button
                    className="popupButton"
                    type="submit"
                    style={{ marginTop: 20 }}
                    onPress
                >
                    LogIn
                </button>

                <Link to="/" className='offset-1' style={{ marginRight: 70 }}>
                    <button >
                        Home
                    </button>
                </Link>
            </form>

        </div >
    )
}

//map to state redux
const mapStateToProps = (state) => {
    return {
        result: state.root.result,
        responseLogin: state.root.responseLogin
    }
}

//export
export default connect(mapStateToProps, { loginUser })(Question5)