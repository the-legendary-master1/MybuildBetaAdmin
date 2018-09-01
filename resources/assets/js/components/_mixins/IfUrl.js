module.exports = {
	methods: {
      ifUrlName(parent_name) {
        if(this.$route.meta.name == parent_name) {
          this.isActive = true;
          $('.tab-panel').removeAttr('style');
        }else{
          this.isActive = false;
        }
      }
	}
}