import React from 'react'
import { Switch } from 'react-router-dom'
import { FooterLayout, HeaderFooterLayout } from './layouts'
import { MovieDetail, MovieLists } from './screens'
import { RouteWithLayout } from './shared'

const Routes = () => {
    return (
        <Switch>
            <RouteWithLayout
                exact
                path={'/'}
                layout={HeaderFooterLayout}
                component={MovieLists}
            />
            <RouteWithLayout
                path={'/movies/:id'}
                layout={HeaderFooterLayout}
                component={MovieDetail}
            />
        </Switch>
    )
}

const RouteController = () => {
    return (
        <Routes />
    )
}

export default RouteController;
