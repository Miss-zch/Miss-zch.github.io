<template>
  <div id="app">
    <div class="index_header">
      <div style="padding: 20px 0px;">
        <img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNDA5ZGI4ZjgzODFlOTMwNTJlMzUzNzNkMTI2ZTMwMzYucG5n.png" alt="">
      </div>
      <my_nav></my_nav>
    </div>
    <div class="index_cont">
      <router-view></router-view>
    </div>
    <div class="index_footer">
      <div style="margin:0 200px;min-height: 100px;overflow: hidden;">
        <div class="index_footer_l">
          <div style="padding-bottom: 30px;font-size: 16px;">品牌生鲜网站</div>
          <div style="line-height: 28px;color: rgb(153, 153, 153);font-size: 13px;">
              <p>地址：苏州市工业园区金鸡湖大道099号大厦</p>
              <p>电话：000-66668888</p>
              <p>手机：12345678911</p>
              <p>传真：000-66668888</p>
              <p>邮箱：website@qq.com</p>
          </div>
        </div>
        <div class="index_footer_r">
          <div style="min-height: 50px; overflow: hidden;">
            <div class="small_int">
              <span>姓名<span style="color:red;">*</span></span>
              <input type="text" >
            </div>
            <div class="small_int">
              <span>电话<span style="color:red;">*</span></span>
              <input type="text" >
            </div>
            <div class="small_int">
              <span>邮箱<span style="color:red;">*</span></span>
              <input type="text" >
            </div>
          </div>
          <div>
            <p style="line-height: 40px;">内容<span style="color:red;">*</span></p>
            <textarea class="r_text"></textarea>
          </div>
          <div style="padding: 20px 0px;">
            <button style="padding: 10px 40px;outline: none;border:none;background:#f2f2f2;border:1px solid #ddd;">提交</button>
          </div>
        </div>
      </div>
      <div style="padding: 0px 200px;background:#f6f6f6f6;line-height: 50px;color: #888888;margin-top: 20px;">版权所有 ©2017   苏ICP备1230012300号</div>
    </div>
  </div>
</template>

<script>
  import my_nav from './components/my_nav.vue'
  export default {
    // name: 'app',
    data () {
      return {
        
      }
    },
    components:{
      my_nav
    }
  }
</script>

<style>
  html{
    background:#fff;
  }
  *{
    margin: 0;
    padding: 0;
  }
  .index_cont{
    background:#fff;
  }
  .index_header{
    text-align: center;
    background:#fff;
  }
  .index_footer{
    padding-top: 100px;
    border-top: 1px solid #f2f2f2;
    min-height: 150px;
    background:#fff;
  }
  .index_footer_l{
    width: 30%;
    float: left;
  }
  .index_footer_r{
    width: 70%;
    float: left;
  }
  .index_footer_r input{
    line-height: 40px;
    border:none;
    outline: none;
  }
  .small_int{
    width: 31%;
    float: left;
    border-bottom: 1px solid #cccccc;
    margin-right: 15px;
  }
  .r_text{
    max-width: 100%;
    border:none;
    border-bottom: 1px solid #cccccc;
    width: 100%;
    height: 50px;
    outline: none;
  }
</style>
