<template> 
    <div> <button @click.prevent="increment">increment</button> 
    <p>{{ $store.state.example.val }}</p> </div> </template> 
<script> 
import cookie from "cookie"; 
export default { 
    data() { 
        return { }; 
    }, 
    methods: { 
        increment() { 
            this.$store.commit("example/increment","완료");
        },
    },
}; 
</script> 
<style scoped> </style>
