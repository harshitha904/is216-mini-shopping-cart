<!-- for getting the api (look at the method and the url in the postman screenshot) -->
<!-- each call is one request, value is what u give for the fixed keys on the api side -->
<script setup>
import {ref, computed, onMounted} from 'vue'
import axios from 'axios'


const blogs = ref([]) //this is based on how it is giving back the data (look at screenshot)
onMounted (async () => {
    let url = "http://localhost:8000/posts"


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

})
</script>
