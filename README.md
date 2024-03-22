# Aiimi Technical Assessment

This project was built as part of Aiimi technical assessment.

To simulate the endpoint, I used **json-server**. To install it you type

```
> npm install -g json-server
```

Then I copied the data I've been provided to a json file called **db.json**, having all the records inside a single key called 'persons':

```
{
  "persons": [
    {
      "id": "1",
      "FirstName": "David",
      "LastName": "Jones",
      "JobTitle": "Developer",
      "Phone": "07789 543768",
      "Email": "djones@test.com"
    }...
```

To spin the server, you need to type in the command prompt:

```
> json-server --watch db.json
```

From there all the endpoints in /api/persons will work.
