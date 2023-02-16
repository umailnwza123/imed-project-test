import React, { useEffect, useState } from 'react'
import '../styles/body.css'
import { useSelector } from 'react-redux'

export default function Detail({ nobelOrdered }) {

    const NobelReducer = useSelector(({ NobelPrizes }) => NobelPrizes)

    const [NobelShow, setNobelShow] = useState([])



    useEffect(() => {
        console.log(NobelReducer)
    }, [NobelReducer])
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
                                        <div className="item-list-box" >
                                            <h6 key={index}>
                                                Year {item.year}
                                            </h6>
                                            <div  >
                                                {
                                                    item[item.year].map((itemList) => {
                                                        return (
                                                            <div>
                                                                <p style={{backgroundColor: 'yellow'}}>
                                                                    {itemList.categoryFullName.en}
                                                                </p>
                                                                {
                                                                    itemList.laureates.map((itemperson) => {
                                                                        return(
                                                                            <div>
                                                                                <p>
                                                                                  {itemperson.fullName === undefined ? 'No name' : itemperson.fullName.en}
                                                                                </p>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                null
                            :
                            NobelReducer.selectedYear.map((item, index) => {
                                return (
                                    <h6 key={index}>
                                        Year {item.year}
                                    </h6>
                                )
                            })
                }

            </div>
        </div>
    )
}
