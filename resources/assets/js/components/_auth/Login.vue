<template>
	<div>
	    <div class="container">
	        <div class="columns m-t-100 login-wrapper">
	        	<div class="column"></div>

	            <div class="column is-two-fifths">
	                <div class="card">
	                    <div class="card-content">
	                        <h1 class="title has-text-centered m-t-20 m-b-40">Welcome To MybuildBeta</h1>

	                        <div class="field">
	                            <label class="label">User Name</label>

	                            <p class="control">
	                                <input type="text" class="input" v-model="LoginData.username">
	                            </p>

	                        </div>

        					<b-field label="Password">
			        				<b-input type="password" password-reveal v-model="LoginData.password"></b-input>
			        		</b-field>

	                        <b-checkbox name="remember" class="m-t-20">Remember Me</b-checkbox>

	                        <button type="submit" class="button is-primary is-outlined is-fullwidth m-t-30" @click="Login">Login</button>

	                    </div> <!-- end card content -->
	                </div> <!-- end card -->

	                <h5 class="m-t-20 has-text-centered">
	                    <a href="" class="is-muted">Forgot Your Password?</a>
	                </h5>
	            </div>

	        	<div class="column"></div>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				LoginData: {
					username: '',
					password: ''
				}
			}
		},
		mounted() {
			if(token) {
				this.$router.push('/');
			}
		},
		methods: {
			Login() {
				axios.post(baseApiUrl+'/login', this.$data.LoginData)
				  .then((response) => {
						let new_token = response.data.user.api_token;
						let new_userType = response.data.user.user_type;

						window.token = new_token;
						window.userType = new_userType;

						localStorage.setItem('token', new_token);
						localStorage.setItem('userType', new_userType);

						Event.$emit('login');
						this.$router.push('/');
                		location.reload('/');
				  })
				  .catch((errors) => {
	                this.$toast.open({
	                    message: errors.response.data.message,
                    	position: 'is-bottom',
	                    type: 'is-danger'
	                })
				  })
			}
		}
	}
</script>