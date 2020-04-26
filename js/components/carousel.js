Vue.component('carousel-section', {
	template: `
		<section class="carousel spacing-section">
			<div class="container">
				<div class="d-flex align-items-center">
					<button class="btn btn-icon mr-4 d-md-none" @click="changeSlide('-')">
						<img src="./img/icon/left-arrow-white.svg" alt="left-arrow-white"/>
					</button>
					<div class="carousel-container">
						<div class="slide">
				      <img :src="'./img/slide/'+image+'.png'" alt="slide" />
				    </div>
					</div>
					<button class="btn btn-icon ml-4 d-md-none" @click="changeSlide('+')">
						<img src="./img/icon/right-arrow-white.svg" alt="right-arrow-white"/>
					</button>
				</div>

				<div class="text-center">
				  <span 
				  	class="dot"
				  	:class="{'active': image-1 === i?true:false}"
				  	v-for="(item, i) in 4" :key="i"
				  	@click="currentSlide(item)"></span>
				</div>
			</div>
		</section>
	`,
	data: () => ({
		image: 1
	}),
	methods: {
		currentSlide(val) {
			this.image = val
		},
		changeSlide(val) {
			if (val === '+') {
				if (this.image === 4) this.image = 0
				this.image = this.image + 1
			} else if (val === '-') {
				if (this.image === 1) this.image = 5
				this.image = this.image - 1
			}
		}
	}
})