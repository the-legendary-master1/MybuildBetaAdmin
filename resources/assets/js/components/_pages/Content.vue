<template>
	<div>
        <div class="myb-panel">
            <div class="form-horizontal tab-content">

				<Homecontent></Homecontent>
				
            </div>
        </div>

		<Contentfooter></Contentfooter>
	</div>
</template>

<script>
	let Contentfooter = require('../_includes/Contentfooter.vue');
	let Homecontent = require('../_subpages/Homecontent.vue');

	export default {
		components: {
			Contentfooter,
			Homecontent,
		},
		created() {
			this.$route.name
		}
	}
</script>