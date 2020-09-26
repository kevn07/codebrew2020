<template>
    <div class="tile">
        <div class="tile-img">
            <img :src="require('@/assets/' + imageName + '')"/>
            
            <input type="checkbox"> {{ interestName }}
        </div>


    </div>
</template>

<script>
export default {
    name: "InterestTile",
    props: {
        imageName: String,
        interestName: String
    }
}
</script>

<style scoped>

    .tile {
        float: left;
        margin: auto;
        width: 33.33%;
        height: auto;
        
    }
    .tile-img{
        max-width: 95%;
        height: auto;
        margin: auto;
    }

    img {
        max-width: 100%;
        height: auto;
    }

</style>