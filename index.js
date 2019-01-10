function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

  if (string === string.toLowerCase()) {
    return ("I can't hear you!");
  } if (string === string.toUpperCase()); {
    return ("YES INDEED!");
  } if (string === 'I love you, Grandma.'); {
    return ("I love you, too.");
}
sayHiToGrandma(whisper('heLlo'));
sayHiToGrandma(shout('HEllO'));
sayHiToGrandma("I love you, Grandma."); ```

### error message

``` 1) sayHiToGrandma(string) returns "I love you, too." if `string` is "I love you, Grandma."`:
      Error: Expected 'YES INDEED!' to equal 'I love you, too.'
      + expected - actual
      -YES INDEED!
      +I love you, too.
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.<anonymous> (test/index-test.js:48:52) ```