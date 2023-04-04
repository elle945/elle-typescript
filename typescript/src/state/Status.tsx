import React from 'react'

type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

function Status(props: StatusProps) {
    let msg

    if (props.status === 'loading') {
        msg = 'Laddar...'
    } else if (props.status === 'success') {
        msg = 'Fetch success'
    } else if (props.status === 'error') {
        msg = 'Error in fetch'
    }
    return (
        <div>
            <h2>Status - {msg}</h2>
        </div>
    )
}

export default Status
