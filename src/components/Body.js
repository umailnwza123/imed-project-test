import React, {useEffect} from 'react'
import * as Method from '../Method/fetchNobelPrice'

export default function Body() {

  const fetchNobel = async () => {
    let response = await Method.fetchAllNobelPrice()
  }

  useEffect(() => {
    fetchNobel()
  },[])

  return (
    <div className='body-main' >
        {/* <Filter />

        <Detial /> */}

    </div>
  )
}
