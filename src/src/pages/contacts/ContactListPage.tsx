import { useCallback, useRef, useState } from 'react'
import { ListPageHeaderAction } from '../../components/page-parts/ListPageHeaderAction';
import { PageHeader } from '../../components/page-parts/PageHeader'
import { Pagination } from '../../components/page-parts/Pagination';

export const ContactListPage = () => {
  const [pageData, setPageData] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");

  const paginationRef: any = useRef();

  //fetch From API
  const handleFetchData = useCallback(async (itemOffset: number = 1, pageSize: number = 20) => {
    let query = "";
    if (searchText) {
      query = `https://dummyjson.com/products/search?q=${searchText}`;
    } else {
      query = `https://dummyjson.com/products?skip=${itemOffset}&limit=${pageSize}`;
    }

    const resp: any = await fetch(query).then(response => response.json())
    setPageData(resp.products);
    return { total: resp.total };
  }, [searchText]);

  return (
    <>
      <PageHeader pageTitle={"Contacts"}>
        <ListPageHeaderAction searchText={searchText} onSearchTextChange={(text: string) => setSearchText(text)} onSearch={() => paginationRef.current.refetchData()} />
      </PageHeader>
      <div className="card pb-0">
        <div className="cardBody">
          {pageData &&
            <div className="table-responsive">
              <table className="table table-sm table-hover table-scroll" width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <th scope="col"><span className="px-3">Id</span></th>
                    <th scope="col">Product</th>
                  </tr >
                </thead>
                <tbody>
                  {pageData.map((item: any) =>
                    <tr key={item?.id}>
                      <td width="80"><span className="px-3">{item.id}</span></td>
                      <td width="auto">{item.title}</td>
                    </tr>
                  )}
                </tbody>
              </table>

            </div>
          }
        </div>
        <div className="card-footer pb-0">
          <Pagination fetchData={handleFetchData} ref={paginationRef} />
        </div>
      </div>
    </>
  )
}
