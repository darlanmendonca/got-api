# got api

a simple api to list things from game of thrones.
Include pagination, and search.

### start

```sh
# to start api in localhost:4000
npm start
```

### /houses

```http
GET /houses

[
  "Lannister",
  "Stark",
  # ...
]
```

#### limit

Query param to limit items by request. The default value is `10`, but you can change using this param, e.g.

```http
GET /houses?limit=20
```


#### page

Query param to paginate items. The default value is `1`.

```http
GET /houses?page=2
```

### query

Query param to filter items.

```http
GET /houses?query=stk

[
  "Stark",
  "Karstark",
  # ...
]
```
