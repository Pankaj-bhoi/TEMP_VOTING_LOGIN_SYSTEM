import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;


      return(
        <div>
        <nav>
        <div className="nav-wrapper">
        <ul id="nav-mobile" className="right">
                <li style={{marginRight:'20px'}}>
                          <b>Hii, </b>{user.name.split(" ")[0]}</li>
                <li>
                <button
                    style={{marginRight:'10px',
                            height:'48px'}}
                    onClick={this.onLogoutClick}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Logout
                  </button>
                </li>
              </ul>
        </div>
        </nav>

        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <h1>Dashboard</h1>
        </div>
        </div>
      )
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
