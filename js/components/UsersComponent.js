
// this page gets the cards from usercomponent and fills in the name and messages

import UserComponent from './UserComponent.js';

export default {
	template: `
	<div class="container">
	<div class="row">
		<div class="col-sm-12">
			<h1 id="whoWatch" >{{ message }}</h1>
		</div>


		<user v-for="(user, index) in userList" :liveuser="user" :key="index"></user>     

	</div>
</div>
	`,

	created: function() {
	  //debugger;
	  this.fetchAllUsers();
	},

	data() {
	  return {
		message: `Who's Watching?`,

		userList: []
	  }
	},

	methods: {
	  fetchAllUsers() {
		let url = `./admin/scripts/users.php?allusers=true`;

		fetch(url)
		  .then(res => res.json())
		  .then(data => {this.userList = data})
		.catch(function(error) {
		  console.error(error);
		});
	  }
	},

	components: {
		user: UserComponent
	}
}
