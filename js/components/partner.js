Vue.component('partner-section', {
	template: `
		<section class="partner bg-lightblue spacing-section">
			<div class="text-center">
				<div class="display-1 font-weight-normal">
					Partner and Publisher
				</div>
				<div class="title mt-3">
					Berikut beberapa partner dan publisher
				</div>
			</div>
			<div class="mt-6 partner-container">
				<div class="container">
					<div class="row justify-content-center">
						<div 
							class="col col-1-5 text-center col-sm-4 mb-sm-3"
							v-for="img in img" :key="img">
							<img 
								:style="{'width': img === 'amcc.png'?'60%':'100%'}"
								:src="'./img/partner/'+img" 
								alt="partner"/>
						</div>
					</div>
				</div>
			</div>
		</section>
	`,
	data: () => ({
		img: ['metro.png', 'sindo.png', 'kaskus.png', 'replubika.png', 'tribun.png', 'amcc.png', 'rbtv.png']		
	})
})