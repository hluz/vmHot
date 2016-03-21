FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('App_body', {top: 'App_navbar', main: 'Page_home'});
  }
});

// the App_notFound template is used for unknown routes
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', {top: 'App_navbar', main: 'App_notFound'});
  }
};
