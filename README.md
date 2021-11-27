# Run the app
1. Install Node Modules
```
    npm install
```

2. Run the JSON server so the App can fetch data from the fake API.
> [!NOTE]
> Add the path where the json file is stored. [eg. data/db.json]
> The port number must be different than the default port of the react server 3000
```
    npx json-server --watch data/db.json --port 8000
```

3. Run the app
```
    npm start
```

