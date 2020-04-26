Vue.component('feature-item', {
	template: `
		<div class="feature">
			<div class="headline text-primary">{{ nama }}</div>
			<div>Beragam fitur yang memberikan manfaat untuk {{ nama.toLowerCase() }}</div>
			<div class="d-flex justify-content-end">
				<div>
					<button
						:disabled="posisi !== 0?false:true"
						class="btn btn-icon"									
						@click="geserSlide('+')">
						<img src="./img/icon/left-arrow-white.svg" alt="left-arrow-white"/>
					</button>
					<button 
						:disabled="posisi !== -max?false:true"
						class="btn btn-icon" 
						@click="geserSlide('-')">
						<img src="./img/icon/right-arrow-white.svg" alt="right-arrow-white"/>
					</button>
				</div>
			</div>
			<div 
				class="row mt-3"
				:style="'transform: translateX('+geser+'px);transition: transform 0.2s ease;'">
				<div class="col" v-for="item in 5" :key="item">
					<div class="feature-item">
						<div class="feature-img" style="background-image: url('./img/feature/1.svg');"></div>
						<div class="feature-text">
							<div class="title font-weight-bold">Assessment Report</div>
							<br>
							<div>
								Penilaian siswa menjadi lebih mudah dengan fitur Assessment Report
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
	props: ['nama'],
	data: () => ({
		posisi: 0,
		geser: 0,
		max: 0
	}),
	created() {
		const width = window.innerWidth
		if (width > 768) {
			this.max = 2
		} else if (width > 360) {
			this.max = 3
		} else if (width <= 360) {
			this.max = 4
		}
	},
	methods: {
		geserSlide(val) {
			if (val === '-') {
				this.posisi = this.posisi - 1
				if (this.posisi >= -this.max) {
					this.geser = this.geser - 302
				}
			} else if (val === '+') {
				this.posisi = this.posisi + 1
				if (this.posisi < this.max) {
					this.geser = this.geser + 302
				}			
			}
		}
	}
})

Vue.component('feature-section', {
	template: `
		<section class="features spacing-section">
			<div class="container">
				<h1 class="display-1">Our Features</h1>
				<div class="features-container">
					<feature-item 
						v-for="(item, i) in features" :key="i"
						:nama="item"
					></feature-item>
				</div>
			</div>
		</section>
	`,
	data: () => ({
		features: ['Sekolah', 'Siswa', 'Orang Tua']
	})
})