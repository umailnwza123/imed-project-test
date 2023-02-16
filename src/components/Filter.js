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
        dispatch(Aciton.setAllNobelPrized(FinalNobel.reverse()))
        console.log(FinalNobel.reverse())
        setNobelPrizeState(FinalNobel.reverse())
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
                                
                                onClick={()=>{
                                    
                                    if(checkYear.length <= 0){
                                        checkYear.push(Object.keys(item)[0])
                                        selectingYear.push({year: parseInt(Object.keys(item)[0]), item: item})
                                    }else{
                                       if(checkYear.includes(Object.keys(item)[0])){
                                           if(checkYear.indexOf(Object.keys(item)[0]) > -1){
                                            checkYear.splice(checkYear.indexOf(Object.keys(item)[0]), 1)
                                            
                                            let year = Object.keys(item)[0]
                                            let index = selectingYear.findIndex((item) => {
                                               return item.year === year
                                            })
                                            selectingYear.splice(index, 1)
                                           }
                                           console.log('after remove ', checkYear)

                                       }else{
                                        selectingYear.push({year: parseInt(Object.keys(item)[0]), item: item})
                                        checkYear.push(Object.keys(item)[0])
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
