# vue3-island-test

Example / proof-of-concept to mount some vue3 components in different HTML files (backend rendered) as "islands"

https://www.patterns.dev/vanilla/islands-architecture/

## Install

```
npm install

npm run build
```

Static build can be found in `backend/dist`.

Now you need to serve the files in backend via http, maybe like this:

```
plackup -MPlack::App::DirectoryIndex -e 'Plack::App::DirectoryIndex->new(root=>q{.});' -p 8008 --access-log /dev/null
```



