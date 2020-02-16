import { connect } from 'react-redux';
import { getSummary, isError, isLoading } from '../../../redux/productsRedux';
import Summary from './Summary';

const mapStateToProps = state => ({
    summary: getSummary(state),
    isLoading: isLoading(state),
    isError: isError(state)
});

export default connect(mapStateToProps)(Summary);
