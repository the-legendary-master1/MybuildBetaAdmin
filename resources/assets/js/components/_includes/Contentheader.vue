<template>
	<div>
        <div class="header-title panel-header" v-if="contentSidebar">
            <div class="panel-page-title">
                <div class="input-group">
                    <input type="text" name="title" placeholder="Page Title" class="input" >
                </div>
                <div class="input-group">
                    <div class="dropdown is-right action_wrapper">
                      <div class="dropdown-trigger" @click="actionDrop">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                          <span>Action</span>
                          <span class="icon is-small">
                            <i class="fa fa-angle-down action_caret" aria-hidden="true"></i>
                          </span>
                        </button>
                      </div>
                      <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                          <a href="#" class="dropdown-item">
                            Dropdown item
                          </a>
                          <a class="dropdown-item">
                            Other dropdown item
                          </a>
                          <a href="#" class="dropdown-item is-active">
                            Active dropdown item
                          </a>
                          <a href="#" class="dropdown-item">
                            Other dropdown item
                          </a>
                          <hr class="dropdown-divider">
                          <a href="#" class="dropdown-item">
                            With a divider
                          </a>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            
            <ul class="nav nav-tabs">
                <li v-for="head in tabData">
                    <a data-toggle="tab" :class="head.class" :href="head.tab_no" @click="parentDetect(head.class)">{{head.name}}</a>
                </li>
            </ul>
        </div>
	</div>
</template>

<script>
    let HeaderData = require('../_mixins/HeaderData.js');

    export default {
        data() {
            return {
                contentSidebar: true,
                tabData: '',
                allTabsData: HeaderData,
            }
        },
        mounted() {
          this.eachAllTabData();

          if(!token){
              this.$data.contentSidebar = false;
              $('.main-content').css('left', '0');
          }

          Event.$on('login', () => {
              this.$data.contentSidebar = true;
              $('.main-content').css('left', '440px');
          });
          Event.$on('logout', () => {
              this.$data.contentSidebar = false;
              $('.main-content').css('left', '0');
          });
          Event.$on('headerTriger', () => {
            this.eachAllTabData();
          });
        },
        methods: {
          actionDrop() {
            $('.action_wrapper').toggleClass('is-active');
            $('.action_caret').toggleClass('fa-angle-up fa-angle-down');
          },
          eachAllTabData() {
            var thisTabData = [];

            $.each(this.allTabsData, (index, val) => {
                if(val.parent_name == this.$route.meta.name) {
                    thisTabData.push(val.tabs);
                }
            });

          this.tabData = thisTabData[0];
          $('.parent').click();
          },
          parentDetect(parent) {
            if(parent == "") {
              $('.maintab').hide();
            } 
          }
        }
    }
</script>