# book-claudiajs-examples
Book examples from "Serverless Applications with Node.js"
<br>

Motivation to learn Claudia.js as building block to learning Jamstack.  This book was recommended by Jamstack e-book by Netlify founder.
<br>

I think AWS Cloud9 already has Node.js installed.  Try to do this without the setup instructions below from AWS.  

### Claudia.js documentation

Check Node.js and NPM versions.  Then install claudia.js.
```
node -v
npm --version
npm install claudia -g
claudia --version
```
* Node.js version 10.22.1
* NPM version 6.14.6
* Claudia.js version 5.12.0

### Setup AWS Cloud9 instance for Node (Amazon Linux).

```
sudo yum -y update
```

To install Node.js, begin by running this command to download Node Version Manager (nvm). (nvm is a simple Bash shell script that is useful for installing and managing Node.js versions. For more information, see Node Version Manager on the GitHub website.) 
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

To start using nvm, either close the terminal session and start it again, or source the ~/.bashrc file that contains the commands to load nvm. 
```
. ~/.bashrc
```

Run this command to install the latest version of Node.js.
```
nvm install node
```

### References:
1. https://docs.aws.amazon.com/cloud9/latest/user-guide/sample-nodejs.html
1. https://www.claudiajs.com/tutorials/installing.html
