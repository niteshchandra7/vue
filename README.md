# VUE

# methods
## Use with event binding or data binding
## Data Binding : Method is executed for every re-render cycle of the component
## Use for events or data that really needs to be re-evaluated all the time

# computed
## Use with data binding
## Computed properties are only re-evaluated if one of their "used value" changes
## Use for data that depends on other data

# watch
## Not used directly in template
## Allows you to run any code in reaction to some changed data 
## Ex. send http request etc..
## Use for any non-data update you want to make


# computed vs methods
## We should prefer computed vs method since it only runs when there is a change in dependency
## while method runs everytime an update is made. But we can't avoid method when there is event as an argument or 
## when we want the function to run eacah time when there is an update
## No parenthesis when calling computed functions
## Note: you still binds your events to methods not compued properties.
## Use computed properties for outputing something.

# watchers
## it is good for watching a single attribute if multiple attributes needs to be handled compute is preferred.

# ShortHands
## v-on: => @
## v-bind: => :



