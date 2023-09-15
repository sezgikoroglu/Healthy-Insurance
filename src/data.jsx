const data = {
	steps : [
		{
			id : `step1`,
			intro : ``,
			backgoundImagePath : ``,
			title : `Social Determinants of Health and their Impact on Access to Medicines`,
			content : `PhRMA believes that diversity, equity and inclusion are essential to the discovery of new medicines and that people of all ethnic and racial backgrounds should have equitable access to treatment. To illuminate inequities in the health care system, PhRMA created this exercise to simulate the patient experience of acquiring prescription medicines in an effort to paint a real picture of the social and structural factors many Americans face that impact their health and ability to access medicines.`,
		},
		{
			id : `step2`,
			intro : ``,
			backgoundImagePath : ``,
			title : `Select Your Journey`,
			content : `Select a character profile to experience the journey through that person’s eyes.`,
		},
		{
			id : `step8`,
			intro : ``,
			backgoundImagePath : ``,
			title : ``,
			content : ``,
			html : {
				successful : `<h2>You Can Afford Your Prescription!</h2><p class="close-p">At PhRMA, our goal is to help create systemic and long-lasting change to improve health equity across underserved communities. Every day patients experience social and structural factors that influence how they interact with and move through the health care system. These factors can significantly impact patients’ health outcomes and access to health care. By identifying and addressing the barriers that hinder patients from accessing the necessary treatments and medicines, inequities present within and outside of the health care system can be improved. Learn more about PhRMA’s solutions to make medicines more accessible and affordable.</p><h3>Resources</h3><div class="uk-flex uk-flex-column"><a href="#">Making Medicines More Affordable</a><a href="#">Sharing Negotiated Savings With Patients at the Pharmacy Counter</a><a href="#">Patient Experience Survey</a><a href="#">Mat.org</a></div>`,
				unsuccessful : `<h2 class="font-red-color">You Can't Afford Your Prescription!</h2><p>At PhRMA, our goal is to help create systemic and long-lasting change to improve health equity across underserved communities. Every day patients experience social and structural factors that influence how they interact with and move through the health care system. These factors can significantly impact patients’ health outcomes and access to health care. By identifying and addressing the barriers that hinder patients from accessing the necessary treatments and medicines, inequities present within and outside of the health care system can be improved. Learn more about PhRMA’s solutions to make medicines more accessible and affordable.</p><h3>Resources</h3><div class="uk-flex uk-flex-column"><a href="#">Making Medicines More Affordable</a><a href="#">Sharing Negotiated Savings With Patients at the Pharmacy Counter</a><a href="#">Patient Experience Survey</a><a href="#">Mat.org</a></div>`
			}
		},
		
	],
	patients : [
		{
			id : `patient1`,
			avatar : `test1`,
			name : `Tia`,
			description : `Tia (50) has been diagnosed with severe depression. She lives with her husband Jerome (47) and their two children, Elijah (15) and Aaliyah (11)`,
			socialDeterminants : {
				transportation : `Drives safe automobiles`,
				housing : `Live in a suburban neighborhood`,
				environment : `Neighborhood has high walkability and green spaces`,
				nutrition : `Eats organic and vegan products only`,
				income : `$250K a year`,
				digitalDivide : `Has access to multiple computers and devices`,
				insuranceStatus : `Employer-sponsored insurance`
			},
			images : {
				smallAvatar : '/avatars/tia-small-avatar.png',
				bigAvatar : '/avatars/tia-big-avatar.png',
				bigAvatarHappy : '/avatars/tia-big-avatar-happy.png',
				bigAvatarSad : '/avatars/tia-big-avatar-sad.png',
				bigAvatarPensive : '/avatars/tia-big-avatar-pensive.png',
				bigAvatarRx : '/avatars/tia-big-avatar-rx.png',

			},
			tokens : {
				initial:'15',
				medicinesCosts:''
			},
			researchandUse : {
				tokens : '+2',
				popUp: false,
				title : `Research and Use of Health Data`,
				content : `You were able to participate in a clinical trial for a nominal cost to you, and you had access to the internet to schedule your follow-up appointments`,
			},
			environment : {
				tokens : '+2',
				popUp : {
					title : `Did you Know?`,
					content : `48% of tribal households in Native communities lack access to reliable clean water.`,
					belowLineContent : `1Water Delayed is Water Denied: How Congress has Blocked Access to Water for Native Families. House Committee on Natural Resources. 2016. Available at: https://naturalresources.house.gov/imo/media/doc/House%20Water%20Report_FINAL.pdf`
				},
				title : `Environment`,
				content : `The city has implemented green energy strategies to address air and water pollution in your area, which help you live an active and healthy life`,
			},
			decisionPoint : {
				getTokens : {
					tokens : '+2',
					title : `Access to a Provider and Screenings`,
					content : `You were able to receive a needed screening, and were able to receive treatment earlier than those without a diagnosis`,
				},
				loseTokens : {
					tokens : '-2',
					title : `Access to a Provider and Screenings`,
					content : `You were unable to receive a follow-up screening due to lacking the time off of work`,
				},
				popUp: {
					title : `Did you Know?`,
					content : `Asian American and Pacific Islander women are 2.5x more likely to die from stomach cancer compared to white women.`,
					belowLineContent : `1Water Delayed is Water Denied: How Congress has Blocked Access to Water for Native Families. House Committee on Natural Resources. 2016. Available at: https://naturalresources.house.gov/imo/media/doc/House%20Water%20Report_FINAL.pdf`
				}
			},
			receipt : {
				tokens : '+2',
				popUp : {
					title : `Did you Know?`,
					content : `Black patients are 33% less likely to receive immunotherapy for metastatic melanoma compared to white patients.`,
					belowLineContent : `1Water Delayed is Water Denied: How Congress has Blocked Access to Water for Native Families. House Committee on Natural Resources. 2016. Available at: https://naturalresources.house.gov/imo/media/doc/House%20Water%20Report_FINAL.pdf`
				},
				title : `Receipt of the Right Prescription from a Physician`,
				content : `Your physician prescribed you an innovative treatment to help you better manage your condition`,
			}
		},
		{
			id : `patient2`,
			avatar : `test1`,
			name : `Noah`,
			description : `Noah (27) has been diagnosed with Stage 3 lung cancer and lives at home with his parents`,
			socialDeterminants : {
				transportation : `1 family car`,
				housing : `Rural single-family home`,
				environment : `Has access to clean water and air`,
				nutrition : `Mother cooks nutritious meals`,
				income : `Unemployed, living costs supplemented by parents`,
				digitalDivide : `Limited internet access`,
				insuranceStatus : `Uninsured`
			},
			images : {
				smallAvatar : '/avatars/noah-small-avatar.png',
				bigAvatar : '/avatars/noah-big-avatar.png',
				bigAvatarHappy : '/avatars/noah-big-avatar-happy.png',
				bigAvatarSad : '/avatars/noah-big-avatar-sad.png',
				bigAvatarPensive : '/avatars/noah-big-avatar-pensive.png',
			},
			tokens : {
				initial:'',
				medicinesCosts:''
			},
			researchandUse : {
				tokens : '-2',
				popUp: false,
				title : `Research and Use of Health Data`,
				content : `You were able to participate in a clinical trial for a nominal cost to you, and you had access to the internet to schedule your follow-up appointments`,
			},
			environment : {
				tokens : '-2',
				popUp : {
					title : `Did you Know?`,
					content : `Patients with disabilities are 2x more likely to have inadequate access to transportation than patients without disabilities.`,
					belowLineContent : `1Water Delayed is Water Denied: How Congress has Blocked Access to Water for Native Families. House Committee on Natural Resources. 2016. Available at: https://naturalresources.house.gov/imo/media/doc/House%20Water%20Report_FINAL.pdf`
				},
				title : `Environment`,
				content : `The city has implemented green energy strategies to address air and water pollution in your area, which help you live an active and healthy life`,
			},
			decisionPoint : {
				getTokens : {
					tokens : '+2',
					title : `Access to a Provider and Screenings`,
					content : `The city is working to improve public transit infrastructure, reducing your commute to the doctor’s office`,
				},
				loseTokens : {
					tokens : '-2',
					title : `Access to a Provider and Screenings`,
					content : `You are unable to see specialty provider about your condition due to the high cost of care`,
				}
			},
			receipt : {
				tokens : '-2',
				popUp : {
					title : `Did you Know?`,
					content : `More than half of low-income patients do not fill prescriptions for medicines that are not covered by their plans.`,
					belowLineContent : `1Water Delayed is Water Denied: How Congress has Blocked Access to Water for Native Families. House Committee on Natural Resources. 2016. Available at: https://naturalresources.house.gov/imo/media/doc/House%20Water%20Report_FINAL.pdf`
				},
				title : `Receipt of the Right Prescription from a Physician`,
				content : `Your physician prescribes you an effective treatment, but your insurance won’t cover it unless you fail another treatment first`,
			}
		},
		{
			id : `patient3`,
			avatar : `test1`,
			name : `Ana Sofia`,
			description : `Ana Sofia (72) has recently been diagnosed with Parkinson’s disease`,
			socialDeterminants : {
				transportation : `No transportation`,
				housing : `Lives in nursing home`,
				environment : `Safe environment, access to physical and social activities`,
				nutrition : `Healthy meals determined by nursing staff`,
				income : `Social Security`,
				digitalDivide : `Does not have consistent access to internet`,
				insuranceStatus : `Medicare`
			},
			images : {
				smallAvatar : '/avatars/ana-sofia-small-avatar.png',
				bigAvatar : '/avatars/ana-sofia-big-avatar.png',
				bigAvatarHappy : '/avatars/ana-sofia-big-avatar-happy.png',
				bigAvatarSad : '/avatars/ana-sofia-big-avatar-sad.png',
				bigAvatarPensive : '/avatars/ana-sofia-big-avatar-pensive.png',
			},
			tokens : {
				initial:'',
				medicinesCosts:''
			},
			researchandUse : {
				tokens : '-2',
				popUp: false,
				title : `Research and Use of Health Data`,
				content : `You were able to participate in a clinical trial for a nominal cost to you, and you had access to the internet to schedule your follow-up appointments`,
			},
			environment : {
				tokens : '-2',
				popUp : {
					title : `Did you Know?`,
					content : `Patients with disabilities are 2x more likely to have inadequate access to transportation than patients without disabilities.`,
					belowLineContent : `1Water Delayed is Water Denied: How Congress has Blocked Access to Water for Native Families. House Committee on Natural Resources. 2016. Available at: https://naturalresources.house.gov/imo/media/doc/House%20Water%20Report_FINAL.pdf`
				},
				title : `Environment`,
				content : `The city has implemented green energy strategies to address air and water pollution in your area, which help you live an active and healthy life`,
			},
			decisionPoint : {
				getTokens : {
					tokens : '+2',
					title : `Access to a Provider and Screenings`,
					content : `You are able to see a specialty care provider about your condition`,
				},
				loseTokens : {
					tokens : '-2',
					title : `Access to a Provider and Screenings`,
					content : `You were unable to receive a follow-up screening because you were unable to get time off from work`,
				}
			},
			receipt : {
				tokens : '-2',
				popUp : {
					title : `Did you Know?`,
					content : `More than half of low-income patients do not fill prescriptions for medicines that are not covered by their plans.`,
					belowLineContent : `1Water Delayed is Water Denied: How Congress has Blocked Access to Water for Native Families. House Committee on Natural Resources. 2016. Available at: https://naturalresources.house.gov/imo/media/doc/House%20Water%20Report_FINAL.pdf`
				},
				title : `Receipt of the Right Prescription from a Physician`,
				content : `Your physician prescribes you an effective treatment, but your insurance won’t cover it unless you fail another treatment first`,
			}
		},
		{
			id : `patient4`,
			avatar : `test1`,
			name : `Jisoo`,
			description : `Jisoo (32) has type II diabetes. They live with their partner Ryan (29)`,
			socialDeterminants : {
				transportation : `No car, dependent on public transportation`,
				housing : `Apartment`,
				environment : `Lives in a pharmacy desert`,
				nutrition : `Access to healthy nutritious food`,
				income : `65k/year`,
				digitalDivide : `Access to reliable internet`,
				insuranceStatus : `Self-insured`
			},
			images : {
				smallAvatar : '/avatars/jisoo-small-avatar.png',
				bigAvatar : '/avatars/jisoo-big-avatar.png',
				bigAvatarHappy : '/avatars/jisoo-big-avatar-happy.png',
				bigAvatarSad : '/avatars/jisoo-big-avatar-sad.png',
				bigAvatarPensive : '/avatars/jisoo-big-avatar-pensive.png',
				bigAvatarRx : '/avatars/jisoo-big-avatar-rx.png',
			},
			tokens : {
				initial:'',
				medicinesCosts:''
			},
			researchandUse : {
				tokens : '+2',
				popUp: false,
				title : `Research and Use of Health Data`,
				content : `You were able to participate in a clinical trial for a nominal cost to you, and you had access to the internet to schedule your follow-up appointments`,
			},
			environment : {
				tokens : '-2',
				popUp : {
					title : `Did you Know?`,
					content : `21% of Native Hawaiian and Pacific Islander adults face food insecurity.`,
					belowLineContent : `1Water Delayed is Water Denied: How Congress has Blocked Access to Water for Native Families. House Committee on Natural Resources. 2016. Available at: https://naturalresources.house.gov/imo/media/doc/House%20Water%20Report_FINAL.pdf`
				},
				title : `Environment`,
				content : `The city has implemented green energy strategies to address air and water pollution in your area, which help you live an active and healthy life`,
			},
			decisionPoint : {
				getTokens : {
					tokens : '+2',
					title : `Access to a Provider and Screenings`,
					content : `The city is working to improve public transit infrastructure, reducing your commute to the doctor’s office`,
				},
				loseTokens : {
					tokens : '',
					title : `Access to a Provider and Screenings`,
					content : `You are unable to see specialty provider about your condition due to the high cost of care`,
				}
			},
			receipt : {
				tokens : '+2',
				popUp : false,
				title : `Receipt of the Right Prescription from a Physician`,
				content : `Your physician prescribed you the most effective treatment for you condition`,
			}
		},
		{
			id : `patient5`,
			avatar : `test1`,
			name : `Koa`,
			description : `Koa (40) lives with his daughter, Lani (6). Koa has recently been diagnosed with chronic cardiovascular disease.`,
			socialDeterminants : {
				transportation : `1 Car`,
				housing : `Lives in a single-family home`,
				environment : `Under a boil water advisory`,
				nutrition : `Live in a food desert`,
				income : `$110K/year`,
				digitalDivide : `Have reliable access to internet`,
				insuranceStatus : `Silver plan on the exchange`
			},
			images : {
				smallAvatar : '/avatars/koa-small-avatar.png',
				bigAvatar : '/avatars/koa-big-avatar.png',
				bigAvatarHappy : '/avatars/koa-big-avatar-happy.png',
				bigAvatarSad : '/avatars/koa-big-avatar-sad.png',
				bigAvatarPensive : '/avatars/koa-big-avatar-pensive.png',
				bigAvatarRx : '/avatars/koa-big-avatar-rx.png',
			},
			tokens : {
				initial:'',
				medicinesCosts:''
			},
			researchandUse : {
				tokens : '+2',
				popUp: false,
				title : `Research and Use of Health Data`,
				content : `You were able to participate in a clinical trial for a nominal cost to you, and you had access to the internet to schedule your follow-up appointments`,
			},
			environment : {
				tokens : '-2',
				popUp : {
					title : `Did you Know?`,
					content : `21% of Native Hawaiian and Pacific Islander adults face food insecurity.`,
					belowLineContent : `1Water Delayed is Water Denied: How Congress has Blocked Access to Water for Native Families. House Committee on Natural Resources. 2016. Available at: https://naturalresources.house.gov/imo/media/doc/House%20Water%20Report_FINAL.pdf`
				},
				title : `Environment`,
				content : `The city has implemented green energy strategies to address air and water pollution in your area, which help you live an active and healthy life`,
			},
			decisionPoint : {
				getTokens : {
					tokens : '+2',
					title : `Access to a Provider and Screenings`,
					content : `The city is working to improve public transit infrastructure, reducing your commute to the doctor’s office`,
				},
				loseTokens : {
					tokens : '',
					title : `Access to a Provider and Screenings`,
					content : `You are unable to see specialty provider about your condition due to the high cost of care`,
				}
			},
			receipt : {
				tokens : '+2',
				popUp : false,
				title : `Receipt of the Right Prescription from a Physician`,
				content : `Your physician prescribed you the most effective treatment for you condition`,
			}
		}
	]

};

export default data;