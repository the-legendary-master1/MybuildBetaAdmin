<template>
	<div>

    <div class="tab-panel maintab" id="compare" v-bind:class="{ active: isActive }">

        <div class="input-txt-group">
            <div class="input-group txt-titles-wrapper">
                <label>Title</label>
            </div>
            <div class="input-group txt-field-wrapper">
                <input type="text" class="input">
            </div>
        </div>

    </div>

	</div>
</template>

<script>
  /*mixin*/
  let IfUrl = require('../_mixins/IfUrl.js');

    export default {
    data() {
      return {
        isActive: false,
      }
    },
    mounted() {
      this.ifUrlName('Compare');

      Event.$on('headerTriger', () => {
        this.ifUrlName('Compare');
      });
    },
    mixins: [IfUrl],
  }
</script>