<template>
 <div>
    <navbar />
    <section class="home">

<div class="image">
    <img src="images/Guitar.jpg" alt="">
</div>

<div class="content">
    <img src="images/Graph.png" alt="100px">
    <a href="about.html" class="btn"> about me <i class="fas fa-user"></i> </a>
</div>

</section>
 </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    components: { Navbar }
}
</script>

<style>

</style>