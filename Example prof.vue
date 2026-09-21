<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

import CustomCard from '../components/CustomCard.vue'

const blogs = ref( [ ] )

onMounted( async () => {
    let url = "http://localhost:8000/posts"

    // let url = "https://api.openweathermap.org/data/2.5/weather"

    // let latValue = "1.296568"
    // let lonValue = "103.852119"
    // let apiKey = "5a4737aaae079f2032033f40e1e58a2e"

    try {
        let response = await axios.get(url, {
            params: {
            }
        })

        console.log(response.data)

        blogs.value = response.data
    } catch(error) {
        console.log(error.message)
    }


}  )



</script>

<template>

    <h1>Welcome to my blogs</h1>

    <!-- native HTML eleemnt with native attribute like src -->
    <img src="" alt="">

    <!-- custom HTML element with custom attributes -->
    <CustomCard v-for = "blog in blogs" v-bind:entry="blog.entry" v-bind:img-src="blog.mood"> </CustomCard>

    <!-- <CustomCard entry="hello world" img-src="/happy.png" ></CustomCard>


    <CustomCard entry="goodbye world" img-src="/sad.png" ></CustomCard> -->

    <!-- <div class="card w-50" v-for = "blog in blogs">
        <img v-bind:src="'/' + blog.mood.toLowerCase() + '.png'" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"> {{  blog.subject }}  </h5>
            <p class="card-text">{{ blog.entry }}</p>
            <a href="#" class="btn btn-primary" v-on:click="doLike" >#Likes {{ likes }}</a>
            <a href="#" class="btn btn-danger" @click="doUnlike">#DisLikes {{  unlikes }}</a>
        </div>
    </div> -->





</template>

<style scoped></style>