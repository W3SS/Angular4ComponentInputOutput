# Angular4ComponentInputOutput
Angular 4 project allowing communication between components.

This is an assignment from the Angular 4 course I am taking on Udemy.  The application allows for @Input, @Output decorators to facilitate communication between custom directives.  Max Schwarzmueller deserves all credit because I learned it from him, and decided to try it on my own from scratch.

1. ng new suspects
2. added DispacthCompoennt and SuspectComponent directories under /src/app
3. added DispatchComponent and SuspectComponent to app.module.ts
4. edited all type script files and html manually.
5. added bootstrap to make the world look identical to Twitter(you're welcome):
  npm install bootstrap --save
  vi /src/angular-cli.json -> adding "../node_modules/bootstrap/dist/css/bootstrap.min.css" to Styles array
  
  You can create components via Angular CLI: `ng g c somecomponent`, however, I decided to do it all manually as a test of my nerditude.
  
  Mike 5/7/2017
