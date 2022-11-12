import React from 'react'

export const Card = ({ children, title }: { children: JSX.Element, title?: string }) => {
    return (
        <div className="card shadow mb-4">
            {title && <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
            </div>
            }
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}
