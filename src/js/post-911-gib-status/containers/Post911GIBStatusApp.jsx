import React from 'react';
import { connect } from 'react-redux';

import RequiredLoginView from '../../common/components/RequiredLoginView';

import Main from './Main';

// This needs to be a React component for RequiredLoginView to pass down
// the isDataAvailable prop, which is only passed on failure.
function AppContent({ children, isDataAvailable }) {
  const unregistered = isDataAvailable === false;
  let view;

  if (unregistered) {
    view = (
      <h4>
        To view your Post-9/11 GI Bill status, you need to verify your identity (or whatever).
      </h4>
    );
  } else {
    view = children;
  }
  return (
    <div>
      {view}
    </div>
  );
}

class Post911GIBStatusApp extends React.Component {

  render() {
    // TODO: change the service name below from "user-profile" to
    // something like "post-911-gib-status" once its defined in vets-api
    return (
      <RequiredLoginView
          authRequired={3}
          serviceRequired={"user-profile"}
          userProfile={this.props.profile}
          loginUrl={this.props.loginUrl}
          verifyUrl={this.props.verifyUrl}>
        <AppContent>
          <div className="row">
            <div className="usa-width-two-thirds medium-8 columns">
              <Main/>
              {this.props.children}
            </div>
          </div>
        </AppContent>
      </RequiredLoginView>
    );
  }
}

function mapStateToProps(state) {
  const userState = state.user;
  return {
    profile: userState.profile,
    loginUrl: userState.login.loginUrl,
    verifyUrl: userState.login.verifyUrl
  };
}

export default connect(mapStateToProps)(Post911GIBStatusApp);
