class SuccessStory extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<section class="success-story bg-primary">
				<div class="container">
					<div class="row">
						<div class="col col-4">
							<div class="achivement text-center text-white">
								<div class="display-1">100 +</div>
								<span class="title">Sekolah</span>
							</div>
						</div>
						<div class="col col-4">
							<div class="achivement text-center text-white">
								<div class="display-1">10,000 +</div>
								<span class="title">Siswa</span>
							</div>
						</div>
						<div class="col col-4">
							<div class="achivement text-center text-white">
								<div class="display-1">1,000 +</div>
								<span class="title">Modul Pembelajaran</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		`
	}
}

customElements.define('success-story', SuccessStory)