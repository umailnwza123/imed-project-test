import React, { useEffect, useState } from 'react'
import '../styles/body.css'
import { useSelector } from 'react-redux'
import { BsFillAwardFill, BsFileEarmarkPerson } from 'react-icons/bs'
import NobelCard from './NobelCard'

export default function Detail({ nobelOrdered }) {

    const NobelReducer = useSelector(({ NobelPrizes }) => NobelPrizes)

    const [NobelShow, setNobelShow] = useState([])

    return (
        <div className="detail-container">
            <div className='detail-box-canvas' >
                {
                    NobelReducer.NobelPrizes === null ?
                        null
                        :
                        NobelReducer.selectedYear.length <= 0 ?
                            NobelReducer.NobelPrizes.length > 0 ?
                                NobelReducer.NobelPrizes.map((item, index) => {
                                    return (
                                        <div key={index} className="nobel-container" >
                                            <div className='item-header-year'>
                                                <h6 key={index}>
                                                    Year {item.year}
                                                </h6>
                                            </div>
                                            <NobelCard item={item} />
                                        </div>
                                    )
                                })
                                :
                                null
                            :
                            NobelReducer.selectedYear.map((item, index) => {
                                return (
                                    <div key={index} className="item-list-box">
                                        <div className='item-header-year'>
                                            <h6 key={index}>
                                                Year {item.year}
                                            </h6>
                                        </div>
                                        <NobelCard item={item.item} />
                                    </div>
                                )
                            })
                }

            </div>
        </div>
    )
}
