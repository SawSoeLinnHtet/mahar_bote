<template>
    <div class="container-fluid p-0">
        <Header/>

        <div class="main">
            <div class="container py-5 px-mb-5">
                <router-view/>
            </div>
        </div>

        <Footer/>
    </div>
</template>

<script>
    import Header from '@/components/Layouts/Header'
    import Footer from '@/components/Layouts/Footer'

    export default {
        data() {
            return {
                seasons: ''
            }
        }, 
        components: {
            Header, Footer    
        }
    }

    
</script>

<style>

</style>
