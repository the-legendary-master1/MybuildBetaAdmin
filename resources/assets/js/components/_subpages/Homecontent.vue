<template>
	<div>

		<Hometabone></Hometabone>
		<Hometabtwo></Hometabtwo>

	</div>
</template>

<script>
	let Hometabone = require('../_tabspages/Hometabone.vue');
	let Hometabtwo = require('../_tabspages/Hometabtwo.vue');

	export default {
		components: {
			Hometabone,
			Hometabtwo
		},
	}
</script>