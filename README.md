
# audio-process

creates a webaudio script process input node

## Example

```js
var process = require('audio-process');

var audio = new webkitAudioContext();

var node = process(audio, 1024, function(L, R){
  for(var i=0; i<L.length; i++){
    L[i] = Math.random()*0.5;
    R[i] = L[i];
  }
});

node.connect(audio.destination);
```

## License

MIT
