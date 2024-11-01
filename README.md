### How to run tests
```console
$ newman run ./collection.json --folder Login Tests
```

#### Run data-driven tests
```console
$ node 
newman run ./api_postman_collection.json --folder "Data-Driven User Creation" 
```

#### Run data-driven tests
```console
$ newman run ./api_postman_collection.json --folder "Data-Driven User Creation" 
```

```console
$ newman run ./collection.json -n 65 --folder "Error Handling" 
``` 

#### Run rate limiting tests
```console
$ newman run ./api_postman_collection.json -n 65 --folder "Error Handling" --environment 
``` 