import React from 'react'
import  PropTypes  from 'prop-types'
import './message.css'

export const MessageHistory = ({msg}) => {
   if (!msg) return null;
    return (msg.map ((row,i)=>(
        <div key={i} className="messgeHistory">
            <div className="send font-weight-bold text-secondary">
                <div className="sender">
                    {row.messageBy}
                </div>
                <div className="sendDate">{row.date}</div>
            </div>

            <div className="message">
                {row.message}
            </div>
        </div>
    ))
       
    )
}

MessageHistory.propTypes={
    msg:PropTypes.array.isRequired
}