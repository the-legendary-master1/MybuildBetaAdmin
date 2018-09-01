<template>
	<div>
       <div class="tab-panel" id="subscribe">
        
           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label for="title">Title</label>
               </div>

               <div class="input-group txt-field-wrapper">
                   <input type="text" name="title" id="title" class="input" v-model="subscribeData.title">
               </div>
           </div>
        
           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label for="title">Content</label>
               </div>

               <div class="input-group txt-field-wrapper">
                   <textarea class="textarea" rows="8" v-model="subscribeData.content"></textarea>
               </div>
           </div>

           <div class="input-txt-group">
               <div class="input-group txt-titles-wrapper">
                   <label for="title">List Id</label>
               </div>

               <div class="input-group txt-field-wrapper">
                   <input type="text" name="title" id="title" class="input" v-model="subscribeData.list_id">
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
        subscribeData: '',
      }
    },
    mounted() {
      this.getSubscribeData();
      Event.$on('headerTriger', () => {
        this.getSubscribeData();
      });
    },
    mixins: [ GitSingleTabMixin ],
    methods: {
      getSubscribeData() {
        axios.post(baseApiUrl+'/subscribe?api_token='+token)
          .then((response) => {
            var responseSubscribeData = response.data.subscribe;

            this.subscribeData = this.tabSingleFunction(responseSubscribeData);
          })
          .catch((errors) => {
            this.getSubscribeData();
          })
      }
    }
  }
</script>