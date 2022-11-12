import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { DotLoaderOverlay } from 'react-spinner-overlay';

export const Pagination = forwardRef((props: any, ref: any) => {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(props.pageSize || 20);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);

    const currentPageChange = (event: any) => {
        setCurrentPage(event.selected);
        setLoading(true);
    };

    const pageSizeChange = (selectedPageSize: number) => {
        setCurrentPage(0);
        setPageSize(selectedPageSize);
        setLoading(true);
    }

    const fetchData = () => {
        //Check loading prop recall fetch data only when true (required)
        if (loading) {
            props.fetchData(pageOffset, pageSize).then((resp: any) => {
                setTotalItems(resp.total);
                setLoading(false);
            });
        }        
    }

    useImperativeHandle(ref, () => ({
        refetchData() {
            setCurrentPage(0);
            setLoading(true);
        }
    }));

    //Set loading prop change to recall fetch data
    useEffect(() => {        
        fetchData();
    }, [loading])

    const totalPages = Math.ceil(totalItems / pageSize);
    const pageOffset = currentPage * pageSize;
    const endOffset = pageOffset + pageSize;
    console.log(`Loading items from ${pageOffset} to ${endOffset} of total pages ${totalItems}`);

    return (
        <>
            <div className="row align-items-start pb-0">
                <div className="col-md-4">
                    <label className="pt-1">{totalItems ? `Showing ${pageOffset + 1} to ${endOffset} of ${totalItems} entries` : "No entry"}</label>
                </div>
                <div className="col-md-6 text-center">
                    <ReactPaginate
                        containerClassName="pagination pagination-sm"
                        previousLabel="< previous"
                        nextLabel="next >"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        activeClassName="active"
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={pageSize}
                        pageCount={totalPages}
                        onPageChange={currentPageChange}
                    //forcePage={props.currentPage||0}
                    />
                </div>
                <div className="col-md-2">
                    <div className="form-group row">
                        <label className="col pt-1">Show</label>
                        <select onChange={(event) => pageSizeChange(parseInt(event.target.value))} value={pageSize} className="col form-control form-control-sm tex-right" style={{ width: "100" }}>
                            <option value={10} label="10"></option>
                            <option value={20} label="20"></option>
                            <option value={30} label="30"></option>
                            <option value={50} label="50"></option>
                        </select>
                        <label className="col pt-1">Items</label>
                    </div>
                </div>
            </div>

            <DotLoaderOverlay loading={loading} color="#4e73df" overlayColor="rgb(255 255 255 / 30%" />
        </>
    );
})
