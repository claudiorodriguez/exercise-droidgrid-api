# exercise-droidgrid-api

[![Build Status][travis-image]][travis-url]

Simple REST API for the droidgrid module. Make sure to see (https://github.com/claudiorodriguez/exercise-droidgrid-core) first. This is just an exercise - don't use any of this anywhere near a production environment.

## Installation

`git clone` this repo into a folder, then `npm install` and `npm start` when done.

Make a POST request to `/grid` with a `text` field in the body, e.g.

```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

Note the use of spaces and newlines as separators.

## Testing

To run the tests:

```bash
$ npm test
```

## Contributing

This is an exercise project. You are welcome to fork it but I am unlikely to maintain it.

## License

MIT - see [LICENSE][license-url]

[travis-image]: https://travis-ci.org/claudiorodriguez/exercise-droidgrid-api.svg?branch=master
[travis-url]: https://travis-ci.org/claudiorodriguez/exercise-droidgrid-api
[license-url]: https://github.com/claudiorodriguez/exercise-droidgrid-api/blob/master/LICENSE
