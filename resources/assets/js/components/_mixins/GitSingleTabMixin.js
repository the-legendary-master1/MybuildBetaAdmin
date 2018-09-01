module.exports = {
	methods: {
      tabSingleFunction(tabData) {
        var parent_name = this.$route.meta.name;
        var output = [];

        $.each(tabData, function(parent, data) {
          if(data.parent_name == parent_name) {
            output = data;
          }
        });
        return output;
      }
	}
}