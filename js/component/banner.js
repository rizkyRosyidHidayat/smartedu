class Banner extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<section class="banner">
				<div class="container">
					<div class="row banner-container">
						<div class="col col-6">
							<div class="display-1 text-primary">
								Smart Education For <br>
								Smart Generation
							</div>
							<span class="text-orange title">
								Pendidikan dalam genggaman
							</span>
							<br>
							<button class="btn btn-large rounded mt-6">
								JOIN NOW
							</button>
						</div>
						<div class="col col-6">
							<center>
								<img 
									src="./img/ilustrasi.png" 
									alt="ilustrasi"
									class="mt-3" 
									style="width: 80%;"
								/>
							</center>
						</div>
					</div>
				</div>
			</section>
		`
	}
}

customElements.define('ban-ner', Banner)