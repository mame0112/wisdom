wisdomApp.factory('apiService', ['$resource', function($resource) {
	return $resource('api/wisdom/:id', 
		{servlet_resp_id: 1, twitter_name: 'TwitterName'},
		 {query: {method: 'GET', isArray: false}
		});
	}
]);
    // return $resource('api/wisdom/:id', {}, {
    //   // Get certain or all category
    //   get_category: {method: 'GET', isArray: false},
    //   // Add as POST
    //   save: {method: 'POST'}
    // });


// wisdomApp.factory('apiService', ['$resource',
//   function($resource) {
//     return $resource('api/wisdom/:id', {}, {
//       // Get certain or all category
//       get_category: {method: 'GET', isArray: false},
//       // Add as POST
//       save: {method: 'POST'}
//     });
//   }
// ]);