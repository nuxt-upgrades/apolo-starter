# apolo-starter

## dev install

install from github into nuxt directory structure:

```js
cd your-nuxt-project
gitclone https://github.com/nuxt-upgrades/apolo-starter.git apollo
npm i @nuxtjs/apollo
```

## prod install

use npm package

## configuration

```js
/*
** Nuxt.js modules
*/
modules: [
	'@nuxtjs/apollo',
],
/*
** Apollo module options
*/
apollo: {
	clientConfigs: {
		default: {
			httpEndpoint: 'http://localhost:4000',
		},
	}
},
```

## example

to render posts query as {{posts}}, 
add for example to pages/index.vue script:
```js
import Posts from '~/apollo/gql/posts.gql';
export default {
	apollo: {
    	posts: {
			variables:{
				limit:10,
				posttype:'post'
			},
			query: Posts
		}
	}
}
```

to render posts query filter by terms as {{terms}}, 
add for example to pages/index.vue script:
```
import Posts from '~/apollo/gql/postsByTaxWithMetas.gql';
export default {
	apollo: {
    	terms: {
			variables:{
				/* example exist terms id as commas list */
				taxonomies: '33'
			},
			query: Posts
		}
	}
}
```