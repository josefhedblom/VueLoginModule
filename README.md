# Vue Login Module

## Simple login module created with Node.js and Vue.js

### Setup

1. Run npm install to install dependencies
2. Server default to port 5000 - Vue default to port 8080
3. Configer the .env file
	- DB
	- PORT
	- SECRET_TOKEN

### Database

- Mongodb localhost


### File Structure

```tree
.
├── config
│   └── db.js
├── controllers
│   └── users.js
├── helpers
│   └── handelErrors.js
├── index.js
├── model
│   └── User.js
├── package-lock.json
├── package.json
└── routes
    └── users.js
```