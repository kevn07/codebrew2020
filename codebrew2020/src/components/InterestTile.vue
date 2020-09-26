<template>
    <div>

        <img :src="require('@/assets/' + imageName + '')" height="130px" width="130px"/>
        <div>
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

</style>