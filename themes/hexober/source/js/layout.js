function onPageReady() {
    const appbarNavBtn = document.getElementById('appbarNavBtn')
    if (appbarNavBtn) {
        appbarNavBtn.onclick = () => {
            document.getElementById('mainDrawer').toggle()
        }
    }
}