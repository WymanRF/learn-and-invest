import React from 'react'

const Card = (props) => {
    return ( 
        <div className='card'
             style={{
                 width: '60%',
                 margin: '10px', 
                 textAlign:'center',
                 flexShrink: '0',
                 scrollSnapAlign: 'start'}}>
            <h2>{props.ticker}</h2>
            <h5>{props.indexName}</h5>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center'
            }}><i className="material-icons" 
                  style={
                      props.changes > 0 ? {color:'green'}:{color:'red'}}
                >
                arrow_drop_up</i>
            <span>{props.changes}</span>
            </div>
        </div>
     )
}
 
export default Card