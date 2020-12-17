import React from 'react';
import Helmet from 'react-helmet';

function App(){
    return (
        <div>
            <Helmet>
                <title>MathsCalc</title>
                <link rel="shortcut icon" href="../images/favicon.png" type="image/x-icon" />
            </Helmet>
            <h1>Mathscalc</h1>
            <img src="../images/favicon.png" alt=""/>
        </div>
    )
}

export default App