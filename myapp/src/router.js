import Vue from 'vue'
import Router from 'vue-router'
import no1 from './routes/no1.vue'
import no2 from './routes/no2.vue'
import no3 from './routes/no3.vue'
import no4 from './routes/no4.vue'
import no5 from './routes/no5.vue'
import no6 from './routes/no6.vue'

Vue.use(Router)

var routes = [
	{
	  path:'/',
	  name:'index',
	  component:no1
	},
	{
	  path:'/no2',
	  name:'pinpai',
	  component:no2
	},
	{
	  path:'/no3',
	  name:'chanpin',
	  component:no3
	},
	{
	  path:'/no4',
	  name:'zixun',
	  component:no4
	},
	{
	  path:'/no5',
	  name:'yangzhi',
	  component:no5
	},
	{
	  path:'/no6',
	  name:'us',
	  component:no6
	}
]

export default new Router({
	routes
})
