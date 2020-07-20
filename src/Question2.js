import React, { useState, useEffect } from 'react'
//redux
import { connect } from 'react-redux';
import { getInfo, getAllCountries } from './redux/actions/actions';
import { Link } from 'react-router-dom'
import { isEmptyArray } from 'formik';
import Alert from 'react-bootstrap/Alert'

const Question2 = (props) => {
    const [res, updateRes] = useState("")
    const [pageMax, setMax] = useState(7)
    const [pageMin, setMin] = useState(0)
    const [filterResult, setFilterResult] = useState([])
    const [array, setArray] = useState([])

    const [updated, setUpdate] = useState(false)
    const [countries, setCountries] = useState(props.countries)
    const [PopUp, setPopUp] = useState(false)

    useEffect(() => {
        props.getAllCountries()
        setCountries(props.countries);
        setUpdate(true)
    }, [updated]);


    const handleFilter = (e) => {
        e.preventDefault()
        if (array[0] && array[1] && array[2]) {
            setPopUp(false)
            countries
                .filter((country) => {
                    return country.name.toUpperCase().includes(array[0].toUpperCase())
                })
                .forEach((country) => {
                    return (filterResult.some((value) => country.name === value.name)) ? null :
                        setFilterResult((value) => value.concat(country))
                })

            countries
                .filter((country) => {
                    return country.name.toUpperCase().includes(array[1].toUpperCase())
                })
                .forEach((country) => {
                    setFilterResult((value) => value.concat(country))
                })

            countries
                .filter((country) => {
                    return country.name.toUpperCase().includes(array[2].toUpperCase())
                })
                .forEach((country) => {
                    setFilterResult((value) => value.concat(country))
                })
        } else {
            return setPopUp(true)
        }

    }

    return (
        <div className="top-section" style={{ height: '60em' }}>
            <Alert show={PopUp} variant="info"  onClose={() => setPopUp(false)} dismissible style={{ marginBottom: 100 }}>

                <div>
                    <Alert.Heading>OPS!</Alert.Heading>
                    <div>You have to input all three names!</div>
                </div>

            </Alert>
            <Link to="/question3" className='offset-1' >
                <button >
                    Next question
                </button>
            </Link>
            <Link to="/" className='offset-1' >
                <button >
                    Home
                </button>
            </Link>
            <div className='title offset-1' style={{ marginBottom: '1.5em' }}>The array is formed of 3 names. Write the 3 names here:</div>
            <form className='offset-1 row'>
                <div>
                    <div>
                        <label style={{ color: 'white', marginRight: 20 }}>Text 1</label>
                        <input type="text" name={0} onChange={(e) => setArray([e.target.value, array[1], array[2]])} />
                    </div>
                    <div>
                        <label style={{ color: 'white', marginRight: 20 }}>Text 2</label>
                        <input type="text" name={1} onChange={(e) => setArray([array[0], e.target.value, array[2]])} />
                    </div>
                    <div>
                        <label style={{ color: 'white', marginRight: 20 }}>Text 3</label>
                        <input type="text" name={2} onChange={(e) => setArray([array[0], array[1], e.target.value])} />
                    </div>
                </div>
                <button onClick={(e) => handleFilter(e)} className='offset-1 align-self-center' >Filter</button>
            </form>
            <div className='offset-1'>
                <div > Result:</div>
                <table className="table table-striped">
                    <thead >
                        <tr>
                            <th scope="col">Native Name</th>
                            <th scope="col">Capital</th>
                            <th scope="col">Demonym</th>
                            <th scope="col">Region</th>
                            <th scope="col">Sub region</th>
                            <th scope='col'>Borders</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filterResult ?
                            filterResult
                                .map((val, index) => {
                                    return (index >= pageMin && index <= pageMax) ?
                                        <tr>
                                            <th scope="row">{val.nativeName}</th>
                                            <td>{val.capital}</td>
                                            <td>{val.demonym}</td>
                                            <td>{val.region}</td>
                                            <td>{val.subregion}</td>
                                            <td>{val.borders.join(",")}</td>
                                        </tr>
                                        : null
                                })
                            : null}
                    </tbody>
                </table>
            </div>

            <button className='offset-1'
                onClick={() =>
                    pageMin > 0 ?
                        (setMin(pageMin - 8),
                            setMax(pageMax - 8))
                        : null
                }> Before</button>
            <button
                onClick={() =>
                    pageMax >= 7 && !(pageMax > 250) ?
                        (setMax(pageMax + 8),
                            setMin(pageMin + 8))
                        : null
                }> After</button>

        </div>
    )
}


//map to state redux
const mapStateToProps = (state) => {
    return {
        countries: state.root.country.data
    }
}

const mapDispatchToProps = dispatch => ({
    getAllCountries: () => dispatch(getAllCountries()),
});

//export
export default connect(mapStateToProps, mapDispatchToProps)(Question2)
