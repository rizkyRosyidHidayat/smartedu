Vue.component('navbar-section', {
	template: `
		<header class="header-inactive">
			<div class="container">
				<div class="navbar">
					<div class="d-flex align-items-center">
						<a class="navbar-brand" href="">
							<img src="./img/logo.png" height="40" alt="logo" />
						</a>
						<div class="d-md-none">
							<a class="nav-link" href="">About Us</a>
							<a class="nav-link" href="">Blog</a>
							<a class="nav-link" href="">Help Center</a>
						</div>
					</div>
					<div class="navbar-nav align-items-center d-md-none">
						<a class="nav-link text-white" href="">Register</a>
						<a class="nav-link" href="">
							<button class="btn btn-outline btn-white">Login</button>
						</a>
					</div>					
					<div class="d-lg-none align-items-center">
						<a 
							class="nav-link" 
							href="javascript:void(0)"
							@click="isHidden = !isHidden">
							Menu
						</a>
					</div>
				</div>
				<div 
					class="hidden-menu d-lg-none"
					:class="{'d-none': isHidden}">
					<div class="mb-sm-3">
						<a class="nav-link" href="">About Us</a>
						<a class="nav-link" href="">Blog</a>
						<a class="nav-link" href="">Help Center</a>
					</div>
					<div 
						class="navbar-nav align-items-center">
						<a class="nav-link text-white" href="">Register</a>
						<a class="nav-link" href="">
							<button class="btn btn-outline btn-white">Login</button>
						</a>
					</div>
				</div>
			</div>
		</header>
	`,
	data: () => ({
		isHidden: true
	})
})