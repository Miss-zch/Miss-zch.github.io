<template>
	<div>
		<div style="margin:20px 200px;min-height: 100px;overflow: hidden;">
			<div style="height: 50px;overflow: hidden;line-height: 50px;text-align: right;">
				<div class="no3_list_h" v-for="i in iii" @click="type_=i" style="display: inline-block;padding: 0px 20px;cursor: pointer;">
					{{i}}
				</div>
			</div>
			<div v-for="i in no3_arr" v-if="i.type == type_" style="width: 31%;padding: 10px;float: left;">
				<div>
					<img :src=i.img alt="" style="width: 100%;">
				</div>
				<div style="padding: 10px 0px;line-height: 28px;">
					<div style="color: #444;font-size: 16px;">{{i.name}}</div>
					<div style="color: #aaa;font-size: 13px;">{{i.text}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				iii:['冷冻生鲜','加工产品','农副产品'],
				type_:'冷冻生鲜',
				no3_arr:[
					{
						type:'冷冻生鲜',
						name:'牛肩肉',
						text:'可以对产品做一个简单介绍...',
						img:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9mMjE3MTA0ZTZkYzI0ZTZkNmNjZDA4MzNkZGJmZTY2MS00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'
					},
					{
						type:'冷冻生鲜',
						name:'外脊',
						text:'可以对产品做一个简单介绍...',
						img:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9mOGI1NzYwMmRjMGI5NTk1ZTEzNDNlZjg5Yzg0MzYxMC00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'
					},
					{
						type:'冷冻生鲜',
						name:'雪花肉',
						text:'可以对产品做一个简单介绍...',
						img:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC8xMzE4ODlhZTEwYjI5NWFiOGI5ZWNiYzM3ZTczMGNkZS00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'
					},
					{
						type:'加工产品',
						name:'火腿',
						text:'可以对产品做一个简单介绍...',
						img:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9mOGI1NzYwMmRjMGI5NTk1ZTEzNDNlZjg5Yzg0MzYxMC00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'
					},
					{
						type:'加工产品',
						name:'干吧肉',
						text:'可以对产品做一个简单介绍...',
						img:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9mMjE3MTA0ZTZkYzI0ZTZkNmNjZDA4MzNkZGJmZTY2MS00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'
					},
					{
						type:'加工产品',
						name:'带骨肉',
						text:'可以对产品做一个简单介绍...',
						img:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MzVmZDAzZWZmYWNjNGIwNmE4MDE0ZTc3NjYyZWY4Mi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'
					},
					{
						type:'农副产品',
						name:'牛百叶',
						text:'可以对产品做一个简单介绍...',
						img:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9jMTMxNjViYjM3ZjA1ZDE2MTQ4MzUzZDc3MmI1M2RiZi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'
					},
					{
						type:'农副产品',
						name:'牛板筋',
						text:'可以对产品做一个简单介绍...',
						img:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MzVmZDAzZWZmYWNjNGIwNmE4MDE0ZTc3NjYyZWY4Mi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'
					},
					{
						type:'农副产品',
						name:'牛棒骨',
						text:'可以对产品做一个简单介绍...',
						img:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC85MWVjZTczNGYxNWZmZWY1NjY0YmY5YTRjMDBkNTMwZi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'
					}
				]
			}
		}
	}
</script>
<style>
	.no3_list_h{
		color:#999;
	}
	.no3_list_h:hover{
		color:#000;
	}
</style>