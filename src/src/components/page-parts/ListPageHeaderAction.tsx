import { Button } from '../ui-parts/Button';
import { SearchInput } from '../ui-parts/SearchInput';

export const ListPageHeaderAction = (props: any) => {

    return (
        <div>
            <SearchInput onChange={(event: any) => props.onSearchTextChange(event.target.value)} value={props.searchText} />
            <Button icon="search" color="primary" onClick={() => props.onSearch()}></Button>
            <Button icon="plus" color="info" onClick={() => props.onCreate}></Button>
            <Button icon="trash" color="danger" onClick={() => props.onDelete}></Button>
        </div>
    )
}