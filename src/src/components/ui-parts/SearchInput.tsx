import React from 'react'

export const SearchInput = (props: any) => {

    return (
        <div className="d-none d-sm-inline-block mr-2">            
            <input type="search"  className="form-control form-control-sm form-control-user" style={{ borderRadius: "5rem", width: "260px" }} placeholder="Search..." {...props} />
        </div>
    )
}
