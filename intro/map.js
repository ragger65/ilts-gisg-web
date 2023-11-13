//マーカー色指定
	const redIcon = L.icon({
	iconUrl: "https://esm.sh/leaflet@1.9.2/dist/images/marker-icon.png",
	iconRetinaUrl: "https://esm.sh/leaflet@1.9.2/dist/images/marker-icon-2x.png",
	shadowUrl: "https://esm.sh/leaflet@1.9.2/dist/images/marker-shadow.png",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	tooltipAnchor: [16, -28],
	shadowSize: [41, 41],
	className: "icon-red"
	});
	var ILTSIcon= L.icon({
	iconUrl:'../album/images/Mappin_ILTS.png',
	iconSize:[40,40],
	iconAnchor: [20, 41]
	});
	//地図の中心地を定義
	var mainmap = L.map('mapid').setView([10, 165], 1);
	var ILTSMarker = L.marker([43.082788, 141.339061], { icon: ILTSIcon }).addTo(mainmap)
	//Greenland
	var popup = L.popup();
	L.marker([77.4894, 360-69.3322]).addTo(mainmap).on('click', function (e) {
		popup
			.setLatLng(e.latlng)
			.setContent("Qaanaaq")
			.openOn(mainmap);
			});
	var popup = L.popup();
	L.marker([67.6857, 360-36.6795]).addTo(mainmap).on('click', function (e) {
		popup
			.setLatLng(e.latlng)
			.setContent("SE Dome")
			.openOn(mainmap);
			});
//Antarctica
	var popup = L.popup();
	L.marker([-69.2047, 39.8020]).addTo(mainmap).on('click', function (e) {
		popup
			.setLatLng(e.latlng)
			.setContent("Lützow-Holm Bay")
			.openOn(mainmap);
			});
	var popup = L.popup();
	L.marker([-62.4800, 360-60.1430]).addTo(mainmap).on('click', function (e) {
		popup
			.setLatLng(e.latlng)
			.setContent("Livingstone Island")
			.openOn(mainmap);
			});
//Patagonia
	var popup = L.popup();
	L.marker([-50.49, 360-73.0785]).addTo(mainmap).on('click', function (e) {
		popup
			.setLatLng(e.latlng)
			.setContent("Patagonia")
			.openOn(mainmap);
			});
//Himalaya
	var popup = L.popup();
	L.marker([27.838761, 86.536989]).addTo(mainmap).on('click', function (e) {
		popup
			.setLatLng(e.latlng)
			.setContent("Nepal Himalaya")
			.openOn(mainmap);
			});
//Alaska
	var popup = L.popup();
	L.marker([58.4321, 360-134.048]).addTo(mainmap).on('click', function (e) {
		popup
			.setLatLng(e.latlng)
			.setContent("Juneau")
			.openOn(mainmap);
			});
//Others
	var popup = L.popup();
	L.marker([46.6134, 8.396327]).addTo(mainmap).on('click', function (e) {
		popup
			.setLatLng(e.latlng)
			.setContent("Switzerland")
			.openOn(mainmap);
			});
	var popup = L.popup();
	L.marker([45.1708, 141.2488]).addTo(mainmap).on('click', function (e) {
		popup
			.setLatLng(e.latlng)
			.setContent("ヤムナイ沢雪渓")
			.openOn(mainmap);
			});
	//マーカー追加：その他
//マーカー追加終了
//タイルレイヤーを取得
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>',
	maxZoom: 15}).addTo(mainmap);
