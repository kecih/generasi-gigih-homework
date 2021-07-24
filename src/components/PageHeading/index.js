import React, { useState } from "react";
import Button from "../Button"

const PageHeading = ({spotifyLogin}) => {
    const [isLogin, setIsLogin] = useState(false)

    const handleLoginClick = (e) => {
        setIsLogin(!isLogin)

        if (isLogin === true){
            spotifyLogin()
        }
    }

    return(
        <div>
            <h1>Create Playlist</h1>
            <Button  type='button' className='btn btn-success' onClick={(e) => handleLoginClick(e)}>
                {isLogin === true ? 'Login' : 'Logout'}
            </Button>
        </div>
    )
}
export default PageHeading;