<template>
  <div class="container">
    <!-- <div class="pics" v-for="(item,index) in imgs" :key="index" @click="toView(item.id)">
      <img class="imgs" :src="item.url" alt />
      <div>{{index}}</div>
    </div>
    <div class="mask" v-if="isShow" @click.self="isShow=false">
      <div class="content left">
        <button @click="changeIndex('left')">←</button>
        <img :src="imgs[leftIndex].url" alt="">
        <div>{{leftIndex}}/{{AllIndex}}</div>
        <button @click="changeIndex('right')">→</button>
      </div>
      <div class="content right">
        <button @click="changeIndex2('left')">←</button>
          <img :src="imgs[rightIndex].url" alt="">
        <div>{{rightIndex}}/{{AllIndex}}</div>
        <button @click="changeIndex2('right')">→</button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          id: 0,
          url: "http://p0.so.qhmsg.com/t01c77874eac19cbcca.jpg"
        },
        {
          id: 1,
          url: "http://p1.so.qhmsg.com/t01604fb7594bc1ccf6.jpg"
        },
        {
          id: 2,
          url: "https://p3.ssl.qhimgs1.com/sdr/400__/t0191b7e97d3a52e253.jpg"
        },
        {
          id: 3,
          url: "https://p0.ssl.qhimgs1.com/sdr/400__/t010c9db52279cf3100.jpg"
        }
      ],
      isShow: false,
      leftIndex: 0,
      rightIndex: 0,
      AllIndex: 0
    };
  },
  methods: {
    toView(id) {
      this.isShow = true;
      this.leftIndex = id;
      this.rightIndex = id;
      this.AllIndex = this.imgs.length;
    },
    changeIndex(type) {
      switch (type) {
        case "left":
          if (this.leftIndex == 0) {
            this.leftIndex = 3;
          } else {
            this.leftIndex--;
          }
          break;
        case "right":
          if (this.leftIndex == 3) {
            this.leftIndex = 0;
          } else {
            this.leftIndex++;
          }
      }
    },
    changeIndex2(type) {
      switch (type) {
        case "left":
          if (this.rightIndex == 0) {
            this.rightIndex = 3;
          } else {
            this.rightIndex--;
          }
          break;
        case "right":
          if (this.rightIndex == 3) {
            this.rightIndex = 0;
          } else {
            this.rightIndex++;
          }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  .pics {
    display: inline-block;
    padding: 30px;
    width: 100px;
    height: 100px;
    .imgs {
      width: 100px;
      height: 100px;
    }
  }
  .mask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: space-evenly;
    .content {
      img{
        width: 200px;
        height: 200px
      }
      div{
        color: #fff
      }
    }
  }
}
</style>
