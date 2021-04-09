import { CircularProgress } from '@material-ui/core'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Auth from './view/auth'

const Routes = () => (
    <BrowserRouter>
        <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"><CircularProgress /></div>}>
            <Switch>
                <Route path="/vehicles" exact component={() => (<h1>Veículos </h1>)} />
                <Route path="/login" exact component={Auth} />
                <Route path="/" exact component={Auth} />
            </Switch>
        </Suspense>
    </BrowserRouter>
)

export default Routes