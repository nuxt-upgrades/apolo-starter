# apolo-starter

## dev install

install from github into nuxt directory structure:

```
cd your-nuxt-project
gitclone https://github.com/nuxt-upgrades/apolo-starter.git apollo
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
  // Give apollo module options
  apollo: {
    clientConfigs: {
      // default: '~/apollo/network-interfaces/default.js',
      default: {
        httpEndpoint: 'http://localhost:4000',
      },
    }
  },
```

