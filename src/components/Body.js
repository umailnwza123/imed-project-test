import React, { useEffect, useState } from 'react'
import * as Method from '../Method/fetchNobelPrice'
import Filter from './Filter'
import Detail from './Detail'

export default function Body() {

  const [nobelPrizeState, setNobel] = useState([])
  const [OrderedNobel, setOrderedNobel] = useState([])

  const fetchNobel = async () => {
    let response = await Method.fetchAllNobelPrice()
    if(response.status === 'success'){
      setNobel(response.Nobel)
    }
  }

  const CallbackNobel = (data) => {
    setOrderedNobel(data)
  }

  useEffect(() => {
    fetchNobel()
  }, [])

  return (
    <div className='body-main' >
      <Filter nobelPrizes={nobelPrizeState} callback={CallbackNobel} />

      <Detail nobelOrdered={OrderedNobel} />

    </div>
  )
}
