<!-- 
  Title: views/HomeView.vue 
  Author: abc 
  Email: abc@gmail.com
  Description: import Carousal Item from components.
  Date: 17 Aug 2022
  Copyright (c) BlooBloom, 2022
  Version:0.1.0
-->

<template>
<Header></Header>
  <main>
  

    <!-- grid  -->
    <div class="grid lg:grid-cols-3 md:grid-cols-2 divide-x divide-y" id="infinite-list">
       <!-- slides carousal items imported  -->
      <div v-for="glass in glasses"><Item :glass="glass"></Item></div>
    </div>
    <img v-if="isFetching" class="h-12 w-12 mx-auto my-10" src="@assets/loader.gif" />

  </main>
</template>

<script>
// item absolute import
import Item from "@components/Item/Item.vue";
import axios from "axios";
import Header from "@components/Header/index.vue";
export default {
  components: {
    Item,
    Header
  },
  data() {
    return {
      collection:"spectacles-women",
      glasses: [],
      page:0,
      hasMore:false,
      isFetching:false,
      filters:{
        lens_variant_prescriptions:"fashion",
        lens_variant_types:"classic",
        frame_variant_home_trial_available:false,
        glass_variant_frame_variant_colour_tag_configuration_names:[],
        glass_variant_frame_variant_frame_tag_configuration_names:[]
      }
    };
  },
  methods: {
   
    formatDate(dateString) {
      let convertedDate = new Date(dateString);
      return convertedDate.toDateString();
    },
    fetchGlasses(){
      this.page++;
      this.isFetching = true;
      let filters = "";
      Object.keys(this.filters).map((key)=>{
        if(typeof this.filters[key] == "string"){
          filters += `filters[${key}][]=${this.filters[key]}&`;
        } else if(typeof this.filters[key] == "object"){
          this.filters[key].map((item)=> {
            filters += `filters[${key}][]=${item}&`;
          })
        }
        
      });
      filters = filters.replace(/&\s*$/, "");
      axios.get(`https://api.bloobloom.com/user/v1/sales_channels/website/collections/${this.collection}/glasses?page[limit]=12&page[number]=${this.page}&${filters}`).then((response) => {
        
        this.glasses = this.page>1?this.glasses.concat(response.data.glasses):response.data.glasses;
        if(response.data.meta.total_count>this.glasses.length){
          this.hasMore = true;
        } else {
          this.hasMore = false;
        }
        this.isFetching = false;
      });
    },
    getNextGlasses() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight;
        if (bottomOfWindow && this.hasMore && this.isFetching == false) {
          this.fetchGlasses()
        }
      }
    }
  },
  beforeMount() {
    this.fetchGlasses();
  },
  mounted() {
    this.getNextGlasses();
  },
  watch: { 
     '$route': {
        handler: function(search) {
          if(search && search.query && search.query.colour){
            this.filters.glass_variant_frame_variant_colour_tag_configuration_names = search.query.colour.split("~");
          } else {
            this.filters.glass_variant_frame_variant_colour_tag_configuration_names = [];
          }
          if(search && search.query && search.query.shape){
            this.filters.glass_variant_frame_variant_frame_tag_configuration_names = search.query.shape.split("~");
          } else {
            this.filters.glass_variant_frame_variant_frame_tag_configuration_names = [];
          }
          if(search && search.params && search.params.slug){
            this.collection = search.params.slug;
          }
          if(search){
            this.page = 0;
            this.hasMore = true;
            this.isFetching = false;
            this.fetchGlasses();
          }
        },
        deep: true,
        immediate: true
      },
}
}
</script>
