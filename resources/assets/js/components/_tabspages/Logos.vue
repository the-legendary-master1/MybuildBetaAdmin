<template>
	<div>
       <div class="tab-panel" id="logos">
        
           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label for="title">Title</label>
               </div>

               <div class="input-group txt-field-wrapper">
                   <input type="text" class="input" v-model="logosData.title">
               </div>
           </div>

           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label>Logos</label>
               </div>
               <div class="input-group txt-field-wrapper">

                  <div class="more-wrapper">

                    <div class="more-content" v-for="items in logosData.logo_contents">
                      <div class="more-title">
                        <div class="more-title-content">
                          <i class="fa fa-lg" :class="items.icon" aria-hidden="true"></i> {{items.title}}
                        </div>
                        <small class="more-title-sub">
                          {{items.link}}
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

       </div>
	</div>
</template>

<script>
  /*mixin*/
  let GitSingleTabMixin = require('../_mixins/GitSingleTabMixin.js');
  let PageChildMixin = require('../_mixins/PageChildMixin.js');

  export default {
    data() {
      return {
        logosData: '',
      }
    },
    mounted() {
      this.getLogosData();
      Event.$on('headerTriger', () => {
        this.getLogosData();
      });
    },
    mixins: [ GitSingleTabMixin, PageChildMixin ],
    methods: {
      getLogosData() {
        axios.post(baseApiUrl+'/logos?api_token='+token)
          .then((response) => {
            var responseLogosData = response.data.logos;
            var response_page_children = response.data.page_children;
            var response_logo_contents =response.data.logo_contents;

            this.logosData = this.tabSingleFunction(responseLogosData);
            this.logosData.logo_contents = this.tabsGetFunction(response_page_children, response_logo_contents, "logo_contents");
          })
          .catch((errors) => {
            this.getLogosData();
          })
      }
    }
  }
</script>