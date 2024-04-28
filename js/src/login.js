function hasToken() {
	return window.localStorage.getItem("u") === 'wcl' || window.location.href.startsWith("http://localhost:4000");
}

if (!hasToken()) {
	window.location.href='http://mozhengfly.top';
	var body = document.getElementsByTagName('body')
	body[0].parentNode.removeChild(body[0])
}