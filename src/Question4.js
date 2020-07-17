import React, { useState, useEffect } from 'react'
//redux
import { connect } from 'react-redux';
import { getResult } from './redux/actions/actions';
import Slot from 'react-slot-machine'
import { Link } from 'react-router-dom'
import './App.css'
import Alert from 'react-bootstrap/Alert'

class Question4 extends React.Component {
    constructor() {
        super();
        this.state = {
            target: 1,
            times: 1,
            duration: 3000,
            turn: true,
            reel1: [
                { name: "cherry" },
                { name: "lemon" },
                { name: "apple" },
                { name: "lemon" },
                { name: "banana" },
                { name: "banana" },
                { name: "lemon" },
                { name: "lemon" },
            ],
            reel2: [
                { name: "lemon" },
                { name: "apple" },
                { name: "lemon" },
                { name: "lemon" },
                { name: "cherry" },
                { name: "apple" },
                { name: "banana" },
                { name: "lemon" },
            ],
            reel3: [
                { name: "lemon" },
                { name: "apple" },
                { name: "lemon" },
                { name: "apple" },
                { name: "cherry" },
                { name: "lemon" },
                { name: "banana" },
                { name: "lemon" },
            ],
            results: 20
        };
    }

    // componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.props.result !== prevProps.result) {
    //       this.setState({
    //           results:this.props.result
    //       })
    //     }
    //   }
    handleClick = (e) => {
        e.preventDefault()
        let data = []
        if (this.state.results > 0) {
            this.setState({
                target1: Math.floor(Math.random() * (this.state.reel1.length)),
                target2: Math.floor(Math.random() * (this.state.reel2.length)),
                target3: Math.floor(Math.random() * (this.state.reel3.length)),
                results: this.state.results - 1
            }, function () {
                let data = [
                    this.state.reel1[this.state.target1],
                    this.state.reel2[this.state.target2],
                    this.state.reel3[this.state.target3]
                ]
                this.props.getResult(data)
            })
        } else {
            return (
                <Alert >
                    Ops! You don't have enought coins!
                </Alert>
            )
        }

    }

    render() {
        return (
            <div className='top-section' style={{ height: '52em' }}>
                <style jsx>
                    {`
            .slot {
              font-size: 30;
              height: 50px;
            }
            .slot-item {
              height: 100%;
              width: 100%;
            }
            label {
              display: block;
              margin: 1em 0;
            }
            .box {
                background-color:white;
                width:100px;
                text-align:center;
            }
          `}
                </style>
                <div style={{ marginLeft: 180, marginRight: 90, marginBottom:30 }}>Coins: {this.state.results}</div>
                <Link to="/question5" style={{ marginLeft: 180, marginRight: 90 }}>
                    <button className='button'>
                        Next question
                    </button>
                </Link>
                <Link to="/" className='offset-1' style={{ marginRight: 70 }}>
                    <button >
                        Home
                </button>
                </Link>
                <button className='offset-1'
                    onClick={(e) =>
                        this.handleClick(e)
                    }
                >
                    set random
                </button>

                <div className='row justify-content-center' style={{ marginTop: 100 }}>
                    <Slot
                        className="slot"
                        duration={4000}
                        target={this.state.target1}
                        times={7}
                        onEnd={() => this.setState({ results: this.props.result + this.state.results })}
                    >
                        {this.state.reel1.map(({ name }) => (
                            <div className='box'>
                                {name.split('\n').map(v => <div style={{ fontSize: 30 }}>{v}</div>)}
                            </div>
                        ))}
                    </Slot>

                    <Slot
                        className="slot"
                        duration={4000}
                        target={this.state.target2}
                        times={7}
                    >
                        {this.state.reel2.map(({ name }) => (
                            <div className='box'>
                                {name.split('\n').map(v => <div style={{ fontSize: 30 }}>{v}</div>)}
                            </div>
                        ))}
                    </Slot>

                    <Slot
                        className="slot"
                        duration={4000}
                        target={this.state.target3}
                        times={7}
                    >
                        {this.state.reel3.map(({ name }) => (
                            <div className='box'>
                                {name.split('\n').map(v => <div style={{ fontSize: 30 }}>{v}</div>)}
                            </div>
                        ))}
                    </Slot>
                </div>
            </div >
        )
    }
}


//map to state redux
const mapStateToProps = (state) => {
    return {
        result: state.root.result
    }
}

// const mapDispatchToProps = dispatch => ({
//     getInfo: (e) => dispatch(getInfo(e)),
// });

//export
export default connect(mapStateToProps, { getResult })(Question4)
