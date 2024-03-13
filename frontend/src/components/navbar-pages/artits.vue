<template>
    <h1 class="name-page"> Artists </h1>
    <ul>
        <li v-for="(cakes, index) in cakes" :key="index">
            <p v-show="cakes.picture">{{ cakes.picture }}</p><br>
            <p v-show="cakes.name">{{ cakes.name }}</p><br>
            <p v-show="cakes.description">{{ cakes.description }}</p>
        </li>
    </ul>

</template>

<script>
export default {
    name: 'AppArtist',
    data() {
        return {
            cakes: [
                { picture: 'pic1', name: 'Text1', description: 'Description 1' },
                { picture: 'pic2', name: 'Text2', description: 'Description 2' },
                { picture: 'pic3', name: 'Text3', description: 'Description 3' },
                { picture: 'pic4', name: 'Text4', description: 'Description 4' },
                { picture: 'pic5', name: 'Text5', description: 'Description 5' },
            ]
        }
    }
}
</script>

<style>
ul {
    display: flex;
    max-width: 1000px;
    margin: 20px auto;
    padding: 10px;
    box-sizing: border-box;
}

li {
    list-style: none;
    padding: 20px;
    margin: 10px;
    text-align: center;
    border: 1px solid #229966;
    flex-grow: 1;
}
</style>