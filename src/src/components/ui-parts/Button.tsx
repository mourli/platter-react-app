import React from 'react'

export const Button = (props: any) => {
    return (
        <button className={`d-none d-sm-inline-block btn btn-sm btn-${props.color} shadow-sm mr-2`} {...props}><i
            className={`fas fa-${props.icon} fa-sm text-white-50`}></i> {props.text || props.children}</button>
    )
}
