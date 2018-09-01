<template>
	<div>
       <div class="tab-panel" id="customDesignForm">

           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label>Custom Design Title</label>
               </div>
               <div class="input-group txt-field-wrapper">
                   <input type="text" class="input" v-model="customDesignFormData.custom_design_title">
               </div>
           </div>

           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label>Custom Design Body</label>
               </div>
               <div class="input-group txt-field-wrapper">
                   <textarea class="my-text-editor" v-model="customDesignFormData.custom_design_body"></textarea>
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
        customDesignFormData: '',
      }
    },
    mounted() {
      this.getCustomDesignFormData();
      Event.$on('headerTriger', () => {
        this.getCustomDesignFormData();
      });
    },
    mixins: [ GitSingleTabMixin ],
    methods: {
      getCustomDesignFormData() {
        axios.post(baseApiUrl+'/custom-design-forms?api_token='+token)
          .then((response) => {
            var responseCustomDesignFormData = response.data.custom_design_forms;

            this.customDesignFormData = this.tabSingleFunction(responseCustomDesignFormData);
          })
          .catch((errors) => {
            this.getCustomDesignFormData();
          })
      }
    }
  }
</script>