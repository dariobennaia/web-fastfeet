import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import {
  Form as DeliveriesForm,
  List as DeliveriesList,
} from '~/pages/Deliveries';

import {
  Form as DeliverymenForm,
  List as DeliverymenList,
} from '~/pages/Deliverymen';

import {
  Form as RecipientsForm,
  List as RecipientsList,
} from '~/pages/Recipients';

import Problems from '~/pages/Problems';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliveries" exact component={DeliveriesList} isPrivate />
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

      <Route path="/deliverymen" exact component={DeliverymenList} isPrivate />
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

      <Route path="/recipients" exact component={RecipientsList} isPrivate />
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
