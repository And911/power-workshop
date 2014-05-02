
# no var, no semicolon
number = 42

# no braces
console.log 'this is the string'

# functions
square = (x) -> x * x

# array
myArray = [
  1
  2
  3
  4
  5
]

# objects
myObject =
  a: 'test'
  b: 'another'
  c: 'something'
  parent:
    key: 'value'
    anotherKey: 'anotherValue'


# existence
shouldI = false
console.log 'awesome' if shouldI?

really = true
if shouldI and really
  console.log 'some text'

#loops
anObject =
  first: 'first text'
  second: 'second text'
  third: 'third text'
  fourth: 'fourth text'

for key, value of anObject
  console.log "the #{key} item has the text '#{value}'"

#class
class Consultant
  constructor: (@name) ->

  present: (topic) ->
    console.log @name + " says a lot bla bla bla about #{topic}"

class SeniorConsultant extends Consultant
  present: ->
    super 'Business Development and Global Marketing Management'

mirco = new Consultant 'Mirco'
georg = new SeniorConsultant 'Georg'

mirco.present('javascript')
georg.present()
