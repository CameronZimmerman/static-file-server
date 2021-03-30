# static file server

## GOAL

Have a node server that serves static files as a response. For example, when a client goes to http://localhost:1235/example.txt the server will go into a public directory and respond with the content of example.txt.

## HOW

Using the fs library built into node, we will read the contents of the files and create a response using the contents of the file as the response body. 