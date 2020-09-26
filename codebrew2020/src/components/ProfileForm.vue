<template>
    <div>
        <div class="questions-container">
        
            <h4>Select all interests that apply to you</h4>
            
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