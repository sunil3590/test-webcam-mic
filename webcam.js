! function(e) {
    function r() {
        var e = document.querySelector(".webcam .workbench__button");
        e && e.addEventListener("click", t)
    }

    function t() {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia, navigator.getUserMedia ? navigator.getUserMedia({
            audio: 1,
            video: {
                height: v
            }
        }, a, d) : m()
    }

    function a(e) {
        var r = document.createElement("video");
        r.height = v, r.autoplay = !0, r.src = window.URL.createObjectURL(e), c(r)
    }

    function c(e) {
        var r = i();
        r.innerHTML = "", r.appendChild(e)
    }

    function i() {
        return document.querySelector(".webcam .workbench .container")
    }

    function d(e) {
        switch (e.name) {
            case "PermissionDeniedError":
                s();
                break;
            case "DevicesNotFoundError":
            case "NotFoundError":
                u();
                break;
            default:
                l(e.name, e.name)
        }
    }

    function s() {
        l(e("error.access"), e("error.access.description"))
    }

    function u() {
        l(e("webcam.error.devices"), e("webcam.error.devices.description"))
    }

    function m() {
        l(e("error.browser"), e("error.browser.description"))
    }

    function l(e, r) {
        var n = document.createElement("div"),
            o = document.createElement("h3"),
            t = document.createElement("div");
        n.classList.add("workbench-error"), o.classList.add("workbench-error__title"), o.innerHTML = e, t.classList.add("workbench-error__description"), t.innerHTML = r, n.appendChild(o), n.appendChild(t), c(n)
    }
    var v = 560;
    r()
}(window.__);