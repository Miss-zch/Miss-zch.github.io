<template>
	<div>
		<div style="height: 780px;">
	     	<div class="swiper-container">
	     	    <div class="swiper-wrapper">
	     	       	<div class="swiper-slide img_box">
						<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvZWM1OTM5ZWUyNDMxNjg0MWRmMmJkOTM4MWJjN2IyYTEuanBn.jpg" alt="">
	     	       	</div>
	     	       	<div class="swiper-slide img_box">
	     	       		<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvYzJhZjM3OWRjMDZkMDEwNDk0ZmJlNWZmYzcwNDc4ZDEuanBn.jpg" alt="">
	     	       	</div>
	     	    </div>
	     	     <!-- Add Arrows -->
	     	    <div class="swiper-button-next swiper-button-white"></div>
	     	    <div class="swiper-button-prev swiper-button-white"></div>
	     	</div>
	    </div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		mounted(){
			var swiper = new Swiper('.swiper-container', {
				autoplay:7000,
				speed:1000,
				loop: true,
				effect : 'fade',
			    navigation: {
			        nextEl: '.swiper-button-next',
			        prevEl: '.swiper-button-prev',
			    }
			});
		}
	}
</script>
<style>
	html, body {
     	position: relative;
     	height: 100%;
   	}
   	body {
     	background: #eee;
     	font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
     	font-size: 14px;
     	color:#000;
     	margin: 0;
     	padding: 0;
	}
	.swiper-container {
	  	width: 100%;
	  	height: 100%;
	}
   	.swiper-slide {
     	text-align: center;
     	font-size: 18px;
     	background: #fff;
    	/* Center slide text vertically */
    	display: -webkit-box;
     	display: -ms-flexbox;
     	display: -webkit-flex;
     	display: flex;
     	-webkit-box-pack: center;
     	-ms-flex-pack: center;
     	-webkit-justify-content: center;
     	justify-content: center;
     	-webkit-box-align: center;
     	-ms-flex-align: center;
     	-webkit-align-items: center;
     	align-items: center;
   	}
   	.img_box img{
   		width: 100%;
   		height:100%;
   	}
</style>