import React from 'react'

export const ButtonLoader = ({ loading }: { loading: Boolean }) => {
    return (
        <>
            {loading && <div className="spinner-border text-light mx-2" style={{width:"16px", height:"16px"}} role="status"></div>}
        </>
    )
}
