import React from 'react';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { saveUser } from './redux/actions/actions';
import { Link } from 'react-router-dom'

const Question5 = (props) => {

    const { register, handleSubmit, watch, errors } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const onSubmit = data => {
        props.saveUser(data)
    }
    return (
        <div className="top-section" style={{ height: '52em' }}>


            <form onSubmit={handleSubmit(onSubmit)} className='offset-1'>

                <h3 style={{ marginBottom: 30 }}>Sign up form</h3>

                {/* {submitErrors && submitErrors.map(
                    error => <div class='error-notification'>{error.message}</div>
                )} */}

                <div class='input-container'>
                    <label>Name</label>
                    <input name="name" ref={register({ required: true, pattern: /^[A-Za-z\s]+$/i })} style={{ marginLeft: 20 }} />
                    {errors && errors.name && <span class='input-error'>Name is a required field</span>}
                </div>


                <div class='input-container'>
                    <label>Email</label>
                    <input name="email" style={{ marginLeft: 20 }} ref={register({  required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                    {errors && errors.email && <span class='input-error'>Email is a invalid</span>}
                </div>

                <div class='input-container'>
                    <label>Password</label>
                    <input name="password" style={{ marginLeft: 20 }} ref={register({  required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/ })} />
                    {errors && errors.password && <span class='input-error' >Password must contain: one number and one uppercase and lowercase letter, and at least 8 or more characters</span>}
                </div>

                {/*  */}

                <button
                    className="popupButton"
                    type="submit"
                    style={{ marginTop: 20 }}
                    onPress
                >
                    Save
                </button>

                <Link to="/question6" style={{ marginLeft: 180, marginRight: 90 }}>
                    <button className='button'>
                        Sign in
                    </button>
                </Link>
                <Link to="/" className='offset-1' style={{ marginRight: 70 }}>
                    <button >
                        Home
                </button>
                </Link>
            </form>
        </div>
    )
}

//map to state redux
const mapStateToProps = (state) => {
    return {
        result: state.root.result
    }
}

//export
export default connect(mapStateToProps, { saveUser })(Question5)