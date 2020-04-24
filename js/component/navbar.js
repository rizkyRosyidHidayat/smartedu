class Navbar extends HTMLElement{
	connectedCallback() {
		this.innerHTML = `
			<header>
				<div class="container">
					<div class="navbar">
						<div class="d-flex align-items-center">
							<a class="navbar-brand" href="">
								<img src="./img/logo.png" height="40" alt="logo" />
							</a>
							<div>
								<a class="nav-link" href="">About Us</a>
								<a class="nav-link" href="">Blog</a>
								<a class="nav-link" href="">Help Center</a>
							</div>
						</div>
						<div class="navbar-nav align-items-center">
							<a class="nav-link text-white" href="">Register</a>
							<a class="nav-link" href="">
								<button class="btn btn-outline btn-white">Login</button>
							</a>
						</div>
					</div>
				</div>
			</header>
		`
	}
}

customElements.define('nav-bar', Navbar)