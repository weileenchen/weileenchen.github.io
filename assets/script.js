var iAm = document.getElementById('iAm');

var typewriter = new Typewriter(iAm, {
    loop: true
});

typewriter.typeString('a coder')
    .pauseFor(2000)
    .deleteAll()
    .typeString('a creator')
    .pauseFor(2000)
    .deleteAll()
    .typeString('an artist')
    .pauseFor(2000)
    .start();