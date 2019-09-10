<template>
	<div>
		<div style="height: 500px;margin:20px 200px;">
			<div id="container">
			
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
			var map = new BMap.Map("container");          // 创建地图实例  
			var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
			map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  
			map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
			map.addControl(new BMap.NavigationControl());    
			map.addControl(new BMap.ScaleControl());    
			map.addControl(new BMap.OverviewMapControl());    
			map.addControl(new BMap.MapTypeControl());    
			map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用   
		}
	}
</script>
<style>
	#container{height:100%}
</style>