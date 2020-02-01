import { connect } from 'react-redux';
import { getSummary } from '../../../redux/productsRedux';
import Summary from './Summary';

const mapStateToProps = state => ({
    summary: getSummary(state),
});

export default connect(mapStateToProps)(Summary);
