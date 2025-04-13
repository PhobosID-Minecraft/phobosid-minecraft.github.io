function initSkinViewer(skinURL, capeURL) {
  const defaultSkinURL = "phobosid.png"
  const skinViewer = new skinview3d.SkinViewer({
    canvas: document.getElementById("skin_container"),
    width: 250,
    height: 350,
    skin: skinURL || defaultSkinURL,
  })
  if (capeURL) {
    skinViewer.loadCape(capeURL)
  }
  skinViewer.loadPanorama("panorama.png")
  skinViewer.animation = new skinview3d.WalkingAnimation()
  skinViewer.animation.speed = 0.3
}