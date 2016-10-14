# Ember-test-helpers
This addon adds common test helpers to your Foodee Ember project.

## Installing
* `ember install git+ssh://git@github.com:Foodee/ember-test-helpers.git`

## Helpers
### `waitTime`
`waitTime(milliseconds)`

Will wait a specific amount of time in milliseconds before the test will continue with assertions.

### `waitUntil`
`waitUntil(selector)`

Will wait until a an element with the selector is found before continuing with assertions.

## Want to add some common test helpers?
* `git clone git@github.com:Foodee/ember-test-helpers.git` this repository
* `cd ember-test-helpers`
* `npm install`
* `bower install`
* Add helpers to `test-support/helpers/common`  

**BE SURE TO ADD TESTS!**  
A dummy app has been properly setup in /tests/dummy, this means you can start the app with `ember server` or `ember test` and it will allow you to run tests against the dummy app.  
![alt tag](https://i.imgflip.com/1cctot.jpg)

## Running Dummy App / Tests
### Dummy App 
* `ember serve`
* Visit your app at [http://localhost:4200/tests](http://localhost:4200/tests).  
**OR**  
* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building
* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
