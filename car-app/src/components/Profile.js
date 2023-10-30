import React from 'react'

const loggedIn = false

function Profile() {
  if (loggedIn){
    return(
        <div>
            <h2>Your profile</h2>
        </div>
    )
  }
}

export default Profile