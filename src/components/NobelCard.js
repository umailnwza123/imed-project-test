import React, {useEffect} from 'react'
import '../styles/body.css'
import { BsFillAwardFill, BsFileEarmarkPerson } from 'react-icons/bs'

export default function NobelCard({ item }) {
    return (
        <div className='nobel-card-container' >
            {
                item[item.year].map((itemList, index) => {
                    return (
                        <div key={index} className='nobel-card' >
                            <div className='nobel-card-header'>
                                <BsFillAwardFill />
                                <span>
                                    {itemList.categoryFullName.en}
                                </span>
                            </div>
                            <div className='nobel-card-body '>
                                {
                                    itemList.laureates.map((itemperson, index) => {
                                        return (
                                            <div key={index} className='pernal-nobel-card'>
                                                <div className='person-name'>
                                                    <BsFileEarmarkPerson />
                                                    <label>
                                                        {itemperson.knownName === undefined ? 'No name' : itemperson.knownName.en}
                                                    </label>
                                                </div>
                                                <div className='person-motivation'>
                                                    <i>
                                                        {`"${itemperson.motivation.en}."`}
                                                    </i>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
