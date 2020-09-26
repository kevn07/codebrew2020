<template>
    <div>
        <div class="questions-container">
        
            <h4>Select all interests that apply to you</h4>

            <InterestTile imageName="soccah.jpeg" interestName="soccer"/>
            <InterestTile imageName="dancing.jpg" interestName="dancing"/>
            <InterestTile imageName="chess.jpeg" interestName="board games"/>
            <InterestTile imageName="gardening.jpeg" interestName="gardening"/>
            <InterestTile imageName="knitting.jpeg" interestName="knitting"/>
            <InterestTile imageName="painting.jpeg" interestName="painting"/>
            

            <InterestTile imageName="testimg.jpeg" interestName="soccer"/>
            <div>
              <a class="btn" href="/home">Home</a>
            </div>
        </div>
    </div>
</template>

<script>
import InterestTile from './InterestTile'
export default {
  name: 'ProfileForm',
  components: {
      InterestTile
  }
}
</script>

<style scoped>
  
</style>