<template>
	<div>

    <div class="tab-panel maintab" id="houseDesigns" v-bind:class="{ active: isActive }">

        <div class="input-txt-group">
            <div class="input-group txt-titles-wrapper">
                <label>Title</label>
            </div>
            <div class="input-group txt-field-wrapper">
                <input type="text" class="input">
            </div>
        </div>

        <div class="input-txt-group">
            <div class="input-group txt-titles-wrapper">
                <label>How It Works Title</label>
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
      this.ifUrlName('House-designs');

      Event.$on('headerTriger', () => {
        this.ifUrlName('House-designs');
      });
    },
    mixins: [IfUrl],
  }
</script>