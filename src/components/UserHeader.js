import React from 'react';
import { connect } from 'react-redux';



class UserHeader extends React.Component {


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

export default connect(mapStateToProps)(UserHeader)
