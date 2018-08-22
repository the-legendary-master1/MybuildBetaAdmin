<template>
	<div>
		<div class="left-column" v-if="sidebar">

			<Sidebarmain></Sidebarmain>
			<Sidebarsub></Sidebarsub>
			<Sidebarclick></Sidebarclick>

        </div>
	</div>
</template>

<script>
	let Sidebarmain = require('../_includes/Sidebarmain.vue');
	let Sidebarsub = require('../_includes/Sidebarsub.vue');
	let Sidebarclick = require('../_includes/Sidebarclick.vue');

	export default {
		components: {
			Sidebarmain,
			Sidebarsub,
			Sidebarclick,
		},
        data() {
            return {
                sidebar: true,
            }
        },
        mounted() {
            if(!token){
                this.$data.sidebar = false;
            }
            
            Event.$on('login', () => {
                this.$data.sidebar = true;
            });
            Event.$on('logout', () => {
                this.$data.sidebar = false;
            });
        }
	}
</script>