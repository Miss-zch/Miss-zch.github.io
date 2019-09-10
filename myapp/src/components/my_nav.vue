<template>
	<div id="my_nav">
		<div style="line-height: 50px;border-bottom: 1px solid #f2f2f2;">
			<div v-for="i in arr" class="nav_no1" >
		     	<a :href="i.path">
		     		{{i.title}}
		     	</a>
		     </div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				arr: [
					{title:'首页',path:'#/'},
					{title:'品牌介绍',path:'#/no2'},
					{title:'产品中心',path:'#/no3'},
					{title:'资讯动态',path:'#/no4'},
					{title:'养殖基地',path:'#/no5'},
					{title:'联系我们',path:'#/no6'},
				]
			}
		}
	}
</script>
<style>
	.nav_no1{
    	display: inline-block;
        padding: 0  25px;
    }
     #my_nav a{
     	color: #000;
     	text-decoration: none;
     }

</style>