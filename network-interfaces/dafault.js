/*
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpEndpoint = 'http://localhost:4000';

export default (ctx) => {
  // compose your Links here for the current client
  const appLink = new HttpLink({ uri: httpEndpoint })
  // here you can place your middleware. ctx has the context forwarded from Nuxt
  // ...
  // return the an object with additional apollo-client options
  return {
    uri: httpEndpoint,
    cache: new InMemoryCache(),
    dataIdFromObject: o => o.id
  }
}
*/
export default (ctx) => {
  return {
    httpEndpoint: 'http://localhost:4000'
  }
}
