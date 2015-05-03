# BRU-3

This is the BRUTALISM logo generator.

There are three ways of running it:

1. From a REPL (for interactive tweaking and playing around with parameters).
2. As a standalone build.
3. As a compiled Javascript ready to be embedded into a web page.

It is assumed you already have a healthy Clojure environment set up, with Leiningen installed.


### Running from a REPL
Running `lein repl :start :port PORT_NUMBER` will start (eventually, it takes a while) a REPL with a sketch already presented in a separate window. You can then connect to the REPL using your preferred environment and start evaluating expressions. I'm using LightTable, that's why you'll see some LT-related nREPL middleware in my `project.clj`.

Your main point of entry for playing around with the generator is the `draw.cljx` file.

### Starting a standalone build
If you just want to have a standalone sketch running, you can execute `lein run`. Do this if you don't need a REPL, or don't know how to use it.

### Building the Javascript
Issuing `lein cljx && lein cljsbuild once` gets you the built Javascript version of the generator. (Since my Leiningen-fu is still not on a satisfactory level, issuing `lein run` will actually also build the Javascript version before running the standalone sketch.)

You can find all the generated JS in the `web/js` folder, and see it working if you open `index.html`.

## About
BRU-3 has been developed as a first in (what will hopefully be) a series of projects exploring generative graphic design and brand identity. My aim was to develop a **system** for generating logos which the people will associate with the studio as a brand. By looking at numerous instances of the system's output, people will develop a connection with the underlying algorithm and the style it generates, rather than associating the brand with just a single image.

Have fun playing around with it, and please send your feedback to <v@brutalism.rs>.

Obey the Algorithm.