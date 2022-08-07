import React from 'react'

function List({data}) {
  return (
    <div className='list'>
        <div className="container">
            {
                data.map((e, i) => {
                        return <div className="data" key={i}>
                        <h3>{e.name}</h3>
                    </div> 
                })
            }
        </div>
    </div>
  )
}

export default List