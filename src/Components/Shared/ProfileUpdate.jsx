import React, { useContext } from 'react';

const ProfileUpdate = () => {
    const { handelUpdateUser } = useContext(AuthContext)



    handelUpdateUser(email, password)
    .then(user2 => {
        Toast.fire({
            icon: "success",
            title: `WelCome ${user2.user.displayName} `
        });
        console.log(user2)

        

    })
    return (
        <div>
            
        </div>
    );
};

export default ProfileUpdate;