function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyAyXNxe7UXou4Z2HnwWrAIx0Kgu-WrU6-U',
    // clientId and scope are optional if auth is not required.
    'clientId': '968561076792-tar9q0k9tcidu40qm56hbcard4o82g11.apps.googleusercontent.com,
    'scope': 'profile',
  }).then(function() {
    // 3. Initialize and make the API request.
    return gapi.client.request({
      'path': 'https://people.googleapis.com/v1/people/me',
    })
  }).then(function(response) {
    console.log(response.result);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.
gapi.load('client', start);