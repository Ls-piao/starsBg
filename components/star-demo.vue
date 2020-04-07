<template>
  <div class="container">
    <div class="stars">
      <div class="star" ref="star" v-for="(item,index) in starCount" :key="index"></div>
    </div>
    <!-- <div class="imgs">
      <img src="./2.jpg" alt class="img1 animated fadeInRightBig delay-1s" />
      <img src="./love.jpg" alt class="love animated fadeIn delay-5s" />
      <img src="./1.jpg" alt class="img2 animated fadeInLeftBig delay-1s" />
    </div> -->
    <!-- <div class="content animated fadeIn delay-8s" ref='content'>
      <div class="txt">
        <span>祝你们两个新年快乐哟！！</span>
        <br />
        <span>一直在想送你们俩新年啥好，但是啥也抵不上最真挚的祝福吧 哈哈哈！</span>
        <br />
        <span>黄味精我最好的儿子！希望这次真的找到了对的人，好好的走下去，不要辜负了为父的一片苦心。</span>
        <br />
        <span>美丽的邓小姐~~ 这个我这个傻儿子就是傻了点别的啥都好，随便打随便骂不要客气。</span>
        <br />
        <span>祝你们幸福的一直走下去哟~</span>
      </div>
    </div> -->
    
    <!-- <div class="music">
        <audio src="http://hao.haolingsheng.com/ring/000/990/e464944b9d10e884a3f56be94964b9f8.mp3" loop autoplay></audio>
    </div> -->
    <!-- ------------------------------------------------------------------------------------------- -->
    <div id="lineChart" style="width:300px;height:400px" ></div> 
    <div id="mapChart" style="width:600px;height:400px" ></div> 
    

  </div>
</template>

<script>
export default {
  data() {
    return {
      //星星数量
      starCount: 800,
      //间距
      distance: 800
    };
  },
  mounted() {
    this.$chart.line('lineChart')
    this.$chart.map('mapChart')
    console.log(this.$chart.line('lineChart'))
    //星星
    let that = this;
    let starArr = that.$refs.star;
    console.log(starArr)
    starArr.forEach(item => {
      var speed = 0.2 + Math.random() * 1;
      var thisDistance = that.distance + Math.random() * 300;
      item.style.transformOrigin = `0 0 ${thisDistance}px`;
      item.style.transform = `translate3d(0,0,-${thisDistance}px) rotateY(${Math.random() *
        360}deg) rotateX(${Math.random() * -50}deg) scale(${speed},${speed})`;
    });
    //图片
    //     var t =  this.$refs.content
    // setTimeout(()=>{
    //    t.style.display = 'block' 
    // },8000)
  },
  methods:{
    zoom(){
      this.$chart.on('bmaproam', params => console.log(params))
    }

  }
};
</script>

<style lang="less" scoped>
.container{
  display: flex;
}
.content {
    position: fixed;
    left: 0;
    display: none;
    top:0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
  .txt {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 400px;
    height: 400px;
    color: #fff;
    font-weight: 600;
    line-height: 2;
  }
}
.animated {
  animation-duration: 2s;
}
//动画
@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
      rotatey(-360deg);
  }
}
.imgs {
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  img {
    margin: 20px;
    width: 200px;
    height: 300px;
    border-radius: 20px;
  }
  .love {
    width: 200px;
    height: 200px;
    margin-top: 100px;
  }
}
.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspective-origin: 50% 100%;
  left: 50%;
  bottom: 0;
  animation: rotate 90s infinite linear;
}
.star {
  width: 2px;
  height: 2px;
  background: #f7f7b8;
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
}
</style>