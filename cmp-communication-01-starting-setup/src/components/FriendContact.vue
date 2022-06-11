<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
     <button @click="$emit('delete',id)">Delete</button>
  </li>
</template>

<script>
export default {
  props:{
    id:{
      type:String,
      required:true
    },
    name:{
      type:String,
      required:true
    },
    phoneNumber:{
      type:String,
      required:true
    },
    emailAddress:{
      type:String,
      required:true
    }
    },
    emits:['delete']
  ,
  data() {
    return {
      detailsAreVisible: false,
      
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    
  }
};
</script>