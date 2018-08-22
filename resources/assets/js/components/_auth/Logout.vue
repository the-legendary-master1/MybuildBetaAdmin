<template>
	<div>
		<h1 class="title">You are logged out!</h1>
        <router-link to="/login" class="button">Login</router-link>
	</div>
</template>

<script>
	export default {
		created() {
			if(!token){
				return false;
			};
			this.loggedOut();
		},
		methods: {
			loggedOut() {
				axios.get(baseApiUrl+'/logout?api_token='+token)
				  .then((response) => {
					localStorage.removeItem('token');
					localStorage.removeItem('userType');

					window.token = "";
					window.userType = "";

					Event.$emit('logout');
				  })
				  .catch((errors) => console.log(errors))
			}
		}
	}
</script>