<template>
    <div class="card" :style="backgroundStyles(image)">
        <div class="info">
            <h1 class="title">{{ name }}</h1>
            <p class="description">
                {{ description }}
            </p>
            <button class="button">Ver más</button>
        </div>
    </div>
</template>

<script>
export default {
  props: ['id', 'name', 'description', 'image', 'url', 'category'],
  methods: {
    backgroundStyles (image) {
      return {
        backgroundImage: `url(${image})`
      }
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 16px;
  margin: 0 auto;
  width: 540px;
  max-width: 100%;
  min-height: 300px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14),
    0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  background-size: cover;
  background-position: center;
}
.info {
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #fff;
  transform: translateY(100%)
    translateY(-88px)
    translateZ(0);
  transition: transform 0.5s ease-out;
}
.info:before {
  z-index: -1;
  display: block;
  position: absolute;
  content: ' ';
  width: 100%;
  height: 100%;
  overflow: hidden;
  filter: blur(10px);
  background-size: cover;
  opacity: 0.25;
  transform: translateY(-100%)
    translateY(88px)
    translateZ(0);
  transition: transform 0.5s ease-out;
}
.card:hover .info,
.card:hover .info:before {
  transform: translateY(0) translateZ(0);
}
.title {
  margin: 0;
  padding: 30px 30px 30px 24px ;
  font-size: 32px;
  font-weight: bold;
  line-height: 1;
  color: rgba(0, 0, 0, 0.87);
}
.description {
  margin: 0;
  padding: 0 24px 24px;
  font-size: 18px;
  line-height: 1.5;
}
.button {
  color: white;
  background-color: #52B96F;
  padding: 12px 16px;
  border-radius: 6px;
  margin-left: 24px;
}
.button:hover,
.button:focus {
    color: white;
    background-color: #3b814f;
    cursor: default;
}
h1 {
  margin-bottom: 0.5em;
  font-weight: inherit;
  line-height: 1.2;
  color: #1c5b72;
  font-size: 2.618em
}
@media (min-width: 280px){
  .title{
    font-size: 22px;
    padding: 20px 20px 16px 20px ;
  }
  .description{
    margin: 0;
    padding: 0 20px 10px;
    font-size: 15px;
    line-height: 1.51;
  }
  .info{
    transform: translateY(100%)
    translateY(-60px)
    translateZ(0);
    height: 270px;
  }
  .button {
    font-weight: bold;
    font-size: 14px;
    padding: 8px 16px;
    margin-left: 20px;
  }
  .card {
    min-height: 270px;
  }
}
@media (min-width: 640px){
  .title{
    font-size: 22px;
    padding: 20px 20px 20px 20px ;
  }
  .description{
    margin: 0;
    padding: 0 20px 20px;
    font-size: 14px;
    line-height: 1.4;
  }
  .info{
    transform: translateY(100%)
    translateY(-60px)
    translateZ(0);
  }
}
@media (min-width:768px) {
  h1 {
    font-size: 4.236em;
    font-weight: 300
  }
  p {
    font-size: 1.3em
  }
}
@media (min-width: 1024px) {
  .title{
    font-size: 24px;
    padding: 28px 28px 28px 24px ;
  }
  .description {
    margin: 0;
    padding: 0 24px 24px;
    font-size: 16px;
    line-height: 1.4;
  }
  .info{
    transform: translateY(100%)
    translateY(-74px)
    translateZ(0);
    height: 320px;
  }
  .card{
    min-height: 320px;
  }
  .button {
    font-weight: bold;
    font-size: 14px;
    padding: 10px 16px;
    margin-left: 24px;
  }
}
@media (min-width: 1280px) {
  .title{
    font-size: 26px;
    padding: 28px 28px 28px 24px ;
  }
  .description {
    margin: 0;
    padding: 0 24px 24px;
    font-size: 16px;
    line-height: 1.6;
  }
  .info{
    transform: translateY(100%)
    translateY(-74px)
    translateZ(0);
    height: 300px;
  }
  .card{
    min-height: 300px;
  }
  .button {
    font-weight: bold;
    font-size: 14px;
    padding: 10px 16px;
    margin-left: 24px;
  }
}

p {
  margin-bottom: 1.3em;
  line-height: 1.618
}
a {
  color: #e03616;
  text-decoration: none
}
</style>
