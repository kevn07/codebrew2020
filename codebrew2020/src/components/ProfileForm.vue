<template>
    <div>
        <div class="questions-container">
        
            <h4>Select all interests that apply to you</h4>

            <InterestTile imageName="soccah.jpeg" interestName="Sports"/>
            <InterestTile imageName="dancing.jpg" interestName="Dancing"/>
            <InterestTile imageName="chess.jpeg" interestName="Board games"/>
            <InterestTile imageName="gardening.jpeg" interestName="Gardening"/>
            <InterestTile imageName="knitting.jpeg" interestName="Knitting"/>
            <InterestTile imageName="painting.jpeg" interestName="Painting"/>
            
            <div>
              <a class="btn" href="/matched">Match Me!</a>
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
    h4 {
        padding: 18px 0;
        text-align: center;
    }

</style>