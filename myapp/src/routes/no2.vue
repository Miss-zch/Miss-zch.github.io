<template>
	<div>
		<div style="text-align: center;margin: 0px 200px;">
			<div style="padding: 50px 0px;">
				<div style="padding: 8px 0px;font-size: 20px;">品牌简介</div>
				<div><span style="border-bottom: 1px solid #000;font-size: 12px;color: #999999;padding-bottom: 10px;">ABOUT</span></div>
				<div style="color: #999999;font-size: 14px; line-height: 28px;padding: 20px 0px;">
					我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件。我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件。我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件…
				</div>
			</div>
			<div style="padding: 50px 0px;">
				<div style="padding: 8px 0px;font-size: 20px;">合作伙伴</div>
				<div><span style="border-bottom: 1px solid #000;font-size: 12px;color: #999999;padding-bottom: 10px;">PARTNER</span></div>
				<div style="color: #999999;font-size: 14px; line-height: 28px;padding: 20px 0px;min-height: 50px;overflow: hidden;">
					<div v-for="i in no2_arr" style="float: left;width: 16.5%">
						<img :src=i.img alt="" style="width: 100%;">
					</div>
				</div>
			</div>
			<div style="padding: 50px 0px;">
				<div style="padding: 8px 0px;font-size: 20px;">人才招聘</div>
				<div><span style="border-bottom: 1px solid #000;font-size: 12px;color: #999999;padding-bottom: 10px;">RECRUIT</span></div>
				<div style="text-align: left;padding-top: 100px;min-height: 100px;overflow: hidden;">
					<div style="width: 50%;float: left;">
						<div style="font-size: 18px;">应聘岗位：</div>
						<div class="no2_text">
							<div class="font_h">一、资格要求</div>
							<p>1.道德品质良好；</p>
							<p>2.身体健康；</p>
							<p>3.成绩优良，研究生须通过国家英语六级考试，本科生通过国家英语四级考试。</p>
							<div class="font_h">二、招聘安排</div>
							<p>1.即日起接收简历投递，截止日期2016年12月31日；</p>
							<p>2.面试时间另行通知（具体时间以短信形式通知）。</p>
							<div class="font_h">三、应聘方式</div>
							<p>1.登陆企业网站（www.xxx.com.cn），按要求成功投递电子报名表及登记表视为应聘有效，不接收纸质简历应聘；</p>
							<p>2.应聘报名表和信息登记表请以同一邮件中两个附件的形式发送至邮箱：邮箱：123@163.com。</p>
							<p>3.人事处联系电话：0000-8888</p>
						</div>
					</div>
					<div style="width: 50%;float: left;text-align: center;">
						<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS81M2IxMDFjZTkxMDRiNzdjMmNiZDU2ZmRhYjQwYjU5NS00NDB4NTE2LnBuZw_p_p100_p_3D_p_p100_p_3D.png" alt="">
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
				no2_arr:[
					{
						img:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MGNkOTE5ODczMmZkZjhmM2EyNDJlMDQ5MzRiMGYzZC5wbmc_p_p100_p_3D.png'
					},
					{
						img:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC85MTRmNDQ0YzkyZDQ2N2FkNTE4NDYxOTY5NGJhY2YyMy5wbmc_p_p100_p_3D.png'
					},
					{
						img:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC80ZDYwNmViNDIxNDYwNzdjMjlkMzIxNDVkNTg3MmJiOC5wbmc_p_p100_p_3D.png'
					},
					{
						img:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9iOTIzMGIzZGYxMjE5OWI1NGQ0YmQ1ZGY0OTM1YTdlNi5wbmc_p_p100_p_3D.png'
					},
					{
						img:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9jNmUwM2FlYzM2ZDg4MGIzZWY4YzczOGYxZWU1MDcxNi5wbmc_p_p100_p_3D.png'
					},
					{
						img:'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9kYjU5YTY1NTNjNDJjMjdlMTcwOWViNjQ5ODY0YTVlYi5wbmc_p_p100_p_3D.png'
					}
				]
			}
		}
	}
</script>
<style>
	.font_h{
		font-size: 16px;
		padding-top: 50px;
	}
	.no2_text p{
		color: #999999;
		font-size: 14px;
		line-height: 26px;
	}
</style>