// The GridItem class.
class GridItem {
    constructor(el) {
        this.DOM = {el: el};
        // The rectangle element around the image.
        this.DOM.bg = this.DOM.el.querySelector('.grid__item-bg');
        // The following DOM elements are elements that will move/tilt when hovering the item.
        this.DOM.tilt = {};
        // The image.
        this.DOM.imgWrap = this.DOM.el.querySelector('.grid__item-wrap');
        this.DOM.tilt.img = this.DOM.imgWrap.querySelector('img');
        // The title (vertical text).
        this.DOM.tilt.title = this.DOM.el.querySelector('.grid__item-title');
        // The number (horizontal letter/number code).
        this.DOM.tilt.number = this.DOM.el.querySelector('.grid__item-number');
        // Split the number into spans using charming.js
        charming(this.DOM.tilt.number);
        // And access the spans/letters.
        this.DOM.numberLetters = this.DOM.tilt.number.querySelectorAll('span');
        // Configuration for when moving/tilting the elements on hover.
        this.tiltconfig = {   
           // title: {translation : {x: [-8,8], y: [4,-4]}},
          //  number: {translation : {x: [-5,5], y: [-10,10]}},
            img: {translation : {x: [-15,15], y: [-10,10]}}
        };
        // Get the rotation angle value of the image element.
        // This will be used to rotate the DOM.bg to the same value when expanding/opening the item.
        this.angle = getAngle(this.DOM.tilt.img);
        // Init/Bind events.
        this.initEvents();
    }
    initEvents() {

        this.toggleAnimationOnHover = (type) => {
            // Scale up the bg element.
            TweenMax.to(this.DOM.bg, 1, {
                ease: Expo.easeOut,
                scale: type === 'mouseenter' ? 1.15 : 1
            });
            
        };


        this.mouseenterFn = (ev) => {
            if ( !allowTilt ) return;
            this.toggleAnimationOnHover(ev.type);
            



        };
        this.mousemoveFn = (ev) => requestAnimationFrame(() => {
            if ( !allowTilt ) return;
            //this.tilt(ev);
        });
        this.mouseleaveFn = (ev) => {
            if ( !allowTilt ) return;
            //this.resetTilt();
            this.toggleAnimationOnHover(ev.type);
            


        };
        this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
        this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
        this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
    }

    hide(withAnimation = true) { this.toggle(withAnimation,false); }
    /**
     * Resets.
     */
    show(withAnimation = true) { this.toggle(withAnimation); }
    toggle(withAnimation, show = true) {
        TweenMax.to(this.DOM.tilt.img, withAnimation ? 0.8 : 0, {
            ease: Expo.easeInOut,
            delay: !withAnimation ? 0 : show ? 0.15 : 0,
            scale: show ? 1 : 0,
            opacity: show ? 1 : 0,
        });
        TweenMax.to(this.DOM.bg, withAnimation ? 0.8 : 0, {
            ease: Expo.easeInOut,
            delay: !withAnimation ? 0 : show ? 0 : 0.15,
            scale: show ? 1 : 0,
            opacity: show ? 1 : 0
        });
        this.toggleTexts(show ? 0.45 : 0, withAnimation, show);
    }
    // hides the texts (translate down and fade out).
    hideTexts(delay = 0, withAnimation = true) { this.toggleTexts(delay, withAnimation, false); }
    // shows the texts (reset transforms and fade in).
    showTexts(delay = 0, withAnimation = true) { this.toggleTexts(delay, withAnimation); }
    toggleTexts(delay, withAnimation, show = true) {
        TweenMax.to([this.DOM.tilt.title, this.DOM.tilt.number], !withAnimation ? 0 : show ? 1 : 0.5, {
            ease: show ? Expo.easeOut : Quart.easeIn,
            delay: !withAnimation ? 0 : delay,
            y: show ? 0 : 20,
            opacity: show ? 1 : 0
        });
    }
}