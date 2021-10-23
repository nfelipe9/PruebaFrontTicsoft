import React from 'react'
import './cssStyles/general/style401.css'

const DeniedPage = () => {
    return (
        <>
            <div id="notfound401">
                <div className="notfound401">
                    <div className="notfound-401">
                        <div></div>
                        <h1>401</h1>
                    </div>
                    <h2>Authorization Required</h2>
                    <p>The page you are looking for need some credentials to allows a successfully access.</p>
                    <a href="/">Login page</a>
                </div>
            </div>
        </>
    )
}

export default DeniedPage
