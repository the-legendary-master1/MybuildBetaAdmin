<template>
  <div>

    <div class="tab-panel" id="sections">

       <div class="input-txt-group">
           <div class="input-group txt-titles-wrapper">
               <label>Display Call To Action</label>
           </div>
           <div class="input-group txt-field-wrapper">
               <b-checkbox size="is-small" v-bind:true-value="1" v-bind:false-value="0"></b-checkbox>
           </div>
       </div>

       <div class="input-txt-group">
           <div class="input-group txt-titles-wrapper">
               <label>Display Subscribe</label>
           </div>
           <div class="input-group txt-field-wrapper">
               <b-checkbox size="is-small" v-bind:true-value="1" v-bind:false-value="0"></b-checkbox>
           </div>
       </div>

       <div class="input-txt-group">
           <div class="input-group txt-titles-wrapper">
               <label>Display Related Articles</label>
           </div>
           <div class="input-group txt-field-wrapper">
               <b-checkbox size="is-small" v-bind:true-value="1" v-bind:false-value="0"></b-checkbox>
           </div>
       </div>

    </div>

  </div>
</template>