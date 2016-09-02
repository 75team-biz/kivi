<template>
<div>
    <h1>website</h1>
    <ul id="nav">
        <li>
            <a v-link.literal="/home">Home</a>
        </li>
        <li>
            <a v-link.literal="/blog">Blog</a>
        </li>
        <li>
            <a v-link.literal="/about">About</a>
        </li>
    </ul>
    <router-view></router-view>
</div>
</template>

<script>
export default {}
</script>
