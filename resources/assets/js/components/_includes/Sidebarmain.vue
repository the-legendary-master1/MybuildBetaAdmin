<template>
	<div>
        <div class="left-columns-menu">
            <ul>
                <li class="avatar">
                    <a href="">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                        <span>Username</span>
                    </a>
                </li>
                <li v-for="mainsidebar in mainSidebarData" :class="mainsidebar.show" @click="thisActive">
                    <router-link :to="mainsidebar.url">
                        <i class="fa" :class="mainsidebar.icon" aria-hidden="true"></i>
                        <span>{{mainsidebar.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                mainSidebarData: [
                    {
                        id: '1',
                        name: 'Content',
                        icon: 'fa-file-o',
                        show: '',
                        url: '/',
                    },
                    {
                        id: '2',
                        name: 'Media',
                        icon: 'fa-picture-o',
                        show: '',
                        url: '/media',
                    },
                    {
                        id: '3',
                        name: 'Settings',
                        icon: 'fa-wrench',
                        show: '',
                        url: '',
                    },
                    {
                        id: '4',
                        name: 'Developer',
                        icon: 'fa-cog',
                        show: '',
                        url: '',
                    },
                    {
                        id: '5',
                        name: 'Members',
                        icon: 'fa-users',
                        show: '',
                        url: '',
                    },
                    {
                        id: '6',
                        name: 'Users',
                        icon: 'fa-user',
                        show: '',
                        url: '',
                    },
                ]
            }
        },
        mounted() {
            this.thisActive();
            this.getMainSidebar();
        },
        methods: {
            getMainSidebar() {

            },
            thisActive() {
                    this.$data.mainSidebarData.map((data) => {
                        if(data.name == this.$route.name) {
                            data.show = 'active';
                            Event.$emit('clickMainSdiebar', data.name);
                        }else{
                            data.show = '';    
                        }
                    });
            }
        }
    }
</script>