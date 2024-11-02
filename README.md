### How to run tests
```console
$ newman run ./collection.json --folder Login Tests
```

#### Run data-driven tests
```console
$ node newman-script.js "Data-Driven User Creation" "user_data.csv"
newman run ./api_postman_collection.json --folder "Data-Driven User Creation" 
```

#### Run conditional workflow tests
```console
$ node newman-script.js "Conditional Workflow" ""
$ newman run ./api_postman_collection.json --folder "Data-Driven User Creation" 
```

#### Run login test
```console
$ node newman-scripts.js "Login tests" "login_data.csv"
$ newman run ./collection.json -n 65 --folder "Error Handling" 
``` 

#### Run rate limiting tests
```console
$ newman run ./api_postman_collection.json -n 65 --folder "Error Handling" --environment 
``` 