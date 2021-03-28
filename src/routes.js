import { CircularProgress } from '@material-ui/core'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = () => (
    <BrowserRouter>
        <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"><CircularProgress /></div>}>
            <Switch>
                <Route path="/" exact component={() => (<h1>Home</h1>)} />
            </Switch>
        </Suspense>
    </BrowserRouter>
)

export default Routes