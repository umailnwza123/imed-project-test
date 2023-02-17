import React, { useEffect, useState } from 'react'
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css'
import { useDispatch, useSelector } from 'react-redux';


export default function Header() {
    const NobelPrizeReducer = useSelector(({ NobelPrizes }) => NobelPrizes)
    const [yearState, setYearState] = useState([])
    useEffect(() => {
        if (NobelPrizeReducer.selectedYear.length > 0) {
            let year = []
            NobelPrizeReducer.selectedYear.forEach((element) => {
                year.push(element.year)
            })
            setYearState(year)
            console.log('year', year)
        } else {
            setYearState([])
        }
    }, [NobelPrizeReducer])
    return (
        <div className="header-main">
            <h1>
                Nobel Prize
            </h1>
            {
                yearState.length > 0 ?
                    yearState.length === 1 ?
                        <label>
                            Year {yearState[0]}
                        </label>
                        :
                        yearState.length > 1 ?
                            <label>
                                {`Years (${yearState[0]} -${yearState[yearState.length-1]})`}
                            </label>
                            :
                            null
                    :
                    console.log('Null')
            }

        </div>

    )
}
