<template>
	<div>
       <div class="tab-panel" id="seo">
        
           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label for="title">Meta Description</label>
               </div>

               <div class="input-group txt-field-wrapper">
                   <textarea class="textarea" rows="8" v-model="seoData.meta_description"></textarea>
               </div>
           </div>

           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label for="title">Meta Title</label>
               </div>

               <div class="input-group txt-field-wrapper">
                   <input type="text" name="title" id="title" class="input" v-model="seoData.meta_title">
               </div>
           </div>

       </div>
	</div>
</template>

<script>
  /*mixins*/
  let GitSingleTabMixin = require('../_mixins/GitSingleTabMixin.js');

  export default {
    data() {
      return {
        seoData: '',
      }
    },
    mounted() {
      this.getSeoData();
      Event.$on('headerTriger', () => {
        this.getSeoData();
      });
    },
    mixins: [ GitSingleTabMixin ],
    methods: {
      getSeoData() {
        axios.post(baseApiUrl+'/seo?api_token='+token)
          .then((response) => {
            var responseSeoData = response.data.seo;

            this.seoData = this.tabSingleFunction(responseSeoData);
          })
          .catch((errors) => {
            this.getSeoData();
          })
      }
    }
  }
</script>