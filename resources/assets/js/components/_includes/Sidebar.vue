<template>
	<div>
		<div class="left-column">

			<Sidebarmain></Sidebarmain>
			<Sidebarsub></Sidebarsub>
			<Sidebarclick></Sidebarclick>

        </div>
	</div>
</template>

<script>
	let Sidebarmain = require('../_subpages/Sidebarmain.vue');
	let Sidebarsub = require('../_subpages/Sidebarsub.vue');
	let Sidebarclick = require('../_subpages/Sidebarclick.vue');

	export default {
		components: {
			Sidebarmain,
			Sidebarsub,
			Sidebarclick,
		}
	}
</script>