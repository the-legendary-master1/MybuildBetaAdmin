<template>
	<div  class="content-wrapper">
        <div class="myb-panel">
            <div class="form-horizontal tab-content">

				<Hometabone></Hometabone>
				<Hometabtwo></Hometabtwo>
				<Hometabthree></Hometabthree>
				<Hometabfour></Hometabfour>
				<Hometabfive></Hometabfive>
				<Hometabsix></Hometabsix>
				<Hometabseven></Hometabseven>
				<Hometabeight></Hometabeight>
				
            </div>
        </div>

		<Contentfooter></Contentfooter>
	</div>
</template>

<script>
	let Contentfooter = require('../_includes/Contentfooter.vue');
	let Hometabone = require('../_tabspages/_homeTabs/Hometabone.vue');
	let Hometabtwo = require('../_tabspages/_homeTabs/Hometabtwo.vue');
	let Hometabthree = require('../_tabspages/_homeTabs/Hometabthree.vue');
	let Hometabfour = require('../_tabspages/_homeTabs/Hometabfour.vue');
	let Hometabfive = require('../_tabspages/_homeTabs/Hometabfive.vue');
	let Hometabsix = require('../_tabspages/_homeTabs/Hometabsix.vue');
	let Hometabseven = require('../_tabspages/_homeTabs/Hometabseven.vue');
	let Hometabeight = require('../_tabspages/_homeTabs/Hometabeight.vue');

	export default {
		components: {
			Contentfooter,
			Hometabone,
			Hometabtwo,
			Hometabthree,
			Hometabfour,
			Hometabfive,
			Hometabsix,
			Hometabseven,
			Hometabeight,
		},
		mounted() {
			if(!token){
				this.$router.push('/login');
			}
		},
		created() {
			this.$route.name
		}
	}
</script>