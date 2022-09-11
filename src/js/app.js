if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition((position) => {
		const Latitude = position.coords.latitude;
		const Longitude = position.coords.longitude;
		console.log(Latitude, Longitude);
	});
} else {
	console.log("Geolocation is not supported by this browser.");
}
