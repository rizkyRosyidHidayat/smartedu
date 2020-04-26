Vue.component('achivement-section', {
	template: `
		<section class="success-story bg-primary">
			<div class="container">
				<div class="row">
					<div 
						class="col col-4 col-sm-12"
						v-for="(item, i) in achivement" :key="i">
						<div class="achivement text-center text-white">
							<div class="display-1">{{ item.value }} +</div>
							<span class="title">{{ item.text }}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	`,
	data: () => ({
		achivement: [
			{ value: '100', text: 'Sekolah' },
			{ value: '10,000', text: 'Siswa' },
			{ value: '1,000', text: 'Modul Pembelajaran' }
		]
	})
})