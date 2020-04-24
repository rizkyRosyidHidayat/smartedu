class About extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<section class="about">
				<div class="container">
					<div class="row align-items-center">
						<div class="col col-6">
							<div class="card">
								<img src="./img/about.png" alt="about"/>
							</div>
						</div>
						<div class="col col-6">
							<div class="headline font-weight-bold">
								Smartedu tentang bagaimana kami berkontribusi untuk Indonesai yang lebih baik.
							</div>
							<p>
								Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.
							</p>
							<a href="" class="text-primary title text-decoration-none">
								<b>Find Out Here</b>
							</a>
						</div>
					</div>
				</div>
			</section>
		`
	}
}

customElements.define('about-me', About)