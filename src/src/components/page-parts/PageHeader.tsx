export const PageHeader = ({ pageTitle, children }: { pageTitle?: string, children?: JSX.Element }) => {
    return (
        <div className="d-sm-flex align-items-center justify-content-between mb-3">
            <h2 className="h3 mb-0 text-gray-800">{pageTitle || "Page Title"}</h2>
            {children && children}
        </div>
    )
}
