<template>
	<div>

    <div class="tab-panel maintab" id="howitworks" v-bind:class="{ active: isActive }">

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

        <div class="input-txt-group">
            <div class="input-group txt-titles-wrapper">
                <label>How It Works Items</label>
            </div>
            <div class="input-group txt-field-wrapper">

               <div class="more-wrapper">

                 <div class="more-content">
                   <div class="more-title">
                     <div class="more-title-content">
                       <i class="fa fa-file-o fa-lg" aria-hidden="true"></i> test test
                     </div>
                     <small class="more-title-sub">
                       /test/test
                     </small>
                   </div>
                   <div class="more-action">
                     <small>Remove</small>
                   </div>
                 </div>

                 <div class="more-add">
                   <button class="button is-primary is-outlined is-fullwidth">Add</button>
                 </div>
               
               </div>
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
      this.ifUrlName('How-it-works');

      Event.$on('headerTriger', () => {
        this.ifUrlName('How-it-works');
      });
    },
    mixins: [IfUrl],
  }
</script>