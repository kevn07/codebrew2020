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
        padding-top: 18px;
        text-align: center;
    }
    
</style>