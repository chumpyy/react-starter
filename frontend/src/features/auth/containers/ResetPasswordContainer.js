import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spin from 'antd/lib/spin';

import { selectIsInProgress } from '../../../features/spinner/ducks';
import { apiCallIds } from '../api';
import { resetPasswordRequest } from '../ducks';
import { ResetPassword } from '../components';

const mapStateToProps = (state, props) => ({
  isLoading: selectIsInProgress(state, apiCallIds.RESET_PASSWORD),
  passwordResetToken: props.match.params.passwordResetToken,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      resetPasswordRequest,
    },
    dispatch
  ),
});

const ResetPasswordContainer = ({ actions, isLoading, passwordResetToken }) => (
  <Spin spinning={isLoading}>
    <ResetPassword
      onSubmit={actions.resetPasswordRequest}
      passwordResetToken={passwordResetToken}
    />
  </Spin>
);

ResetPasswordContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  passwordResetToken: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordContainer);
