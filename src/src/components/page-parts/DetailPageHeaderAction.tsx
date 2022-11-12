import PropTypes from 'prop-types'
import { Button } from '../ui-parts/Button'
import { useNavigate} from 'react-router-dom'

const DetailPageHeaderAction = (props: any) => {
    const navigate = useNavigate();
    return (
        <div>
            <Button icon="arrow-left" color="danger" onClick={() => navigate(props.BackTo)}>Back</Button>
        </div>
    )
}

DetailPageHeaderAction.propTypes = { onBackNavigation: PropTypes.any }

export default DetailPageHeaderAction