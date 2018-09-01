<template>
	<div>

    <div class="tab-panel maintab" id="home" v-bind:class="{ active: isActive }">

        <div class="input-txt-group">
            <div class="input-group txt-titles-wrapper">
                <label>Title</label>
            </div>
            <div class="input-group txt-field-wrapper">
                <input type="text" class="input" v-model="homeData.title">
            </div>
        </div>

        <div class="input-txt-group">
            <div class="input-group txt-titles-wrapper">
                <label>How It Works Title</label>
            </div>
            <div class="input-group txt-field-wrapper">
                <input type="text" class="input" v-model="homeData.how_it_works_title">
            </div>
        </div>

        <div class="input-txt-group">
            <div class="input-group txt-titles-wrapper">
                <label>Strap Line</label>
            </div>
            <div class="input-group txt-field-wrapper">
                <input type="text" class="input" v-model="homeData.strap_line">
            </div>
        </div>

        <div class="input-txt-group">
            <div class="input-group txt-titles-wrapper">
                <label>How It Works Items</label>
            </div>
            <div class="input-group txt-field-wrapper">

               <div class="more-wrapper">

                 <div class="more-content" v-for="items in homeData.how_it_works_items">
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

        <div class="input-txt-group">
            <div class="input-group txt-titles-wrapper">
                <label>How It Works Link</label>
            </div>
            <div class="input-group txt-field-wrapper">

               <div class="more-wrapper">

                 <div class="more-content" v-for="items in homeData.how_it_works_link">
                   <div class="more-title">
                     <div class="more-title-content">
                       <i class="fa fa-lg" :class="items.icon" aria-hidden="true"></i> {{items.name}}
                     </div>
                     <small class="more-title-sub">
                       {{items.url}}
                     </small>
                   </div>
                   <div class="more-action">
                     <small>Remove</small>
                   </div>
                 </div>
               
               </div>
            </div>
        </div>

        <div class="input-txt-group">
            <div class="input-group txt-titles-wrapper">
                <label>Blog Title</label>
            </div>
            <div class="input-group txt-field-wrapper">
                <input type="text" class="input" v-model="homeData.blog_title">e
            </div>
        </div>

        <div class="input-txt-group">
            <div class="input-group txt-titles-wrapper">
                <label>Featured Blogs</label>
            </div>
            <div class="input-group txt-field-wrapper">

               <div class="more-wrapper">

                 <div class="more-content" v-for="items in homeData.featured_blogs">
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

        <div class="input-txt-group">
            <div class="input-group txt-titles-wrapper">
                <label>Blog Link</label>
            </div>
            <div class="input-group txt-field-wrapper">

               <div class="more-wrapper">

                 <div class="more-content" v-for="items in homeData.blog_link">
                   <div class="more-title">
                     <div class="more-title-content">
                       <i class="fa fa-lg" :class="items.icon" aria-hidden="true"></i> {{items.name}}
                     </div>
                     <small class="more-title-sub">
                       {{items.url}}
                     </small>
                   </div>
                   <div class="more-action">
                     <small>Remove</small>
                   </div>
                 </div>
               
               </div>
            </div>
        </div>

        <div class="input-txt-group">
            <div class="input-group txt-titles-wrapper">
                <label>Story Title</label>
            </div>
            <div class="input-group txt-field-wrapper">
                <input type="text" class="input" v-model="homeData.story_title">
            </div>
        </div>

        <div class="input-txt-group">
            <div class="input-group txt-titles-wrapper">
                <label>Stories</label>
                
            </div>
            <div class="input-group txt-field-wrapper">

               <div class="more-wrapper">

                 <div class="more-content" v-for="items in homeData.stories">
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
  let PageChildMixin = require('../_mixins/PageChildMixin.js');
  let IfUrl = require('../_mixins/IfUrl.js');

	export default {
    data() {
      return {
        homeData: '',
        isActive: false,
      }
    },
    mounted() {
      this.getHomeData();
      this.ifUrlName('Home');

      Event.$on('headerTriger', () => {
        this.getHomeData();
        this.ifUrlName('Home');
      });
    },
    mixins: [PageChildMixin, IfUrl],
    methods: {
      getHomeData() {
        axios.post(baseApiUrl+'/home?api_token='+token)
          .then((response) => {
            /*response*/
            this.homeData = response.data.homes[0];
            var response_how_it_works_items = response.data.how_it_works_items;
            var response_page_children = response.data.page_children;
            var response_links = response.data.links;
            var featured_blogs = response.data.featured_blogs;
            var stories = response.data.stories;

            /*ploting data*/
            this.homeData.how_it_works_items = this.tabsGetFunction(response_page_children, response_how_it_works_items, "how_it_works_items");
            this.homeData.how_it_works_link = this.tabsGetFunction(response_page_children, response_links, "how_it_works_link");
            this.homeData.featured_blogs = this.tabsGetFunction(response_page_children, featured_blogs, "featured_blogs");
            this.homeData.blog_link = this.tabsGetFunction(response_page_children, response_links, "blog_link");
            this.homeData.stories = this.tabsGetFunction(response_page_children, stories, "stories");
          })
          .catch((errors) => {
            this.getHomeData();
          })
      },
    }
	}
</script>