const projects = [
	{
		name: 'URLShortener | BriefURL.live',
		link: 'https://github.com/kailash-unc/URL_Shortener',
		imgurl: ''
	},
	{
		name: 'SinkSaver - HackDuke 1st Place',
		link: 'https://codepen.io/FlorinPop17/full/NWKELoq',
		imgurl: ''
	},
	{

		name: 'Amazon Web Scraper',
		link: 'https://codepen.io/FlorinPop17/full/eYOPdER',
		imgurl: ''
	},
	{
		name: 'Thirukkural Finder',
		link: 'https://codepen.io/FlorinPop17/full/GRKwmgK',
		imgurl: ''
	}
];

const app = document.getElementById('app');
const imgBaseURL = 'https://www.florin-pop.com/images/100Days100PRojects/Day ';

projects.forEach(project => {
	const title = project.name;
	const imgURL = "https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg";
	
	const projectEl = document.createElement('a');
	projectEl.classList.add('project');
	projectEl.href = project.link;
	projectEl.target = '_blank';

	projectEl.innerHTML = `
        <img src="${imgURL}" alt="${title}"/>
		<p>
			${title}
		</p>
    `;

	app.appendChild(projectEl);
});