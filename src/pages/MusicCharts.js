import React, {useParams}from 'react'


const MusicCharts =()=> {

    let {id} = useParams();
  return (
    <div>MusicCharts {id} </div>
  )
}

export default MusicCharts