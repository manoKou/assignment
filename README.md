## How to run

The node version for this project is **18.19.1**

Bootstrapped with [Vite](https://vite.dev/)

Our package.json file looks like this
```json
"devDependencies": {
    "vite": "^7.1.6"
},
"dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
}
```

Please use the specified node version, then run 
```bash
npm install
npm run dev
```

Visit the default landing page of vite: [http://localhost:5173/](http://localhost:5173/) to view the application.

# Setup Recommendations

> on windows, I recommend using [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)
> also recommend using [nvm](https://github.com/coreybutler/nvm-windows)


# My thought process 

Like react's documentation states, there are stages to building an app. 

* Start with making a simple mockup. For me, on paper.
* Mock the API data, to be able to build some UI, and break into components.
* Break the UI into components. In our case, UserEditor, UserList and and UserList item
* Then built a static version in React, with the mocked data 
* Add the state and data flow, remove the mocked data

# General Structure

* simple vanilla js fetches, no Axios
* ReactJs with "Higher Order Components" pattern
* no typescript
* App.jsx is the entry point
* mobile first, simple CSS with no pre-processor and no explicit jss
* you can see some client-side validations inside utils/validators.js, that reflect on comonents/UserEditor.jsx
* constants.js file is just a placeholder. We are using one contstant from there, but this file and project structure should be revamped

## what could be better

Had I had more time, and had this been a real life senario, either a Next.js app with internal routes or even a more complex SPA:

* The css should follow the mockups more closely; paddings and fonts vary and are not consistent, button color states and hovers are not done correctly, text fields lack outlines, colors on text ( especially on interaction ) are wrong, there exist some unwanted borders 
* snapshot test, Jester or Supertest, to catch any calls going wrong
* hiding the baseUrl of the consumed API inside a .env file, or on vercel's env vars 
* more common and complex API calls should be made partialy on server side, to cache large payloads
* there should be JWA tokens to authenticate API consumers ( although that would need modifying the API iteslf )
* would be nice to implement the "theme" logic on the stylesheets that libraries like MatterialUI have, to deal with scaling issues that in our case will inevitably come up. That was the idea of the constants.js file
* This gray color that is used for scrollbars and borders/horizontal lines, would not pass the accessibility tests
* Avatars are not working?
* There should be a documentation library installed, like react-docgen. For scaling
* Consider using Typescript early
* imports are not dynamic


Thanks a ton for checking this out!  :) I was a bit tight on time, and hadn't looked at react for a couple of years, so please let me know if anything does not make sense.
