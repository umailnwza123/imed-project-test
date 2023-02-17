import React, { useEffect, useState } from 'react'
import '../styles/body.css'
import * as Aciton from '../action/NobelPrizes.js'
import { useDispatch } from 'react-redux'

export default function Filter({ nobelPrizes, callback }) {

    const [nobelPrizesState, setNobelPrizeState] = useState([])
    const [selectedYear, setSelectedYear] = useState([])
    let dispatch = useDispatch()
    let selectingYear = []
    let checkYear = []


    const sortYear = (dataArray) => {
        return dataArray.sort(
            (y1, y2) => (y1.year < y2.year) ? 1 : (y1.year > y2.year) ? -1 : 0);
    }

    const groupByYear = (array, key) => {
        return array.reduce((result, curr) => {
            if (!result[curr[key]] === true) { // undefined as true
                result[curr[key]] = [];
            }
            result[curr[key]].push(curr);
            return result;
        }, {});
    };

    useEffect(() => {
        const groupNobelPrizes = groupByYear(nobelPrizes, 'awardYear');
        let sumArray = []
        let FinalNobel = []
        Object.keys(groupNobelPrizes).forEach((item) => {
            let sum = 0
            groupNobelPrizes[item].reduce((acc, curr) => {
                if (acc !== undefined) {
                    sum = acc.prizeAmount + curr.prizeAmount
                } else {
                    sum += curr.prizeAmount
                }
            })
            sumArray.push(sum)
        })
        Object.keys(groupNobelPrizes).forEach((item, index) => {
            FinalNobel.push({ year: item, [item]: groupNobelPrizes[item], prizeAmount: sumArray[index] })
        })
        dispatch(Aciton.setAllNobelPrized(sortYear(FinalNobel)))
        setNobelPrizeState(sortYear(FinalNobel))
    }, [nobelPrizes])



    return (
        <div className='filter-container'>
            <div className='filter-year-container'>
                <h3>
                    Year Filter
                </h3>
            </div>
            <div className='filter' >
                {nobelPrizesState.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='filter-item'>
                                <span>{Object.keys(item)[0]}<label style={{ fontSize: .65 + 'rem', marginLeft: 5 + 'px' }}>
                                    ({item.prizeAmount})
                                </label></span>
                                <input type="checkbox"

                                    onClick={() => {
                                        if(selectingYear.length <= 0){
                                            selectingYear.push({year: parseInt(Object.keys(item)[0]), item: item})
                                        }else{
                                            if(selectingYear.filter((itemFilter) => itemFilter.year === parseInt(Object.keys(item)[0])).length > 0){
                                                let indexToremove = selectingYear.findIndex((itemIndex) => itemIndex.year === parseInt(Object.keys(item)[0]))
                                                if(indexToremove > -1){
                                                    selectingYear.splice(indexToremove, 1)
                                                    console.log(selectingYear)
                                                }
                                            }else{
                                                selectingYear.push({year: parseInt(Object.keys(item)[0]), item: item})
                                            }
                                           
                                        }
                                        dispatch(Aciton.selectedYearAction(selectingYear))
                                    }} />

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
