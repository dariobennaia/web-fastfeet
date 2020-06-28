import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Deliveries from '~/pages/Deliveries';
import DeliveriesForm from '~/pages/Deliveries/Form';

import Deliverymen from '~/pages/Deliverymen';
import DeliverymenForm from '~/pages/Deliverymen/Form';

import Recipients from '~/pages/Recipients';
import RecipientsForm from '~/pages/Recipients/Form';

import Problems from '~/pages/Problems';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route
        path="/deliveries/new"
        exact
        component={DeliveriesForm}
        isPrivate
      />
      <Route
        path="/deliveries/edit/:id"
        exact
        component={DeliveriesForm}
        isPrivate
      />

      <Route path="/deliverymen" exact component={Deliverymen} isPrivate />
      <Route
        path="/deliverymen/new"
        exact
        component={DeliverymenForm}
        isPrivate
      />
      <Route
        path="/deliverymen/edit/:id"
        exact
        component={DeliverymenForm}
        isPrivate
      />

      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route
        path="/recipients/new"
        exact
        component={RecipientsForm}
        isPrivate
      />
      <Route
        path="/recipients/edit/:id"
        exact
        component={RecipientsForm}
        isPrivate
      />

      <Route path="/problems" component={Problems} isPrivate />
    </Switch>
  );
}

export default Routes;
