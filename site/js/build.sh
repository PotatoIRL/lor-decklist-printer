browserify 'main.js' -o 'main.standalone.js'
node-minify --compressor babel-minify --input 'main.standalone.js' --output 'main.standalone.min.js'
