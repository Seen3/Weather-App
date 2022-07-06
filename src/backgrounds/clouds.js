function createClouds(num) {
    const cloudBox=document.createElement('div');
    for (let i = 0; i < num; i++) {
        const cloudImage = document.createElement('img');
        cloudImage.src = "https://www.transparentpng.com/thumb/clouds/Ol3U8W-clouds-free-download-transparent.png";
        cloudBox.appendChild(cloudImage);
    }
    cloudBox.style.display='flex';
    cloudBox.style.justifyContent='space-around';
    cloudBox.style.width='100vw';
    cloudBox.style.position='absolute';
    cloudBox.style.zIndex=9997;
    cloudBox.id="cloudbox";
    return cloudBox;
}
export default createClouds;