import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';


class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {

    //helper function to specific user

    // const user = this.props.users.find((user) => user.id === this.props.userId)
    //above was passed to mapStateToProps see below

    const { user } = this.props;


    //conditional render if no user 
    if (!user) {
      return null
    }

    //body to render
    return (
      <div className="header">{user.name}</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps, 
  { fetchUser})
  (UserHeader);
