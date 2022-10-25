import { gsap } from "gsap"

const siteState = {
    "BIG": 'big',
    "SMALL": 'small'
}

class Navbar {
    siteState = undefined

    constructor() {
        this.siteState = siteState.BIG
    }

    adjust = () => {
        let currentState = window.innerWidth > 800 ? siteState.BIG : siteState.SMALL

        if( this.siteState !== currentState){
            this.siteState = currentState
            this._navAdjust()
        }
    }

    _navAdjust = () => {
        switch( this.siteState ) {
            case siteState.SMALL:
                this._navBecomeSmall()
                break
            case siteState.BIG:
                this._navBecomeBig()
                break
            default:
                break
        }
    }

    _navBecomeSmall = () => {
        const tween = gsap.timeline()

        tween.to('nav', { duration: 0.6, ease: "power2", opacity: 0, x: 300, diplay: "none"})
        tween.to('header i', { duration: 0.3, opacity: 1, display: "flex"})
    }

    _navBecomeBig = () => {
        const tween = gsap.timeline()

        tween.to('header i', { duration: 0.3, opacity: 0, display: "none"})
        tween.to('nav', { duration: 0.6, ease: "power2", opacity: 1, x: 0, diplay: "flex"})
        gsap.to(".menu", { duration: 1, ease: "power2", opacity: 0, display: "none"})
    }
}

const navbar = new Navbar()

export { navbar }