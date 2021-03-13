import React from 'react'
import { Router, Redirect, hashHistory, Route } from 'react-router'
import BillingCycle from './billingCycle/billingCycle'
import Dashboard from './dashboard/Dashboard'


export default function routes(props) {
  return (
    <Router history={hashHistory} >
      <Route path='/' component={Dashboard} />
      <Route path='/billingCycles' component={BillingCycle} />
      <Redirect from='*' to='/' />
    </Router>
  )
}
