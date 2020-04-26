Vue.component('footer-section', {
	template: `
		<footer>
			<div class="container">
				<div class="row">
					<div class="col col-4 col-sm-12 mb-sm-3">
						<div class="title">Supported System by:</div>
						<div class="d-flex mt-3">
							<div class="col-6">
								<img src="./img/smartedufooter.svg" alt="smartedu footer">
							</div>
							<div class="col-6">
								<img src="./img/dibfooter.svg" alt="dib footer">
							</div>
						</div>
					</div>
					<div class="col col-4 col-sm-12">
						<div class="title">Support:</div>
						<ul class="list">
							<li>
								<a href="">Cara Penggunaan</a>
							</li>
							<li>
								<a href="">Cara Pendaftaran</a>
							</li>
							<li>
								<a href="">Cara Mendapatkan Assessment Report</a>
							</li>
							<li>
								<a href="">FAQs</a>
							</li>
						</ul>
					</div>
					<div class="col col-4 col-sm-12">
						<div class="title">Newsletter:</div>
						<ul class="list">
							<li>
								<a href="">Menjadi Pemimpin Muda</a>
							</li>
							<li>
								<a href="">Pengumuman SNMPTN</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="footer">
					<div class="mb-sm-3">&copy; 2019 SmartEdu Edukasi Untuk Indoneisa. All Right Reserved</div>
					<div>
						<a 
							v-for="icon in icon" :key="icon"
							class="bg-white icon-footer" 
							href="">
							<img :src="'./img/icon/'+icon" alt="sosmed">						
						</a>
					</div>
				</div>
			</div>
		</footer>
	`,
	data: () =>({
		icon: ['wa.svg', 'yt.svg', 'ig.svg', 'fb.svg', 'gmail.svg']		
	})
})