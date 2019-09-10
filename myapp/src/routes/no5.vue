<template>
	<div>
		<div style="margin: 20px 200px">
			<div style="text-align: center;">
				<div style="padding: 8px 0px;font-size: 20px;">养殖基地</div>
				<div>
					<span style="border-bottom: 1px solid #000;font-size: 12px;color: #999999;padding-bottom: 10px;">BASE</span>
				</div>
				<div style="min-height: 100px; overflow: hidden;padding: 50px 0px;">
					<div v-for="i in no5_imgarr" style="padding: 10px;float: left;width: 30%;">
						<img :src=i alt="" style="width: 100%;">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				no5_imgarr:['https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS82Njc4NjRjM2UyM2Q0OWI1YWIyNzk3NTIwY2FiNTEyNi00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg','https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8xZThlZDg5MzM4ZGZiZjZmYTU1MmY0OWRlNGFmOWZiMi00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg','https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8xY2FkNmNhNzk0ZDg0MTllYTQ0ODhkMjYwZWNkN2Y0ZS00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg']
			}
		}
	}
</script>
<style>
	
</style>