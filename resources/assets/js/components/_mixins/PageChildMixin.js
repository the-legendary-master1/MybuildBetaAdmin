module.exports = {
	methods: {
	    tabsGetFunction(page_child_data, getData, parent_type, outputData) {
          var parent_name = this.$route.meta.name;
	      var storeData = [];

	      $.each(page_child_data, function(parent, page_children) {

	    if(page_children.parent_name == parent_name && page_children.parent_type == parent_type) {
	      $.each(getData, function(child, how_it_works_items) {
	        
	        if(how_it_works_items.id == page_children.child_id) {
	          storeData.push(how_it_works_items);
	        }

	      });
	    }

	      });
	      
	      return storeData;

	    }
	}
}