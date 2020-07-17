import React, { useState, useEffect } from 'react'
//redux
import { connect } from 'react-redux';
import { getInfo } from './redux/actions/actions';
import { Link } from 'react-router-dom'
import './App.css'

const Question1 = (props) => {
    return (
        <div >
            <div className='top-section '>
                <div className='offset-1 align-self-center title'> Hello! Here is my test.</div>
                <div className='offset-1 align-self-center title'>Select one of these buttons to go to the next page</div>
            </div>
            <img src={require('./assets/Path 1.png')}>
            </img>
            <div className="container" style={{marginTop:"5%"}}>
                <div className='row justify-content-between' style={{marginBottom:20}}>
                    <Link to="/question1" className='col-sm-4 col-12'> 
                        <button >
                            Question 1
                        </button>
                    </Link>

                    <Link to="/question2" className='col-sm-4 col-12'>
                        <button >
                            Question 2
                        </button>
                    </Link>

                    <Link to="/question3" className='col-sm-4 col-12'>
                        <button >
                            Question 3
                        </button>
                    </Link>
                </div>

                <div className='row justify-content-between'>
                    <Link to="/question4" className='col-sm-4 col-12'>
                        <button >
                            Question 4
                        </button>
                    </Link>

                    <Link to="/question5" className='col-sm-4 col-12'>
                        <button >
                            Question 5
                        </button>
                    </Link>


                    <Link to="/question6" className='col-sm-4 col-12'>
                        <button >
                            Question 6
                        </button>
                    </Link>


                </div>
            </div>
        </div>
    )
}


//map to state redux
const mapStateToProps = (state) => {
    return {
        test: state.root.info.data
    }
}

// const mapDispatchToProps = dispatch => ({
//     getInfo: (e) => dispatch(getInfo(e)),
// });

//export
export default connect(mapStateToProps, { getInfo })(Question1)
