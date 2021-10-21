import React from 'react'
import {useHistory} from 'react-router-dom'
import './cssStyles/general/style404.css'

const PageNotFound = ({...props}) => {
    let home = props.home
    let history = useHistory()

    const goHome =()=>{
        history.push(`/${home}/`)
    }
    return (
        <div>
            <div id="notfound">
                <div className="notfound-bg">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>Page Not Found</h2>
                    <p>The page you are looking for might have been removed or does not exist.</p>
                    <button style={{cursor:"pointer"}} onClick={goHome}>Homepage</button>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound