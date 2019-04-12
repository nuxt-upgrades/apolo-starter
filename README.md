# apolo-starter

## dev install

install from github into nuxt directory structure:

```
cd your-nuxt-project
gitclone https://github.com/nuxt-upgrades/apolo-starter.git apollo
npm i @nuxtjs/apollo
```

## prod install

use npm package

## configuration

```	
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

to render {{posts}} query add to pages/index.vue script:
```
import PostsByTaxWithMetas from '~/apollo/gql/postsByTaxWithMetas.gql';
export default {
	apollo: {
		posts: {
			query: PostsByTaxWithMetas
    	}
	}
}
```