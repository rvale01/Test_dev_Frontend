import React, { useState, useEffect } from 'react'
//redux
import { connect } from 'react-redux';
import { getAllCountries } from './redux/actions/actions';
import { Link } from 'react-router-dom'

const Question1 = (props) => {
    const [countries, setCountries] = useState(props.countries)
    const [pageMax, setMax] = useState(7)
    const [pageMin, setMin] = useState(0)
    const [filterName, setFilter] = useState("")
    useEffect(() => {
        props.getAllCountries()
        setCountries(props.countries);
    }, [props.countries]);



    return (
        <div className='top-section' style={{ height: '52em' }}>
            <div className="col-12" >
                <Link to="/question4" className='offset-1' style={{marginRight:20}}>
                    <button >
                        Next question
                    </button>
                </Link>
                <Link to="/" className='offset-1' >
                    <button >
                        Home
                </button>
                </Link>
                <form className='offset-1' style={{marginTop:20, marginBottom:20}}>
                    <div >
                        <label style={{ marginRight: 20 }}>Name</label>
                        <input type="text" name="name" onChange={(e) => setFilter(e.target.value)} />
                    </div>
                </form>

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
                        {countries ?
                            filterName !== '' ?
                                countries
                                    .filter((country) =>
                                        country.name.toUpperCase().includes(filterName.toUpperCase())
                                    )
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
                                :
                                countries
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

                <button
                    onClick={() =>
                        pageMin > 0 ?
                            (setMin(pageMin - 8),
                                setMax(pageMax - 8))
                            : null
                    }> Before</button>
                <button style={{ marginLeft: 30 }}
                    onClick={() =>
                        pageMax >= 7 && !(pageMax > 250) ?
                            (setMax(pageMax + 8),
                                setMin(pageMin + 8))
                            : null
                    }> After</button>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Question1)
