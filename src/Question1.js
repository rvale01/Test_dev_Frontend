import React, { useState, useEffect } from 'react'
//redux
import { connect } from 'react-redux';
import { getInfo } from './redux/actions/actions';
import { Link } from 'react-router-dom'

const Question1 = (props) => {
    const [text, setText] = useState("");
    const [info, setInfo] = useState(props.test)
    useEffect(() => {
        setInfo(props.test);
    }, [props.test]);
    const handleSubmit = (e) => {
        e.preventDefault()
        props.getInfo(text)
        setInfo(props.test)
        console.log(props.test)
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div className="top-section" style={{ height: '52em' }}>
            <form onSubmit={(e) => handleSubmit(e)} className='offset-1'>
                <div className='title' style={{ marginBottom: '1.5em' }}>Add a name of a country to search</div>
                <div>
                    <label style={{ color: 'white', marginRight: 20 }}>Name</label>
                    <input type="text" name="name" onChange={(e) => handleChange(e)} />
                </div>
            </form>
            <div className='offset-1'>
                <div style={{marginTop:20}}> Result of the search:</div>
                {info ?
                    info.map((val) => {
                        return <div >
                            <div >Native Name: {val.nativeName}</div>
                            <div>Capital: {val.capital}</div>
                            <div>Demonym: {val.demonym}</div>
                            <div>Region: {val.region}</div>
                            <div>subregion: {val.subregion}</div>
                            <div>borders:
                                {val.borders.join(",")}
                            </div>
                        </div>
                    })
                    : null}
            </div>

            <Link to="/question2" className='offset-1' >
                <button style={{marginTop:'20em'}}>
                    Next question
                </button>
            </Link>
            <Link to="/" className='offset-1' >
                <button style={{marginTop:'20em'}}>
                    Home
                </button>
            </Link>
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
