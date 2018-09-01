<template>
	<div>

    <div class="tab-panel maintab" id="yourstories" v-bind:class="{ active: isActive }">

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
                <label>Body</label>
            </div>
            <div class="input-group txt-field-wrapper">
                <textarea class="my-text-editor"></textarea>
            </div>
        </div>

           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label for="title">Logo</label>
               </div>
               <div class="input-group txt-field-wrapper">
                   <a class="select-image">
                       <i class="fa fa-plus"></i>
                   </a>
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
      this.ifUrlName('Your-stories');

      Event.$on('headerTriger', () => {
        this.ifUrlName('Your-stories');
      });
    },
    mixins: [IfUrl],
  }
</script>