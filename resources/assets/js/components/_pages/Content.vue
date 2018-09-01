<template>
	<div  class="content-wrapper">
        <div class="myb-panel">
            <div class="form-horizontal tab-content">
            	
            	<!-- Pate Tab -->
            	<Homecontent></Homecontent>
            	<Housedesign></Housedesign>
            	<Builders></Builders>
            	<Howitworks></Howitworks>
            	<Yourstories></Yourstories>
            	<Articles></Articles>
            	<Contact></Contact>
            	<Compare></Compare>

				<!-- Icludes Tab -->
				<Location></Location>
				<Logos></Logos>
				<Calltoaction></Calltoaction>
				<Seo></Seo>
				<Contactinformation></Contactinformation>
				<Social></Social>
				<Subscribe></Subscribe>
				<Headfooter></Headfooter>
				<Instagram></Instagram>
				<Sections></Sections>
				<Enquirycalltoaction></Enquirycalltoaction>
				<Equiryform></Equiryform>
				<Customdesignform></Customdesignform>
				<Promotion></Promotion>
				<Producttypemodalmessage></Producttypemodalmessage>
				<Defaultimages></Defaultimages>
				<Slider></Slider>
				<Info></Info>

            </div>
        </div>
		
		<Contentfooter></Contentfooter>
	</div>
</template>

<script>
	let Contentfooter = require('../_includes/Contentfooter.vue');
	let Homecontent = require('../_subpages/Homecontent.vue');
	let Housedesign = require('../_subpages/Housedesign.vue');
	let Builders = require('../_subpages/Builders.vue');
	let Howitworks = require('../_subpages/Howitworks.vue');
	let Yourstories = require('../_subpages/Yourstories.vue');
	let Articles = require('../_subpages/Articles.vue');
	let Contact = require('../_subpages/Contact.vue');
	let Compare = require('../_subpages/Compare.vue');

  /*child*/
	let Location = require('../_tabspages/Location.vue');
	let Logos = require('../_tabspages/Logos.vue');
	let Calltoaction = require('../_tabspages/Calltoaction.vue');
	let Seo = require('../_tabspages/Seo.vue');
	let Contactinformation = require('../_tabspages/Contactinformation.vue');
	let Social = require('../_tabspages/Social.vue');
	let Subscribe = require('../_tabspages/Subscribe.vue');
	let Headfooter = require('../_tabspages/Headfooter.vue');
	let Instagram = require('../_tabspages/Instagram.vue');
	let Sections = require('../_tabspages/Sections.vue');
	let Enquirycalltoaction = require('../_tabspages/Enquirycalltoaction.vue');
	let Equiryform = require('../_tabspages/Equiryform.vue');
	let Customdesignform = require('../_tabspages/Customdesignform.vue');
	let Promotion = require('../_tabspages/Promotion.vue');
	let Producttypemodalmessage = require('../_tabspages/Producttypemodalmessage.vue');
	let Defaultimages = require('../_tabspages/Defaultimages.vue');
	let Slider = require('../_tabspages/Slider.vue');
	let Info = require('../_tabspages/Info.vue');

	export default {
		components: {
			Contentfooter,
			Homecontent,
			Housedesign,
			Builders,
			Howitworks,
			Yourstories,
			Articles,
			Contact,
			Compare,

			Location,
			Logos,
			Calltoaction,
			Seo,
			Contactinformation,
			Social,
			Subscribe,
			Headfooter,
			Instagram,
			Sections,
			Enquirycalltoaction,
			Equiryform,
			Customdesignform,
			Promotion,
			Producttypemodalmessage,
			Defaultimages,
			Slider,
			Info,
		},
		data() {
			return {
			}
		},
		mounted() {
			if(!token){
				this.$router.push('/login');
			}
		},
		methods: {
		}
	}
</script>