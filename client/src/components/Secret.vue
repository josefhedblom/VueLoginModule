<template>
    <div class="container">
        <iframe src="https://chromedino.com/" frameborder="0" scrolling="no" width="100%" height="100%" loading="lazy"></iframe>
    </div>
</template>

<script>

export default {
    name: 'Secret',
    created(){
        const verifyToken = localStorage.getItem('token');
        if(verifyToken === null){
            return this.$router.push('/login');
        }
    }
}
</script>

<style >
    iframe { height: 500px;}
</style>
