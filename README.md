# AngularAccenture

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Tasks List - 19/06/2021-20/06-2021

1) Generate dynamic data using @viewchild decorator by attaching custom event and populate inside a component.

************
@viewchild is implemented on blog component. (Parent) It asks user to enter the post he/she wishes to see. When user clicks "Show Post", it calls the child method in post.
It uses to render the post from the blogposts array defines in Parent. 
Kindly navigates to "https://thiekshana.github.io/ThiekAngular/blog/posts" to test. 
************

2) Build  contact component with validations  and store the information in the Browser storage and list the contact information in a separate component by reading from Browser storage?

************
https://thiekshana.github.io/ThiekAngular/sessiondata

From this page, whenever user submits data all info will be stored in session storage, 
By clicking "Retrieve Session Data", this will render the info below. These two are seperate components. (contact and seesiondata)
	
	Template Driven : https://thiekshana.github.io/ThiekAngular/tdcontact
	Reactive Form : https://thiekshana.github.io/ThiekAngular/contact
	Route Guard : https://thiekshana.github.io/ThiekAngular/contact
  A form-guard using "CanDeactivate" is implelented to check whether all the fields are filled before navigation. 
	2.4) Implement custom validation using Directives: 
   React Form: A directive called "forbiddennames" used to check whether user keys in unauthorized names. 
   Template-Driven: If user enters admin/test (unauthorized names) as first name, the field will change color to red. Otherwise it will highlight as yellow.  
************
3) Create Custom Directive(Structural) that should collect the input from parent component and iterate the template over the no of time passed from parent?

https://thiekshana.github.io/ThiekAngular/stickynotes

This takes the user input from parent that how many sticky notes he/she likes to display. Based on the number it calls "iteration" directive and display that amount of number of sticky notes. 
************

4) Create sibling component and pass information between them?

https://thiekshana.github.io/ThiekAngular/about/aboutgroup

about-group , about-us are siblings components here. A service named "about" is created here. This gets the source as observable and child components subscribe to this service. 
when user clicks "here", this will render staff panel in about-group using about-us. 
************
5) Build components under services menu with you own HTML & CSS , Please dont use Bootstrap.

https://thiekshana.github.io/ThiekAngular/services/supply-chain
https://thiekshana.github.io/ThiekAngular/services/ai
https://thiekshana.github.io/ThiekAngular/business-strategy

************

# AngularAccenture

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# ThiekAngular
