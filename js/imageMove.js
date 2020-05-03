// The GridItem class.
class ImageRoll {
    constructor(el) {
        this.DOM = {el: el};
        // The rectangle element around the image.
        this.DOM.bg = this.DOM.el.querySelector('.paper_item-bg');
        // The following DOM elements are elements that will move/tilt when hovering the item.
        this.DOM.tilt = {};
        // The image.
        this.DOM.imgWrap = this.DOM.el.querySelector('.paper_item-wrap');
        this.DOM.tilt.img = this.DOM.imgWrap.querySelector('paper_item-img');
        // The title (vertical text).
        // The number (horizontal letter/number code).
        // Split the number into spans using charming.js
        // And access the spans/letters.
        // Configuration for when moving/tilting the elements on hover.
        this.tiltconfig = {   
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
            this.tilt(ev);
        });
        this.mouseleaveFn = (ev) => {
            if ( !allowTilt ) return;
            this.resetTilt();
            this.toggleAnimationOnHover(ev.type);
            


        };
        this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
        this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
        this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
    }
    tilt(ev) {
        // Get mouse position.
        const mousepos = getMousePos(ev);
        // Document scrolls.
        const docScrolls = {left : body.scrollLeft + docEl.scrollLeft, top : body.scrollTop + docEl.scrollTop};
        const bounds = this.DOM.el.getBoundingClientRect();
        // Mouse position relative to the main element (this.DOM.el).
        const relmousepos = {
            x : mousepos.x - bounds.left - docScrolls.left, 
            y : mousepos.y - bounds.top - docScrolls.top 
        };
        // Movement settings for the tilt elements.
        for (let key in this.DOM.tilt) {
            let t = this.tiltconfig[key].translation;
            // Animate each of the elements..
            TweenMax.to(this.DOM.tilt[key], 2, {
                ease: Expo.easeOut,
                x: (t.x[1]-t.x[0])/bounds.width*relmousepos.x + t.x[0],
                y: (t.y[1]-t.y[0])/bounds.height*relmousepos.y + t.y[0]
            });
        }
    }





    resetTilt() {
        for (let key in this.DOM.tilt ) {
            TweenMax.to(this.DOM.tilt[key], 2, {
                ease: Elastic.easeOut.config(1,0.4),
                x: 0,
                y: 0
            });
        }
    }

    		/**
		 * Hides the item:
		 * - Scales down and fades out the image and bg elements.
		 * - Moves down and fades out the title and number elements.
		 */
	
		/**
		 * Resets.
		 */


		
	}