/* Javascript HQ for Essence of Change by Forrest Whitcomb
 * 
 * Referencing:
 * 
 * AnimatedImageColumns
 * https://github.com/codrops/AnimatedImageColumns/
 * 
 * DraggableMenu
 * https://github.com/codrops/DraggableMenu
 * 
 * From
 * Codrops
 * http://www.codrops.com
 * 
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * for opening/closing an article within a page
 * 
 * Other reference materials are mentioned in-line
 */
{

	const getOffset = (elem, axis) => {
		let offset = 0;
		const type = axis === 'top' ? 'offsetTop' : 'offsetLeft';
		do {
			if ( !isNaN( elem[type] ) )
			{
				offset += elem[type];
			}
		} while( elem = elem.offsetParent );
		return offset;
	}

	const distance = (p1,p2) => Math.hypot(p2.x-p1.x, p2.y-p1.y);
	const randNumber = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;
	
	
	
	
	// Gets the mouse position. From http://www.quirksmode.org/js/events_properties.html#position



	//mouse pos
	//if page x and oage e good then let x = x
	//else if scroll

	const getMousePos = (e) => {
		let posx = 0;
		let posy = 0;
			if (!e) e = window.event;
		if (e.pageX || e.pageY) 	{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
					posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		return { x : posx, y : posy }
	};
	// Returns the rotation angle of an element.
	const getAngle = (el) => {
		const st = window.getComputedStyle(el, null);
		const tr = st.getPropertyValue('transform');
			let values = tr.split('(')[1];
				values = values.split(')')[0];
			values = values.split(',');
			//nfdsfjh what
		return Math.round(Math.asin(values[1]) * (180/Math.PI));
	};


	// Scroll control functions. 
	
	//https://stackoverflow.com/a/4770179.

const keys = {37: 1, 38: 1, 39: 1, 40: 1};
		const preventDefault = (e) => {
		e = e || window.event;
		if (e.preventDefault)
			e.preventDefault();

		e.returnValue = false;  
	}
	const preventDefaultForScrollKeys = (e) => {
		if (keys[e.keyCode]) {
			preventDefault(e);
			return false;
//window.ontouchmove  = preventDefault; // mobile
		}
	}
	const disableScroll = () => {
		if (window.addEventListener) // older FF
			window.addEventListener('DOMMouseScroll', preventDefault, false);
			window.onwheel = preventDefault; // modern standard
		window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
		//window.ontouchmove  = preventDefault; // mobile

			window.ontouchmove  = preventDefault; // mobile
		document.onkeydown  = preventDefaultForScrollKeys;
	}
	const enableScroll = () => {
		if (window.removeEventListener)
			window.removeEventListener('DOMMouseScroll', preventDefault, false);
		window.onmousewheel = document.onmousewheel = null; 
			
			window.onwheel = null; 
				window.ontouchmove = null;  
		
				document.onkeydown = null;  
	}
	
	// GridItem class.
    class GridItem {
        constructor(el) {
			this.DOM = {el: el};
				//	
			
			
				this.DOM.bg = this.DOM.el.querySelector('.thumb-bg');
				this.DOM.tilt = {};
					this.DOM.imgWrap = this.DOM.el.querySelector('.thumb-wrap');
				this.DOM.tilt.img = this.DOM.imgWrap.querySelector('img');
		this.DOM.tilt.title = this.DOM.el.querySelector('.thumb-title');
			this.DOM.tilt.number = this.DOM.el.querySelector('.thumb-number');
			
			
			//  spans using charming.js
			charming(this.DOM.tilt.number);
			// access the spans

			//this.DOM.numberLetters = this.DOM.tilt.number.querySelectorAll('.thumb_title');


			this.DOM.numberLetters = this.DOM.tilt.number.querySelectorAll('span');
			this.tiltconfig = {   
               
                img: {translation : {x: [-15,15], y: [-10,10]}}
			};

				this.angle = getAngle(this.DOM.tilt.img);
            this.initEvents();
		}
		initEvents() {

			this.toggleAnimationOnHover = (type) => {
				// Scale up the bg
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
            });
            this.mouseleaveFn = (ev) => {
				if ( !allowTilt ) return;
				this.toggleAnimationOnHover(ev.type);
		
				
		// 		showTexts(delay = 0, withAnimation = true) { this.toggleTexts(delay, withAnimation); }
		// toggleTexts(delay, withAnimation, show = true) {
		// 	TweenMax.to([this.DOM.tilt.title, this.DOM.tilt.number], !withAnimation ? 0 : show ? 1 : 0.5, {
		// 		ease: show ? Expo.easeOut : Quart.easeIn,
		// 		delay: !withAnimation ? 0 : delay,
		// 		y: show ? 0 : 20,
		// 		opacity: show ? 1 : 0
		// 	});
		// }


            };
           	 this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
            this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
            this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
		}

		hide(withAnimation = true) { this.toggle(withAnimation,false); }
//hide(with anium)
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

	const articles = document.querySelectorAll('article');

		for (let i = 0; i < articles.length; i++) {
  		articles[i].style.fontFamily = 'Comic Sans MS';
	}

//moved lines to seperate js .... /lines.js

	// var line01 = new LeaderLine(start, end, {hide: true});
	// showButton.addEventListener('click', function() { line.show(); }, false);
	// hideButton.addEventListener('click', function() { line.hide(); }, false);

	// The Content class. Represents one content item per grid item.



    class Content {
        constructor(el) {
			this.DOM = {el: el};
			// The content elements: image, title, subtitle and text.
          	  this.DOM.img = this.DOM.el.querySelector('.content__item-img');
            this.DOM.title = this.DOM.el.querySelector('.content__item-title');
          	  this.DOM.subtitle = this.DOM.el.querySelector('.content__item-subtitle');
			this.DOM.text = this.DOM.el.querySelector('.content__item-text');
			// Split the title into spans using charming.js
			
			
		charming(this.DOM.title);
			// And access the spans/letters.
			this.DOM.titleLetters = this.DOM.title.querySelectorAll('span');
			this.titleLettersTotal = this.DOM.titleLetters.length;
		}
/**

	* TweenMax turorial from:
	 * https://greensock.com/splittext/
	* 
	*/

     show(delay = 0, withAnimation = true) { this.toggle(delay, withAnimation); }
       	 hide(delay = 0, withAnimation = true) { this.toggle(delay, withAnimation, false); }
		
			toggle(delay, withAnimation, show = true) {
			setTimeout(() => {
				this.DOM.titleLetters.forEach((letter,pos) => {
					TweenMax.to(letter, !withAnimation ? 0 : show ? .5 : .1, {
							delay: !withAnimation ? 0 : show ? pos*.05 : (this.titleLettersTotal-pos-1)*.04,
						startAt: show ? {y: '50%', opacity: 0} : null,
					//
					//	
						opacity: show ? 1 : 0
					});
				});
				this.DOM.subtitle.style.opacity = show ? 1 : 0;
				this.DOM.text.style.opacity = show ? 1 : 0;

			}, withAnimation ? delay*1000 : 0 );
		}
    }


    class Grid {
        constructor(el) {
			this.DOM = {el: el};

			this.DOM.gridWrap = this.DOM.el.parentNode;

         this.items = [];
           		 Array.from(this.DOM.el.querySelectorAll('.thumb')).forEach(itemEl => this.items.push(new GridItem(itemEl)));
            // The total number of items.
			this.itemsTotal = this.items.length;
			// The content items.
			this.contents = [];
			Array.from(document.querySelectorAll('.content > .content__item')).forEach(contentEl => this.contents.push(new Content(contentEl)));
		this.DOM.closeCtrl = document.querySelector('.content__close');
			
			this.DOM.scrollIndicator = document.querySelector('.content__indicator');
			// The open grid item.
			this.current = -1;

            this.initEvents();
		}
		initEvents() {
			// Clicking a grid item hides all the other grid items (ordered by proximity to the clicked one) 
			// and expands/opens the clicked one.
			for (let item of this.items) {
				item.DOM.el.addEventListener('click', (ev) => {
					ev.preventDefault();
					this.openItem(item);
				});
			}
			// Close item.
			this.DOM.closeCtrl.addEventListener('click', () => this.closeItem());
			// (Incomplete! For now: if theres an open item, then show back the grid.
			this.resizeFn = () => {
				if (this.current === -1 || winsize.width === window.innerWidth) return;
				this.closeItem(false);
			};
			window.addEventListener('resize', this.resizeFn);
		}
		getSizePosition(el, scrolls = true) {
			const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    					const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
						// 	item.hideTexts();
			// item.DOM.el.style.zIndex = 1000;
			// const itemDim = this.getSizePosition(item.DOM.el);
			// 		item.DOM.bg.style.width = `${itemDim.width}px`;
			// 	item.DOM.bg.style.height
			
						return {
				width: el.offsetWidth,
				height: el.offsetHeight,
			left: scrolls ? getOffset(el, 'left')-scrollLeft : getOffset(el, 'left'),
				top: scrolls ? getOffset(el, 'top')-scrollTop : getOffset(el, 'top')
			};
		}
		openItem(item) {
			if ( this.isAnimating ) return;
			this.isAnimating = true;
					this.scrollPos = window.scrollY;
				disableScroll();
			allowTilt = false;
				//  index of the clicked item
				this.current = this.items.indexOf(item);
				this.hideAllItems(item);



			// 	item.hideTexts();
			// item.DOM.el.style.zIndex = 1000;
			// const itemDim = this.getSizePosition(item.DOM.el);
			// 		item.DOM.bg.style.width = `${itemDim.width}px`;
			// 	item.DOM.bg.style.height = `${itemDim.height}px`;
			// item.DOM.bg.style.left = `${itemDim.left}px`;
			// item.DOM.bg.style.top = `${itemDim.top}px`;
			// item.DOM.bg.style.position = 'fixed';



			/* 

 * DraggableMenu
 * https://github.com/codrops/DraggableMenu

 */

		item.hideTexts();
			item.DOM.el.style.zIndex = 1000;
			const itemDim = this.getSizePosition(item.DOM.el);
					item.DOM.bg.style.width = `${itemDim.width}px`;
				item.DOM.bg.style.height = `${itemDim.height}px`;
			item.DOM.bg.style.left = `${itemDim.left}px`;
			//
			item.DOM.bg.style.top = `${itemDim.top}px`;
	
		item.DOM.bg.style.position = 'fixed';
			const d = Math.hypot(winsize.width, winsize.height);
			TweenMax.to(item.DOM.bg, 1.2, {
				ease: Expo.easeInOut,
					delay: 0.4,

					// ease: Expo.easeInOut,
					// delay: 0.4,


								// 	item.hideTexts();
			// item.DOM.el.style.zIndex = 1000;
			// const itemDim = this.getSizePosition(item.DOM.el);
			// 		item.DOM.bg.style.width = `${itemDim.width}px`;
			// 	item.DOM.bg.style.height
				x: winsize.width/2 - (itemDim.left+itemDim.width/2),
				y: winsize.height/2 - (itemDim.top+itemDim.height/2),
				scaleX: d/itemDim.width,
				scaleY: d/itemDim.height,
					rotation: -1*item.angle*2
			});
			const contentEl = this.contents[this.current];
			contentEl.DOM.el.classList.add('content__item--current');
	const imgDim = this.getSizePosition(item.DOM.imgWrap);
			
	const contentImgDim = this.getSizePosition(contentEl.DOM.img, false);



			// const imgDim = this.getSizePosition(item.DOM.img);
			// const contentImgDim = this.getSizePosition(contentEl.DOM.img, true);

			this.showContentElems(contentEl, 1);
			TweenMax.to(item.DOM.tilt.img, 1.2, {
				ease: Expo.easeInOut,
				delay: 0.55,
						scaleX: contentImgDim.width/imgDim.width,
				scaleY: contentImgDim.height/imgDim.height,
				x: (contentImgDim.left+contentImgDim.width/2)-(imgDim.left+imgDim.width/2),
					y: (contentImgDim.top+contentImgDim.height/2)-(imgDim.top+imgDim.height/2),
				
				
				
					rotation: 0,
				onComplete: () => {
					item.DOM.tilt.img.style.opacity = 0;
					//rotation: 0,
				//onComplete: () => {
					contentEl.DOM.img.style.visibility = 'visible';
					contentEl.DOM.el.parentNode.style.position = 'absolute';
				
					this.DOM.gridWrap.classList.add('grid-wrap--hidden');
					window.scrollTo(0, 0);
					enableScroll();
					this.isAnimating = false;
				}
			});
		}

	//from https://github.com/codrops/DraggableMenu


		closeItem(withAnimation = true) {
			if ( this.isAnimating ) return;
			this.isAnimating = true;
			const contentEl = this.contents[this.current];
			// Scroll to the previous scroll position before opening the item.
			window.scrollTo(0, this.scrollPos);
	contentEl.DOM.el.parentNode.style.position = 'fixed';
			
			
			disableScroll();
			// Showing the grid scroll.
			this.DOM.gridWrap.classList.remove('grid-wrap--hidden');
			// The item that is open.
			const item = this.items[this.current];
			// Hide the back control and scroll indicator and all the item´s content elements.
				this.hideContentElems(contentEl, 0, withAnimation);
				item.DOM.tilt.img.style.opacity = 1;
			
				contentEl.DOM.img.style.visibility = 'hidden';
			// Animate the grid´s image back to the grid position.
			TweenMax.to(item.DOM.tilt.img, withAnimation ? 1.2 : 0, {
				ease: Expo.easeInOut,
				
				scaleX: 1,
				scaleY: 1,
				x: 0,
				y: 0,
				rotation: item.angle*2
			});

//TWEEN


// TweenMax.to(item.DOM.bg, withAnimation ? 4.2 : 0, {
// 	ease: Expo.easeInOut,
// 	delay: 0.15,
// 	x: -10,  -10 7
// 	y: 0.1,
// 	scaleX: 4,
// 	scaleY: 1,

			TweenMax.to(item.DOM.bg, withAnimation ? 1.2 : 0, {
				ease: Expo.easeInOut,
				delay: 0.15,
			x: 0,
				
				y: 0,
				scaleX: 1,
			scaleY: 1,
				rotation: 0,
					onComplete: () => {
					contentEl.DOM.el.classList.remove('content__item--current');
					item.DOM.bg.style.position = 'absolute';
						item.DOM.bg.style.left = '0px';
						item.DOM.bg.style.top = '0px';
					this.current = -1;
					allowTilt = true;
			item.DOM.el.style.zIndex = 0;
						enableScroll();
					
						this.isAnimating = false;
				}
			// 	item.hideTexts();
			// item.DOM.el.style.zIndex = 1000;
			// const itemDim = this.getSizePosition(item.DOM.el);
			// 		item.DOM.bg.style.width = `${itemDim.width}px`;
			// 	item.DOM.bg.style.height = `${itemDim.height}px`;
			// item.DOM.bg.style.left = `${itemDim.left}px`;
			// item.DOM.bg.style.top = `${itemDim.top}px`;
			// item.DOM.bg.style.position = 'fixed';


			});
			// Show all the grid items except the one we want to close.
			this.showAllItems(item, withAnimation);
			// Also show the item texts. (1s delay)
			item.showTexts(1, withAnimation);
		}

		showContentElems(contentEl, delay = 0, withAnimation = true) { this.toggleContentElems(contentEl, delay, withAnimation); }
			hideContentElems(contentEl, delay = 0, withAnimation = true) { this.toggleContentElems(contentEl, delay, withAnimation, false); }
		toggleContentElems(contentEl, delay, withAnimation, show = true) {
			TweenMax.to([this.DOM.closeCtrl, this.DOM.scrollIndicator], withAnimation ? 0.8 : 0, {
				
				ease: show ? Expo.easeOut : Expo.easeIn,
				
				delay: withAnimation ? delay : 0,
				
				startAt: show ? {y: 60} : null,
				y: show ? 0 : 60,
				opacity: show ? 1 : 0
			});
			if ( show ) {
				contentEl.show(delay, withAnimation);
			}
			else {
				contentEl.hide(delay, withAnimation);
			}
		}
		// Based on https://stackoverflow.com/q/25481717
		sortByDist(refPoint, itemsArray) {
			let distancePairs = [];
			let output = [];
	
			for(let i in itemsArray) {
				const rect = itemsArray[i].DOM.el.getBoundingClientRect();
				distancePairs.push([distance(refPoint,{x:rect.left+rect.width/2, y:rect.top+rect.height/2}), i]);
			}
	
			distancePairs.sort((a,b) => a[0]-b[0]);
	
			for(let p in distancePairs) {
				const pair = distancePairs[p];
				output.push(itemsArray[pair[1]]);
			}
	
			return output;
		}
		// onComplete: () => {
		// 	contentEl.DOM.el.classList.remove('content__item--current');
		// 	item.DOM.bg.style.position = 'absolute';
		// 	item.DOM.bg.style.left = '0px';
		// 	item.DOM.bg.style.top = '0px';
		// 	this.current = -1;
		// 	allowTilt = true;
		
		showAllItems(exclude, withAnimation = true) { this.toggleAllItems(exclude, withAnimation); }
			
			hideAllItems(exclude, withAnimation = true) { this.toggleAllItems(exclude, withAnimation, false); }
		
					toggleAllItems(exclude, withAnimation, show = true) {
						if ( !withAnimation ) {
							this.items.filter(item => item != exclude).forEach((item, pos) => item[show ? 'show' : 'hide'](withAnimation));
			}
			else {
				const refrect = exclude.DOM.el.getBoundingClientRect(); 
		
		
				const refPoint = {
					x: refrect.left+refrect.width/2, 
					y: refrect.top+refrect.height/2
				};
				this.sortByDist(refPoint, this.items.filter(item => item != exclude))
					.forEach((item, pos) => setTimeout(() => item[show ? 'show' : 'hide'](), show ? 300+pos*70 : pos*70));
			}
		}
	}

	let allowTilt = true;



	
	// Caching some stuff..
		const body = document.body;
	const docEl = document.documentElement;
	
			// Window 
    let winsize;
    const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
    calcWinsize();
    window.addEventListener('resize', calcWinsize);

		// Initialize the Grid.
		const grid = new Grid(document.querySelector('.grid'));

	// Preload images.
	imagesLoaded(document.querySelectorAll('.thumb-img'), () => {
		body.classList.remove('loading');
		var msnry = new Masonry( grid.DOM.el, {
			// options
			itemSelector: '.thumb',
				columnWidth: 260,
			gutter: 100,
			fitWidth: true
		});
	});




}


//https://webdevtrick.com/css-parallax-tilt-effect-card/
