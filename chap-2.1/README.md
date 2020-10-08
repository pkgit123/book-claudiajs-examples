# Listing 2.1
The GET /pizzas handler of your Pizza API
<br>


First, install Claudia as a development dependency in your project. The -D flag will save the reference to Claudia in package.json, so the all the other collaborators get the same version when they install the package.


```
npm install claudia -D
```

Next, in your project `package.json`, find the `scripts` section (or create it if it does not exist), and just add a few key-value pairs to it. The key is the name of the script (for example `deploy`). The value is the command you want to run, with a slight twist. You can use any locally installed NPM command as if it were in the system path. For example, the following script will create a new Lambda and mark it as the `dev` version.
```
{ 
  ....
  "scripts": {
     "deploy": "claudia create --version dev --region us-east-1 --api-module api"
  }
}
```

Anyone can now execute the correct Claudia command just by using:

```
npm run deploy
```


Youcan add more scripts easily. For example, add a step that promotes the latest deployed copy to the production version:
```
{ 
  ....
  "scripts": {
     "deploy": "claudia create --version dev --region us-east-1 --api-module api",
     "release": "claudia set-version --version production"
  }
}
```

Now the rest of the team does not need to remember exactly which version is used for what, they can just run the release script to deploy to production.
```
npm run release
```

Automating scripts in this way also allows you to set up Claudia as part of your deployment pipeline and automatically use the right configuration easily.

### Creating a menu system

The ntl module is a nice way to create a console menu system, so people don’t even need to look up the available scripts in package.json. Install it as a development dependency:

```
npm install ntl -D
```

Then, just add a script called start that calls ntl to your project package.json:
```
{ 
  ....
  "scripts": {
     "deploy": "claudia create --version dev --region us-east-1 --api-module api",
     "release": "claudia set-version --version production",
     "start": "ntl"
  }
}
```

Now, the only thing people need to remember is to run:

```
npm start
```

NPM will present a nice menu for the available deployment options.


### Other commands:
```
npm init

claudia create \
    --region us-west-2
    --api-module api
```


### References:
1. https://claudiajs.com/tutorials/package-json-scripts.html