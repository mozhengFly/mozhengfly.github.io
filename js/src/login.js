function hasToken() {
	return window.localStorage.getItem("u") === 'wcl' || window.location.href.startsWith("http://localhost:4000");
}

if (!hasToken()) {
	$("body").remove();
	window.location.href='http://mozhengfly.top';
}