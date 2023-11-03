app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider.state("home", {
        url: "/",
        templateUrl: "../templates/Home.html",
        controller: "myController"
    }).state("create", {
        url: "/create",
        templateUrl: "../templates/create.html",
        controller: "createController"
    }).state("view", {
        url: "/view/:id",
        templateUrl: "../templates/view.html",
        controller: 'viewController'
    }).state("edit", {
        url: "/edit/:id",
        templateUrl: "../templates/edit.html",
        controller: "editController"
    });
});
