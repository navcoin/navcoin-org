'use strict'

let promises = []
let contributors = {}
let repos = [
	'navcoin/navcoin-core',
	'navcoin/navcoin-org',
	'navcoin/KnowledgeBase',

	'agucyalled/nav-react',
	'aguycalled/bitcore-lib',
	'aguycalled/electrum',
	'aguycalled/electrumx',
	'aguycalled/electrum-client-js',
	'aguycalled/ledger-app-nav',
	'aguycalled/nav-ledger-loader',
	'aguycalled/navcoin-js',
	'aguycalled/wnav-react',

	'sakdeniz/next',
	'sakdeniz/next-mobile',
]

for (let i = 0; i < repos.length; i++) {
	const repo = repos[i]
	promises.push(fetch(`https://api.github.com/repos/${repo}/contributors`)
		.then(result => result.json())
		.then((data) => {
			for (let j = 0; j < data.length; j++) {
				if (data[j].type == 'User') {
					const user = data[j]
					const repoObj = {
						name: repo,
						contributions: user.contributions,
						url: `https://github.com/${repo}`
					}

					contributors[user.login] = contributors[user.login] || user
					contributors[user.login].repos = contributors[user.login].repos || []

					contributors[user.login].repos.push(repoObj)

					contributors[user.login].contributions_total = contributors[user.login].contributions_total || 0
					contributors[user.login].contributions_total += user.contributions
				}
			}
		}))
}

Promise.all(promises).then(() => {
	let sortedList = Object.values(contributors).sort((a, b) => {
		if (a.contributions_total > b.contributions_total) {
			return -1
		}

		if (a.contributions_total < b.contributions_total) {
			return 1
		}

		return 0
	})

	const grid = document.getElementsByClassName('protocol-contributors-grid')[0]
	const template = document.getElementsByClassName('protocol-contributor-content')[0]

	for (let i = 0; i < sortedList.length; i++) {
		const user = sortedList[i]
		const content = template.cloneNode(true)
		let repoListHTML = ''
		content.querySelector('.protocol-contributor-image').src = user.avatar_url
		content.querySelector('.protocol-contributor-title').innerHTML = user.login
		content.querySelector('.protocol-contributor-button').href = user.html_url
		content.querySelector('.protocol-contributor-contributions').innerHTML = `${user.contributions_total}`

		for (let j = 0; j < user.repos.length; j++) {
			const repo = user.repos[j]
			let color1 = '46b1e8'
			let color2 = 'c42bb7'
			let ratio = (repos.indexOf(repo.name) + 1) / repos.length
			let hex = (x) => {
				x = x.toString(16)
				return (x.length == 1) ? '0' + x : x
			}

			let r = Math.ceil(parseInt(color1.substring(0,2), 16) * ratio + parseInt(color2.substring(0,2), 16) * (1-ratio))
			let g = Math.ceil(parseInt(color1.substring(2,4), 16) * ratio + parseInt(color2.substring(2,4), 16) * (1-ratio))
			let b = Math.ceil(parseInt(color1.substring(4,6), 16) * ratio + parseInt(color2.substring(4,6), 16) * (1-ratio))

			let color = hex(r) + hex(g) + hex(b)

			repoListHTML += `<a href="${repo.url}" target="_blank" rel="noopener noreferrer nofollow" class="protocol-contributor-button-repo w-button" style="background-color: #${color};">${repo.name.replace(/navcoin\//, '')}</a>`
		}

		content.querySelector('.protocol-contributor-repos').innerHTML = repoListHTML

		content.style.opacity = '100%'
		grid.append(content)

		template.remove();
	}
})
