import { SubscriptionClient } from 'onegraph-subscription-client';
import { auth } from './auth';

export const subscriptionClient = new SubscriptionClient(process.env.APP_ID, {
  oneGraphAuth: auth,
  reconnect: true,
  lazy: true,
});
