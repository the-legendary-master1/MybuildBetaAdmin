<template>
	<div>
        <div class="left-menus flex">
            <div class="left-menus-wrapper">

                <div class="left-search panel-header">
                    <form>
                        <div class="input-group">
                            <input type="text" placeholder="Search for..." class="input">
                            <span class="input-group-icon">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </div>
                    </form>
                </div>

                <div class="left-content-wrapper overflow">
                    <div class="left-content-tree left-content">
                        <ul>
                            <li class="open-option-modal">
                                <div class="content-wrapper">
                                    <a href="#" class="content-title">{{subSidebarTitle}}</a>
                                    <div class="myb-options">
                                        <a class="ellipsis"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="left-content-tree">
                        <ul>
                            <!-- First Sidebar -->
                            <li class="open-option-modal" v-for="sidebar in sidebarData">

                                <div class="content-wrapper">
                                    <ins class="single" v-if="sidebar.type == 1"></ins>
                                    <ins class="navigation fa fa-caret-right toggleCaret" @click="thisChild(sidebar.name)" v-if="sidebar.type == 2">&nbsp;</ins>
                                    <router-link :to="sidebar.url" class="tree-icon"><i class="fa" :class="sidebar.icon" aria-hidden="true"></i></router-link>

                                    <router-link :to="sidebar.url" class="content-title">{{sidebar.name}}</router-link>
                                    <div class="myb-options">
                                        <a class="ellipsis"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
                                    </div>
                                </div>

                                <ul class="collapsed" v-if="sidebar.type == 2">

                                    <!-- Second Sidebar -->
                                    <li class="open-option-modal" v-for="secondDrop in sidebar.this_data">

                                        <div class="content-wrapper">
                                            <ins class="single" v-if="secondDrop.type == 1"></ins>
                                            <ins class="navigation fa fa-caret-right toggleCaret" @click="thisSubChild(secondDrop.name)" v-if="secondDrop.type == 2">&nbsp;</ins>
                                            <a href="" class="tree-icon"><i class="fa" :class="secondDrop.icon" aria-hidden="true"></i></a>

                                            <a href="" class="content-title">{{secondDrop.name}}</a>
                                            <div class="myb-options">
                                                <a class="ellipsis"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
                                            </div>
                                        </div>

                                        <ul class="collapsed" v-if="secondDrop.type == 2">
                                           <li class="open-option-modal">
                                               <div class="content-wrapper">
                                                   <ins class="single"></ins>
                                                   <a href="" class="tree-icon"><i class="fa fa-home" aria-hidden="true"></i></a>

                                                   <a href="" class="content-title">Daniel's brand new investment home</a>
                                                   <div class="myb-options">
                                                       <a class="ellipsis"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
                                                   </div>
                                               </div>
                                           </li>
                                        </ul>
                                    </li> <!-- End Second Sidebar -->

                                </ul>

                            </li><!-- End First Sidebar -->

                        </ul>
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
                sidebarData: '',
                allSdidebarData: '',
                subSidebarTitle: ''
            }
        },
        created() {
            Event.$on('clickMainSdiebar', (parent_name) => {
                this.getSidebar(parent_name);
            });
        },
        methods: {
            getSidebar(parent_name) {
                this.subSidebarTitle = parent_name;

                axios.post(baseApiUrl+'/sidebar?api_token='+token)
                  .then((response) => {
                        this.allSdidebarData = response.data.sidebars;
                        var parentData = [];

                        $.each(response.data.sidebars, (index, val) => {
                            if(val.parent_name == parent_name) {
                                parentData.push(val);
                            }
                        });

                        this.sidebarData = parentData;
                  })
                  .catch((errors) => console.log(errors))
            },
            thisChild(parent_name){
                let thischildData = [];

                $.each(this.allSdidebarData, (index, val) => {
                     if(val.parent_name == parent_name) {
                        thischildData.push(val);
                     }
                });

                $.each(this.sidebarData, function(index, val) {
                     if(val.name == parent_name) {
                        val.this_data = thischildData;
                     }
                });
            },
            thisSubChild(parent_name) {
            }
        }
    }

    $('body').on('click', '.toggleCaret', function(){
        $(this).toggleClass('fa-caret-down fa-caret-right');
    });
</script>