Vue.component('testimoni-section', {
	template: `
		<section class="testimoni spacing-section">
			<div class="text-center">
				<div class="display-1 font-weight-normal">
					Pendapat Mereka Tentang Kami
				</div>
				<div class="title mt-3">
					Berikut pendapat sekolah dan siswa terhadap sistem kami
				</div>
			</div>
			<div class="container mt-6">
				<div class="d-flex align-items-center">
					<button class="btn btn-icon mr-4 d-md-none">
						<img src="./img/icon/left-arrow-white.svg" alt="left-arrow-white"/>
					</button>
					<div class="testimoni-container">					
						<div 
							class="testimoni-slide"
							style="background-image: url('./img/testimoni.svg');">
							<div class="col-8 col-sm-12">
								<div class="headline text-center">
									“Sistem Smartedu lebih cepat dan stabil dibandingkan dengan sistem CBT sejenis. Soal dan Pembahasa disajikan denga rapi mudah di baca dan jelas.”
								</div>
								<div class="mt-6 d-flex justify-content-end">
									<div class="text-center title">
										Fandu Prasetia
										<div class="text-grey mt-3">
											Kepala Sekolah Sabak Auh
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button class="btn btn-icon ml-4 d-md-none">
						<img src="./img/icon/right-arrow-white.svg" alt="right-arrow-white"/>
					</button>
				</div>
				<div class="d-flex justify-content-center mt-3">
					<span class="dot"></span>
				</div>
			</div>
		</section>
	`
})