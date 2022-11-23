const applyStyles = iframe => {
	let styles = {
		fontColor: "#d0902f",
		backgroundColor: "rgba(87, 41, 5, 0.2)",
		fontGoogleName: "Sofia",
		fontSize: "15px",
		hideIcons: true, //(or true),
		inputBackgroundColor: "##191919",
		inputFontColor: "#d0902f",
		height: "1000px",
		memberListFontColor: "##d0902f",
		memberListBackgroundColor: "#d0902f"
	}

	setTimeout(() => {
		iframe.contentWindow.postMessage(JSON.stringify(styles), "*");
	}, 100);
}
