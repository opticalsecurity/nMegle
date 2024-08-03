ThumbmarkJS.getFingerprint().then(
  function(fp) {
    document.getElementById("fingerprint").innerHTML = fp;
  }
)