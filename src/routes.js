import { CircularProgress } from '@material-ui/core'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Auth = lazy(() => import('./view/auth'));
const Register = lazy(() => import('./view/register'))

const Routes = () => (
    <BrowserRouter>
        <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"><CircularProgress /></div>}>
            <Switch>
                <Route path="/vehicles" exact component={() => (<h1>Veículos </h1>)} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Auth} />
                <Route path="/" exact component={Auth} />
            </Switch>
        </Suspense>
    </BrowserRouter>
)

export default Routes