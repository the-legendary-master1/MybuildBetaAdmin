<template>
	<div>
        <div class="tab-panel" id="headFooter">

           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label>Display On Nav</label>
               </div>
               <div class="input-group txt-field-wrapper">
                   <b-checkbox size="is-small" v-bind:true-value="1" v-bind:false-value="0" v-model="headerFooterData.display_nav"></b-checkbox>
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

           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label>Display On Footer 1</label>
               </div>
               <div class="input-group txt-field-wrapper">
                   <b-checkbox size="is-small" v-bind:true-value="1" v-bind:false-value="0" v-model="headerFooterData.display_footer_one"></b-checkbox>
               </div>
           </div>

           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label for="title">Favicon</label>
               </div>
               <div class="input-group txt-field-wrapper">
                   <a class="select-image">
                       <i class="fa fa-plus"></i>
                   </a>
               </div>
           </div>

           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label>Display On Footer 2</label>
               </div>
               <div class="input-group txt-field-wrapper">
                   <b-checkbox size="is-small" v-bind:true-value="1" v-bind:false-value="0" v-model="headerFooterData.display_footer_two"></b-checkbox>
               </div>
           </div>

           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label>Footer Column Names</label>
               </div>
               <div class="input-group txt-field-wrapper">
                   <input type="text" class="input">
               </div>
           </div>

           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label>Display On Footer 3</label>
               </div>
               <div class="input-group txt-field-wrapper">
                   <b-checkbox size="is-small" v-bind:true-value="1" v-bind:false-value="0" v-model="headerFooterData.display_footer_three"></b-checkbox>
               </div>
           </div>

           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label>Display On Footer 4</label>
               </div>
               <div class="input-group txt-field-wrapper">
                   <b-checkbox size="is-small" v-bind:true-value="1" v-bind:false-value="0" v-model="headerFooterData.display_footer_four"></b-checkbox>
               </div>
           </div>

           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label>Display On Footer Bottom</label>
               </div>
               <div class="input-group txt-field-wrapper">
                   <b-checkbox size="is-small" v-bind:true-value="1" v-bind:false-value="0" v-model="headerFooterData.display_footer_bottom"></b-checkbox>
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
        headerFooterData: '',
      }
    },
    mounted() {
      this.getHeaderFooterData();
      Event.$on('headerTriger', () => {
        this.getHeaderFooterData();
      });
    },
    mixins: [ GitSingleTabMixin ],
    methods: {
      getHeaderFooterData() {
        axios.post(baseApiUrl+'/header_footer?api_token='+token)
          .then((response) => {
            var responseHeaderFooterData = response.data.header_footer;

            this.headerFooterData = this.tabSingleFunction(responseHeaderFooterData);
          })
          .catch((errors) => {
            this.getHeaderFooterData();
          })
      }
    }
  }
</script>