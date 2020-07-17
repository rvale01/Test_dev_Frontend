import React, { useState, useEffect } from 'react'
//redux
import { connect } from 'react-redux';
import { getInfo, getAllCountries } from './redux/actions/actions';
import { Link } from 'react-router-dom'

const Question2 = (props) => {
    const [pageMax, setMax] = useState(7)
    const [pageMin, setMin] = useState(0)
    const [array, setArray] = useState([])
    const [updated, setUpdate] = useState(false)
    const [countries, setCountries] = useState(props.countries)

    useEffect(() => {
        props.getAllCountries()
        setUpdate(true)
        setCountries(props.countries);
    });

    const handleChange = (e) => {
        let temp = array
        temp[e.target.name] = e.target.value
        setArray(temp)
    }
    return (
        <div className="top-section" style={{ height: '52em' }}>
            <form className='offset-1'>
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
                <div className='title' style={{ marginBottom: '1.5em' }}>The array is formed of 3 names. Write the 3 names here</div>
                <div>
                    <label style={{ color: 'white', marginRight: 20 }}>Text 1</label>
                    <input type="text" name={0} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label style={{ color: 'white', marginRight: 20 }}>Text 2</label>
                    <input type="text" name={1} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label style={{ color: 'white', marginRight: 20 }}>Text 3</label>
                    <input type="text" name={2} onChange={(e) => handleChange(e)} />
                </div>
            </form>
            <div className='offset-1'>
                <div> Result:</div>
                {array && countries
                    ?
                    null
                    // function filterRating(countries) {
                    //     for (var x = 0; x < array.length; x++) {
                    //         return countries.name == filters.rating;
                    //     }
                    // }


                    //     .map((val, index) => {
                    //         console.log(val, 'test')
                    //         return <div>{val.name}</div>
                    // return (index >= pageMin && index <= pageMax) ?
                    //     <tr>
                    //         <th scope="row">{val.nativeName}</th>
                    //         <td>{val.capital}</td>
                    //         <td>{val.demonym}</td>
                    //         <td>{val.region}</td>
                    //         <td>{val.subregion}</td>
                    //         <td>{val.borders.join(",")}</td>
                    //     </tr>
                    //     : null
                    // })

                    : null
                }
            </div>

            <button className='btn btn-primary'
                onClick={() =>
                    pageMin > 0 ?
                        (setMin(pageMin - 8),
                            setMax(pageMax - 8))
                        : null
                }> Before</button>
            <button className='btn btn-primary'
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
