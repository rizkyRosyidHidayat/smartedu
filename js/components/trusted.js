Vue.component('trusted-section', {
	template: `
		<section class="trusted spacing-section">
			<div class="container">
				<div class="display-1">
					Who Trusted Us
				</div>
				<nav class="tabs">
					<div 
						v-for="(item, i) in tabs" :key="i"
						@click="changeTab(i)"
						class="tab"
						:class="{'active': i === tab?true:false}">
						{{ item }}
					</div>
				</nav>
				<div class="tab-item">
					<div class="row">
						<div 
							class="col col-3 mt-3 col-sm-6"
							v-for="(item, j) in dataTab[tab][slide]" :key="j">
							<img src="./img/smartedu.png" alt="smartedu">
						</div>
					</div>
					<div class="d-flex justify-content-center mt-6">
						<div 
							class="tab-item-nav"
							:class="{'active': k === slide?true:false}"
							@click="changeSlide(k)"
							v-for="(nomor, k) in dataTab[tab]" :key="k">
							{{ k+1 }}
						</div>
					</div>
				</div>
			</div>
		</section>
	`,
	data: () => ({
		tabs: ['2018', '2019', '2020', '2021'],
		tab: 0,
		slide: 0,
		dataTab: [
			[8, 5, 6],
			[7, 4, 6],
			[4, 3, 1],
			[9, 2, 3]
		]	
	}),
	methods: {
		changeTab(val) {
			this.tab = val
			this.slide = 0
		},
		changeSlide(val) {
			this.slide = val
		}
	}
})