<template>
	<div>
        <section class="main-content">

            <Contentheader></Contentheader>
    
            <router-view></router-view>
            
<!-- 		        <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="false"></b-loading> -->
        </section>
	</div>
</template>

<script>
	let Contentheader = require('../_includes/Contentheader.vue');
	
	export default {
		components: {
    		Contentheader,
    	},
        data() {
            return {
/*                isLoading: false,*/
            }
        },
        mounted() {
/*          Event.$on('headerTriger', () => {
            this.isLoading = true;
          });
          Event.$on('closeLoading', () =>{
          	this.isLoading = false;
          })*/
        }
	}
</script>