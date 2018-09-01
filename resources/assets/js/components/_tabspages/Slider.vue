<template>
	<div>
       <div class="tab-panel" id="slider">
          <div class="slider-wrapper" v-for="item,key in sliderData">

             <div class="input-txt-group">
                 <div class="input-group txt-titles-wrapper">
                     <label for="title">Slider {{key+1}} Image</label>
                 </div>
                 <div class="input-group txt-field-wrapper">
                     <a class="select-image">
                         <i class="fa fa-plus"></i>
                     </a>
                 </div>
             </div>

             <div class="input-txt-group">
                 <div class="input-group txt-titles-wrapper">
                     <label>Slider {{key+1}} Title</label>
                 </div>
                 <div class="input-group txt-field-wrapper">
                     <input type="text" class="input" v-model="item.slider_title">
                 </div>
             </div>

             <div class="input-txt-group">
                 <div class="input-group txt-titles-wrapper">
                     <label>Link To Title</label>
                 </div>
                 <div class="input-group txt-field-wrapper">
                     <input type="text" class="input" v-model="item.link_title">
                 </div>
             </div>

             <div class="input-txt-group">
                 <div class="input-group txt-titles-wrapper">
                     <label>Slider {{key+1}} Subtitle</label>
                 </div>
                 <div class="input-group txt-field-wrapper">
                     <input type="text" class="input" v-model="item.slider_sub">
                 </div>
             </div>

             <div class="input-txt-group">
                 <div class="input-group txt-titles-wrapper">
                     <label>Link To Subtitle</label>
                 </div>
                 <div class="input-group txt-field-wrapper">
                     <input type="text" class="input" v-model="item.link_sub">
                 </div>
             </div>

          </div>        
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        sliderData: '',
      }
    },
    mounted() {
      this.getSliderData();
      Event.$on('headerTriger', () => {
        this.getSliderData();
      });
    },
    methods: {
      getSliderData() {
        axios.post(baseApiUrl+'/slider?api_token='+token)
          .then((response) => {
            var parent_name = this.$route.meta.name;
            var output = [];

            $.each(response.data.sliders, function(parent, data) {
              if(data.parent_name == parent_name) {
                output.push(data);
              }
            });
            this.sliderData = output;
          })
          .catch((errors) => {
            this.getSliderData();
          })
      }
    }
  }
</script>