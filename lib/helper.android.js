function makeBuffer(base64encoded){
	var base64Decoded = android.util.Base64.decode(base64encoded, android.util.Base64.DEFAULT)
	return new java.io.ByteArrayInputStream(base64Decoded)
}

module.exports = {
	makeBuffer: makeBuffer
}
