<!-- 
  Title: components/Header/index.vue 
  Author: abc 
  Email: abc@gmail.com
  Description: Header.
  Date: 17 Aug 2022
  Copyright (c) BlooBloom, 2022
  Version:0.1.0
-->
<template>
  <header>
    <!-- grid  -->
    <div class="grid grid-cols-3">
      <div class="my-auto relative h-full">
        <!-- menu start  -->
        <div class="humburger h-full w-24">
          <p
            class="cursor-pointer w-full flex items-center justify-center h-full uppercase"
          >
            Menu
          </p>
          <!-- menu on hover transition from left  -->
          <div
            class="humburger-menu bg-white absolute border-r shadow-sm flex flex-col z-20"
          >
            <div class="grow">
              <!-- menu item  -->
              <RouterLink
                to="/"
                class="menu uppercase border-y p-4 flex items-center justify-between hover:bg-black hover:text-white"
                >Spectacles
                <!-- arrow svg icon  -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <!--sub menu -->
                <ul
                  class="sub-menu md:bg-white bg-gray-200 z-10 md:rounded shadow-sm"
                >
                  <!-- sub menu item  -->
                  <router-link :to="{ name: 'collections', params: { slug: 'spectacles-women' }}">

                  <li
                    class="p-3 uppercase text-black hover:bg-black hover:text-white"
                  >
                    Women
                  </li>
                  </router-link>
                  <!-- sub menu item  -->
                  <router-link :to="{ name: 'collections', params: { slug: 'spectacles-men' }}">
                  <li
                    class="p-3 uppercase text-black hover:bg-black hover:text-white"
                  >
                    Men
                  </li>
                  </router-link>
                </ul>
              </RouterLink>
              <!-- menu item  -->
              <RouterLink
                to="/"
                class="menu uppercase border-b p-4 flex items-center justify-between hover:bg-black hover:text-white"
                >Sunglasses
                <!-- arrow svg icon  -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <!--sub menu -->
                <ul
                  class="sub-menu md:bg-white bg-gray-200 z-10 md:rounded shadow-sm"
                >
                  <!-- sub menu item  -->
                  <router-link :to="{ name: 'collections', params: { slug: 'sunglasses-women' }}">
                  <li class="p-3 text-black hover:bg-black hover:text-white">
                    Women
                  </li>
                  </router-link>
                  <!-- sub menu item  -->
                  <router-link :to="{ name: 'collections', params: { slug: 'sunglasses-men' }}">
                  <li class="p-3 text-black hover:bg-black hover:text-white">
                    Men
                  </li>
                  </router-link>
                </ul>
              </RouterLink>
              <!-- menu item  -->
              <RouterLink
                to="/"
                class="menu uppercase border-b p-4 flex items-center justify-between hover:bg-black hover:text-white"
                >Home Try On
              </RouterLink>
              <!-- menu item  -->
              <RouterLink
                to="/"
                class="menu uppercase border-b p-4 flex items-center justify-between hover:bg-black hover:text-white"
                >Pair For Pair
              </RouterLink>
            </div>
            <p class="text-center text-gray-400 text-[13px] pb-4">
              Version:0.1.0
            </p>
          </div>
        </div>
      </div>
      <!-- menu item  -->
      <div class="py-2">
        <!-- logo  -->
        <img
          alt="logo"
          class="logo mx-auto"
          src="@assets/logo.png"
          width="25"
          height="25"
        />
      </div>
    </div>
    <!-- grid  -->
    <div class="grid grid-cols-3 border-y divide-x">
      <div></div>

      <div class="lg:py-2 py-4 lg:col-span-1 col-span-3 lg:border-0 border-b">
        <h1 class="uppercase text-center Medium lg:text-[22px] text-[17px]">
          {{title(collection)}}
        </h1>
      </div>
      <div class="lg:col-span-1 col-span-3">
        <!-- grid  -->
        <div class="grid lg:grid-cols-3 grid-cols-2 divide-x h-full">
          <!-- color filters  -->
          <div
            v-on:click="isShowing = !isShowing"
            class="py-2 cursor-pointer flex items-center justify-center hover:underline"
          >
            <div class="relative">
              <p>Color</p>
              <!-- color count  -->
              <p
                class="absolute top-0 -right-4 shadow-md bg-gray-100 h-4 w-4 flex items-center justify-center rounded-full text-[9px]"
                v-if="colour.length>0"
              >
                {{colour.length}}
              </p>
            </div>
          </div>
          <!-- shape filters  -->
          <div
            v-on:click="isShowing = !isShowing"
            class="py-2 cursor-pointer flex items-center justify-center hover:underline"
          >
            <div>
              <p>Shape</p>
              <!-- shape count  -->
              <p
                class="absolute top-0 -right-4 shadow-md bg-gray-100 h-4 w-4 flex items-center justify-center rounded-full text-[9px]"
                v-if="shape.length>0"
              >
                {{shape.length}}
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <!-- shape and color filters expanded and collapsed  -->
    <div
      :class="
        'transition-all ease-in-out duration-300 ' +
        (isShowing ? 'lg:h-[260px] h-[480px]' : 'h-[0px]')
      "
    >
      <div class="grid lg:grid-cols-2 divide-x selections">
        <div>
          <p class="Medium text-center border-b py-3 uppercase">Color</p>
          <!-- grid   -->
          <div class="grid grid-cols-3 gap-y-5 py-4 relative px-10">
            <!-- color multi-selection  -->

            <div className="flex" v-for="color in availableColours">
              <input
                type="checkbox"
                className="z-0 absolute left-0 invisible"
                :id="color"
                :checked="colour.includes(color)"
                @change="applyFilter('colour',color)"
              />
              <label
                :htmlFor="color"
                className="flex items-center gap-x-2 hover:opacity-90 cursor-pointer"
              >
                <div class="rounded-full border border-transparent p-[1.5px]">
                  <div class="h-4 w-4 bg-black rounded-full overflow-hidden">
                    <img
                      v-if="color=='coloured'"
                      alt="coloured"
                      class="h-full w-full mx-auto"
                      src="@assets/filters_coloured.png"
                    />
                    <img
                      v-if="color=='tortoise'"
                      alt="Tortoise"
                      class="h-full w-full mx-auto"
                      src="@assets/filters_tortoise.png"
                    />
                    <img
                      v-if="color=='crystal'"
                      alt="crystal"
                      class="h-full w-full mx-auto"
                      src="@assets/filters_crystal.png"
                    />
                    <img
                      v-if="color=='dark'"
                      alt="dark"
                      class="h-full w-full mx-auto"
                      src="@assets/filters_dark.png"
                    />
                    <img
                      v-if="color=='bright'"
                      alt="bright"
                      class="h-full w-full mx-auto"
                      src="@assets/filters_bright.png"
                    />
                    <div v-if="color=='black'" class="h-4 w-4 bg-black rounded-full"></div>
                  </div>
                </div>
                <p>{{capitalising(color)}}</p>
              </label>
            </div>

          </div>
        </div>
        <div>
          <p
            class="Medium text-center border-b py-3 uppercase lg:border-t-0 border-t"
          >
            Shape
          </p>
          <!-- grid  -->
          <div class="grid grid-cols-4 px-10 lg:py-10 py-3">
            <!-- shape multi-selection  -->
            <div>
              <input
                type="checkbox"
                className="z-0 absolute left-0 invisible"
                id="Square"
                :checked="shape.includes('square')"
                @change="applyFilter('shape','square')"
              />
              <label
                htmlFor="Square"
                className="flex items-center gap-x-2 hover:opacity-90 rounded-full cursor-pointer"
              >
                <p className="border-b-2 border-transparent">Square</p>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="z-0 absolute left-0 invisible"
                id="Rectangle"
                :checked="shape.includes('rectangle')"
                @change="applyFilter('shape','rectangle')"
              />
              <label
                htmlFor="Rectangle"
                className="flex items-center gap-x-2 hover:opacity-90 cursor-pointer"
              >
                <p className="border-b-2 border-transparent">Rectangle</p>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="z-0 absolute left-0 invisible"
                id="Round"
                :checked="shape.includes('round')"
                @change="applyFilter('shape','round')"
              />
              <label
                htmlFor="Round"
                className="flex items-center gap-x-2 hover:opacity-90 cursor-pointer"
              >
                <p className="border-b-2 border-transparent">Round</p>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="z-0 absolute left-0 invisible"
                id="Eye"
                :checked="shape.includes('cat-eye')"
                 @change="applyFilter('shape','cat-eye')"
              />
              <label
                htmlFor="Eye"
                className="flex items-center gap-x-2 hover:opacity-90 cursor-pointer"
              >
                <p className="border-b-2 border-transparent">Cat-Eye</p>
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- grid  -->
      <div class="grid lg:grid-cols-4 grid-cols-1 divide-x border-t">
        <div class="py-3 lg:px-10 px-5 lg:col-span-2">
          <div class="flex flex-wrap gap-3">
            <!-- color and shape selected pills  -->
            <div
              class="bg-gray-200 hover:bg-gray-300 rounded-xl py-2 px-4 flex items-center gap-x-2"
              v-for="color in colour" 
            >
              <p class="text-[13px] uppercase">{{color}}</p>
              <div @click="applyFilter('colour',color)" class=" cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <div
              class="bg-gray-200 hover:bg-gray-300 rounded-xl py-2 px-4 flex items-center gap-x-2"
              v-for="sh in shape" 
            >
              <p class="text-[13px] uppercase">{{sh}}</p>
              <div @click="applyFilter('shape',sh)" class=" cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </header>
  <RouterView />
