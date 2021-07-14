import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
const ruteing = () => {
    return (
        <>
            <Router>
                <div>
                    <ui>
                        <li>
                            <Link to="/my-app/src/conponets/Creative__works/CreativeRuter.jsx">All</Link>
                        </li>
                        <li>Web Design</li>
                        <li>Mobile Design</li>
                        <li>Seo</li>
                        <li>Graphic</li>
                    </ui>
                    <Switch>
                        <Route path="/my-app/src/conponets/Creative__works/CreativeRuter.jsx">
                            <All />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default ruteing