</template>
<script>
// styling css
import "./styles.css";
export default {
  props: ['totalCount'],
  data() {
    return {
      total:0,
      collection:"SPECTACLES WOMEN",
      isShowing: false,
      colour:[],
      shape:[],
      availableColours:['black', 'tortoise', 'coloured', 'crystal', 'dark', 'bright']
    };
  },
  methods: {
    title(string){
      return string.replace(/-/g, " ");
    },
    capitalising(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    setTotalCount(total){
      this.total = total;
    },
    applyFilter(type, value) {
      if(type=="colour"){
          if(!this.colour.includes(value)){
            this.colour.push(value);
        }else{
            this.colour.splice(this.colour.indexOf(value), 1);
        }
      } else if(type=="shape"){
        if(!this.shape.includes(value)){
            this.shape.push(value);
        }else{
            this.shape.splice(this.shape.indexOf(value), 1);
        }
      }
      let params = {};
      if(this.shape.length>0){
        params['shape'] = this.shape.join('~');
      }
      if(this.colour.length>0){
        params['colour'] = this.colour.join('~');
      }
      this.$router.replace({ query: params });
      
      
    },
  },
  watch: { 
     '$route.query': {
        handler: function(search) {
          if(search && search.colour){
            this.colour = search.colour.split("~");
          }
          if(search && search.shape){
            this.shape= search.shape.split("~");
          }
        },
        deep: true,
        immediate: true
      },
      '$route.params': {
        handler: function(search) {
          if(search && search.slug){
            this.collection = search.slug;
          }
        },
        deep: true,
        immediate: true
      }
}
};

</script>
