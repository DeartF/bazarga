app.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$http' , '$scope' , '$rootScope' , '$state' , '$cookies'];

function MainCtrl($http, $scope , $rootScope , $state , $cookies) {
	var vm = this;



	$(document).ready(function() {
		$('#enscart_image_wrapper').css({'background-color': '#31c309', 'margin-top': '70px'})
		$('#enscart_counter').css({'background-color': '#29a206', 'margin-top': '68px'})
		$('.flickity-enabled.is-draggable .flickity-viewport').css({'height': '900px'})
		// $('#enscart_image_wrapper').append('<img src="./../../images/small/shopping-cart.svg" class = "shopping-cart">');

		$('.salad__info-text').css('opacity' , '0')

		// $('.salad__info').click(function() {
		// 	$(this).find('.salad__info-text').show(300)
		// 	$(this).find('.salad__info-text').addClass('text__active')
		// })

		$('.salad__info-text').on('click' , function() {
					if(!$(this).hasClass('clicked')) {
						$(this).addClass('clicked')
						$(this).css('opacity' , '1')
						console.log('first click')
					} else {
						$(this).removeClass('clicked')
						$(this).css('opacity' , '0')
						console.log('second click')

					}
				})

		$(function() {
			function accodrion() {
			var data = $(".accodrion").attr("data-accordion")

			$(".accordion-header").on('click' , function() {
				if ( data === "close") {
					$(".accordion-body").slideUp()
					if($(this).hasClass("avtive")) {
						$(this).toggleClass("active")
					} else {
						$(".accordion-header").removeClass("active")
						$(this).toggleClass("active")
					}
				} else {
					$(this).toggleClass("active")
				}
				$(this).next(".accordion-body").not(":animated").slideToggle()
			})
		}

		accodrion()	
		})
	})



	

	if($cookies.getObject('session')) {
		$rootScope.session = $cookies.getObject('session');
	}

	// Dynamic text
	var words = ['Оформи заявку','Оплати покупку' , 'Через час мы уже у двери!' , 'Мы предлагаем вам избавиться от' , 'Ходьбы по базарам!' , 'Закажи у нас и довольствуйся!'];
	var i=0;
	var j=0;
	var title = document.getElementById('dynamic');

	function inputText(){
		var str="";
		var interval = setInterval(function(){

			if(str.length == words[i].length){

				clearInterval(interval);
				setTimeout(function(){
					eraseText();
				},500)

			} else{
				str = str + words[i][j];
				title.innerHTML = str + '<span style="color:#999999;">|</span>';
				j++;
			}
		},80);
	}
	function eraseText(){
		var str= words[i];
		var interval = setInterval(function(){
			if(str.length == 0 ){
				if(i == words.length-1){
					i=0;
				}else{
					i++
				}
				j = 0;
			 	clearInterval(interval);
			 	inputText();
			}
			str = str.substring(0,str.length - 1);
			title.innerHTML = str + '<span style="color:#d54d1c;">|</span>';
		},20)
	}

	// inputText();

	// selectCity

	$

	$( function() {
 
	if (localStorage.getItem("myKey")) {
	    var stored_select = localStorage.getItem("myKey");
	    $('#' + stored_select).prop( "selected", true );
	    $('.' + stored_select).show();
	    } else {
	$('.almaty').show();
	}
	});
	 
	$("#selectItem").change(function(){
	    $('.containerss').find('div').hide();
	    var selected = $('#selectItem option:selected').attr('id');
	    localStorage.setItem("myKey", selected);
	    $('.' + selected).show();
	}); 

	//Slider

	$(document).ready(function() {
		$('.nextt').click(function() {
			var currentImage = $('.slider__about.curry');
			var currentImageIndex = $('.slider__about.curry').index();
			var nextImageIndex = currentImageIndex + 1;
			var nextImage = $('.slider__about').eq(nextImageIndex)
			currentImage.removeClass('curry');

			if(nextImageIndex == ($('.slider__about:last').index() + 1)) {
				$('.slider__about').eq(0).addClass('curry');
			} else {
				nextImage.addClass('curry')

			}
		})

		$('.prevv').click(function() {
			var currentImage = $('.slider__about.curry');
			var currentImageIndex = $('.slider__about.curry').index();
			var prevImageIndex = currentImageIndex - 1;
			var prevtImage = $('.slider__about').eq(prevImageIndex)

			currentImage.removeClass('curry');
			prevtImage.addClass('curry');
		})
	})

	// Score

	// $(window).scroll(function() {
	// $('.score').each(function() {
	// 	var imagePos = $(this).offset().top;
	// 	var topOfWindow = $(window).scrollTop();
	// 	if(imagePos < topOfWindow + 700) {
	// 		$('.count').each(function() { // each() функия будет выполняться для каждого элемента
	// 			$(this).prop('Counter' , 1).animate({   // porp возвращае или изминяет значение свойств выбранных элементов
	// 				Counter:$(this).text()
	// 			} , {
	// 				duration: 2000,
	// 				esing: 'swing' , //переход
	// 				step:function(now) {
	// 					$(this).text(Math.ceil(now))
	// 				}
	// 			})
	// 		})
	// 		$(window).off('scroll')
	// 	}
	// })
	// })

	$('.selected__item').click(function() {
		$('.selected__item-active').removeClass('selected__item-active')
		$(this).addClass('selected__item-active')
	})

	vm.modelSetFirst = function() {
		$('.model-footwear-active-2').css('display' , 'none')
		$('.model-footwear-active-3').css('display' , 'none')
		$('.model-footwear-active-1').css('display' , 'flex')
	}

	vm.modelSetSecond = function() {
		$('.model-footwear-active-1').css('display' , 'none')
		$('.model-footwear-active-3').css('display' , 'none')
		$('.model-footwear-active-2').css('display' , 'flex')
	}

	vm.modelSetThird = function() {
		$('.model-footwear-active-1').css('display' , 'none')
		$('.model-footwear-active-2').css('display' , 'none')
		$('.model-footwear-active-3').css('display' , 'flex')
	}

	// Animation on scroll

		 $(window).scroll(function() {
			$('.mov').each(function() {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if(imagePos < topOfWindow + 800) {
					$(this).addClass('wobble');
				}
			})
		})

		$(window).scroll(function() {
			$('.mov2').each(function() {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if(imagePos < topOfWindow + 800) {
					$(this).addClass('fadeInLeft');
				}
			})
		})

		$(window).scroll(function() {
			$('.mov3').each(function() {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if(imagePos < topOfWindow + 800) {
					$(this).addClass('fadeInRight');
				}
			})
		})

		$(window).scroll(function() {
			$('.mov4').each(function() {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if(imagePos < topOfWindow + 800) {
					$(this).addClass('rollIn');
				}
			})
		})


		$(window).scroll(function() {
			$('.new-info').each(function() {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if(imagePos < topOfWindow + 900) {
					$(this).addClass('zoomInUp');
				}
			})
		})

		$(window).scroll(function() {
			$('.pavilion__inner-item').each(function() {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if(imagePos < topOfWindow + 800) {
					$(this).addClass('rollIn');
				}
			})
		})

		$(window).scroll(function() {
			$('.slider__inner').each(function() {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if(imagePos < topOfWindow + 800) {
					$(this).addClass('outRotating');
				}
			})
		})


		$(window).scroll(function() {
			$('.recept__text').each(function() {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if(imagePos < topOfWindow + 700) {
					$(this).addClass('bounceInUp');
				}
			})
		})

		$(window).scroll(function() {
			$('.score').each(function() {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if(imagePos < topOfWindow + 980) {
					$(this).addClass('wobble');
				}
			})
		})

		$(window).scroll(function() {
			$('.footer-inner').each(function() {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if(imagePos < topOfWindow + 700) {
					$(this).addClass('rubberBand')
				}
			})
		})

		

		$(window).scroll(function() {
			$('.choose__pavilion-list').each(function() {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if(imagePos < topOfWindow + 800) {
					$(this).addClass('bounceInDown')
				}
			})
		})

		$(window).scroll(function() {
			$('.choose__me-inner').each(function() {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if(imagePos < topOfWindow + 500) {
					$(this).addClass('bounceIn')
					$('.inner__block').addClass('inner__block-circleChoose')
				}
			})
		})


		$(document).ready(function() {
		    $('.arrow-7').click(function() {
		    	var offset = +150;
		    	$('html , body').animate({
			      scrollTop: $('.slider').offset().top - offset
				} , 1000);
			    return false;
		    })
	 	 });

		

		$(document).ready(function() {
		    $('.mobile__packets').click(function() {
		    	var offset = +200;
		    	$('html , body').animate({
			      scrollTop: $('.packets__inner').offset().top - offset
				} , 1000);
			    return false;
		    })
	 	 });


		// Other Animation


		$http.get('/api/user')
		.success(function(response) {
			vm.users = response
		})
		.error(function(err) {
			console.log(err)
		})

		
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}
// - Noel Delgado | @pixelia_me

var nodes = [].slice.call(document.querySelectorAll('ol'), 0);
var directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
var classNames = ['in', 'out'].map(function (p) {return Object.values(directions).map(function (d) {return p + '-' + d;});}).reduce(function (a, b) {return a.concat(b);});

var getDirectionKey = function getDirectionKey(ev, node) {var _node$getBoundingClie =
  node.getBoundingClientRect(),width = _node$getBoundingClie.width,height = _node$getBoundingClie.height,top = _node$getBoundingClie.top,left = _node$getBoundingClie.left;
  var l = ev.pageX - (left + window.pageXOffset);
  var t = ev.pageY - (top + window.pageYOffset);
  var x = l - width / 2 * (width > height ? height / width : 1);
  var y = t - height / 2 * (height > width ? width / height : 1);
  return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
};var

Item = function () {
  function Item(element) {var _this = this;_classCallCheck(this, Item);
    this.element = element;
    this.element.addEventListener('mouseover', function (ev) {return _this.update(ev, 'in');});
    this.element.addEventListener('mouseout', function (ev) {return _this.update(ev, 'out');});
    this.element.addEventListener('click', function (ev) {return _this.update(ev, 'in');});
    this.element.addEventListener('dbclick', function (ev) {return _this.update(ev, 'out');});
  }_createClass(Item, [{ key: 'update', value: function update(

    ev, prefix) {var _element$classList;
      (_element$classList = this.element.classList).remove.apply(_element$classList, _toConsumableArray(classNames));
      this.element.classList.add(prefix + '-' + directions[getDirectionKey(ev, this.element)]);
    } }]);return Item;}();


nodes.forEach(function (node) {return new Item(node);});

$(document).ready(function() {
	$('.main-carousel').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true,
	  // freeScroll: true,
	  wrapAround: true,
	  autoPlay: 3000,
	  pauseAutoPlayOnHover: false,
	  imagesLoaded: true,
	    freeScroll: true,

	  

	});

})



$(document).ready(function() {
	$('.salad__carousel').flickity({
	    freeScroll: true,
		contain: true,
		// disable previous & next buttons and dots
		prevNextButtons: false,
		pageDots: false,
		wrapAround: true,
	    autoPlay: 2000,
	    pauseAutoPlayOnHover: true,
	    rightToLeft: true
	});

})


$(document).ready(function() {
	$('.ads-carousel').flickity({
		// contain: true,
		// disable previous & next buttons and dots
		pageDots: false,
		wrapAround: true,
	});

})




$(window).scroll(function() {
			$('.container__ul-ol').each(function() {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if(imagePos < topOfWindow + 300) {
					$(this).addClass('in-top');
				}
			})
		})

// function windowSize(){
//     if ($(window).width() <= '430'){
//         $('.container__ul-ol').addClass('in-top');
//     } 
// }

// $(window).on('load resize',windowSize);
	

$(window).scroll(function() {
	$('.inner__block').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if(imagePos < topOfWindow + 400) {
			$('.inner__block-img').css({'top': '30%', 'border-color': '#e09111'});
			$('.inner__block-i').css('color' , '#e09111');
			$('.choose__info').css('opacity' , 1);

		}
	})
})

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  More about this function - 
  https://codepen.io/rachsmith/post/animation-tip-lerp
*/
function lerp(_ref, _ref2) {
  var x = _ref.x;
  var y = _ref.y;
  var targetX = _ref2.x;
  var targetY = _ref2.y;

  var fraction = 0.2;

  x += (targetX - x) * fraction;
  y += (targetY - y) * fraction;

  return { x: x, y: y };
}

var Slider = function () {
  function Slider(el) {
    _classCallCheck(this, Slider);

    var imgClass = this.IMG_CLASS = 'slider__images-item';
    var textClass = this.TEXT_CLASS = 'slider__text-item';
    var activeImgClass = this.ACTIVE_IMG_CLASS = imgClass + '--active';
    var activeTextClass = this.ACTIVE_TEXT_CLASS = textClass + '--active';

    this.el = el;
    this.contentEl = document.getElementById('slider-content');
    this.onMouseMove = this.onMouseMove.bind(this);

    document.getElementById('slider-dots').addEventListener('click', this.onDotClick.bind(this));

    document.getElementById('left').addEventListener('click', this.prev.bind(this));

    document.getElementById('right').addEventListener('click', this.next.bind(this));

    window.addEventListener('resize', this.onResize.bind(this));

    // taking advantage of the live nature of 'getElement...' methods
    this.activeImg = el.getElementsByClassName(activeImgClass);
    this.activeText = el.getElementsByClassName(activeTextClass);
    this.images = el.getElementsByTagName('img');

    this.onResize();

    this.length = this.images.length;
    this.lastX = this.lastY = this.targetX = this.targetY = 0;
  }

  Slider.prototype.onResize = function onResize() {
    var mobileBreakpoint = getComputedStyle(document.documentElement).getPropertyValue('--mobile-bkp');

    var isMobile = this.isMobile = matchMedia('only screen and (max-width: ' + mobileBreakpoint + ')').matches;

    this.halfWidth = innerWidth / 2;
    this.halfHeight = innerHeight / 2;
    this.zDistance = getComputedStyle(document.documentElement).getPropertyValue('--z-distance');

    if (!isMobile && !this.mouseWatched) {
      this.mouseWatched = true;
      this.el.addEventListener('mousemove', this.onMouseMove);
      this.el.style.setProperty('--img-prev', 'url(' + this.images[+this.activeImg[0].dataset.id - 1].src + ')');
      this.contentEl.style.setProperty('transform', 'translateZ(' + this.zDistance + ')');
    } else if (isMobile && this.mouseWatched) {
      this.mouseWatched = false;
      this.el.removeEventListener('mousemove', this.onMouseMove);
      this.contentEl.style.setProperty('transform', 'none');
    }
  };

  Slider.prototype.getMouseCoefficients = function getMouseCoefficients() {
    var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var pageX = _ref3.pageX;
    var pageY = _ref3.pageY;

    var halfWidth = this.halfWidth;
    var halfHeight = this.halfHeight;
    var xCoeff = ((pageX || this.targetX) - halfWidth) / halfWidth;
    var yCoeff = (halfHeight - (pageY || this.targetY)) / halfHeight;

    return { xCoeff: xCoeff, yCoeff: yCoeff };
  };

  Slider.prototype.onMouseMove = function onMouseMove(_ref4) {
    var pageX = _ref4.pageX;
    var pageY = _ref4.pageY;

    this.targetX = pageX;
    this.targetY = pageY;

    if (!this.animationRunning) {
      this.animationRunning = true;
      this.runAnimation();
    }
  };

  Slider.prototype.runAnimation = function runAnimation() {
    if (this.animationStopped) {
      this.animationRunning = false;
      return;
    }

    var maxX = 10;
    var maxY = 10;

    var newPos = lerp({
      x: this.lastX,
      y: this.lastY
    }, {
      x: this.targetX,
      y: this.targetY
    });

    var _getMouseCoefficients = this.getMouseCoefficients({
      pageX: newPos.x,
      pageY: newPos.y
    });

    var xCoeff = _getMouseCoefficients.xCoeff;
    var yCoeff = _getMouseCoefficients.yCoeff;

    this.lastX = newPos.x;
    this.lastY = newPos.y;

    this.positionImage({ xCoeff: xCoeff, yCoeff: yCoeff });

    this.contentEl.style.setProperty('transform', '\n      translateZ(' + this.zDistance + ')\n      rotateX(' + maxY * yCoeff + 'deg)\n      rotateY(' + maxX * xCoeff + 'deg)\n    ');

    if (this.reachedFinalPoint) {
      this.animationRunning = false;
    } else {
      requestAnimationFrame(this.runAnimation.bind(this));
    }
  };

  Slider.prototype.positionImage = function positionImage(_ref5) {
    var xCoeff = _ref5.xCoeff;
    var yCoeff = _ref5.yCoeff;

    var maxImgOffset = 1;
    var currentImage = this.activeImg[0].children[0];

    currentImage.style.setProperty('transform', '\n      translateX(' + maxImgOffset * -xCoeff + 'em)\n      translateY(' + maxImgOffset * yCoeff + 'em)\n    ');
  };

  Slider.prototype.onDotClick = function onDotClick(_ref6) {
    var target = _ref6.target;

    if (this.inTransit) return;

    var dot = target.closest('.slider__nav-dot');

    if (!dot) return;

    var nextId = dot.dataset.id;
    var currentId = this.activeImg[0].dataset.id;

    if (currentId == nextId) return;

    this.startTransition(nextId);
  };

  Slider.prototype.transitionItem = function transitionItem(nextId) {
    var _this = this;

    function onImageTransitionEnd(e) {
      e.stopPropagation();

      nextImg.classList.remove(transitClass);

      self.inTransit = false;

      this.className = imgClass;
      this.removeEventListener('transitionend', onImageTransitionEnd);
    }

    var self = this;
    var el = this.el;
    var currentImg = this.activeImg[0];
    var currentId = currentImg.dataset.id;
    var imgClass = this.IMG_CLASS;
    var textClass = this.TEXT_CLASS;
    var activeImgClass = this.ACTIVE_IMG_CLASS;
    var activeTextClass = this.ACTIVE_TEXT_CLASS;
    var subActiveClass = imgClass + '--subactive';
    var transitClass = imgClass + '--transit';
    var nextImg = el.querySelector('.' + imgClass + '[data-id=\'' + nextId + '\']');
    var nextText = el.querySelector('.' + textClass + '[data-id=\'' + nextId + '\']');

    var outClass = '';
    var inClass = '';

    this.animationStopped = true;

    nextText.classList.add(activeTextClass);

    el.style.setProperty('--from-left', nextId);

    currentImg.classList.remove(activeImgClass);
    currentImg.classList.add(subActiveClass);

    if (currentId < nextId) {
      outClass = imgClass + '--next';
      inClass = imgClass + '--prev';
    } else {
      outClass = imgClass + '--prev';
      inClass = imgClass + '--next';
    }

    nextImg.classList.add(outClass);

    requestAnimationFrame(function () {
      nextImg.classList.add(transitClass, activeImgClass);
      nextImg.classList.remove(outClass);

      _this.animationStopped = false;
      _this.positionImage(_this.getMouseCoefficients());
      currentImg.classList.add(transitClass, inClass);
      currentImg.addEventListener('transitionend', onImageTransitionEnd);
    });

    if (!this.isMobile) this.switchBackgroundImage(nextId);
  };

  Slider.prototype.startTransition = function startTransition(nextId) {
    function onTextTransitionEnd(e) {
      if (!e.pseudoElement) {
        e.stopPropagation();

        requestAnimationFrame(function () {
          self.transitionItem(nextId);
        });

        this.removeEventListener('transitionend', onTextTransitionEnd);
      }
    }

    if (this.inTransit) return;

    var activeText = this.activeText[0];
    var backwardsClass = this.TEXT_CLASS + '--backwards';
    var self = this;

    this.inTransit = true;

    activeText.classList.add(backwardsClass);
    activeText.classList.remove(this.ACTIVE_TEXT_CLASS);
    activeText.addEventListener('transitionend', onTextTransitionEnd);

    requestAnimationFrame(function () {
      activeText.classList.remove(backwardsClass);
    });
  };

  Slider.prototype.next = function next() {
    if (this.inTransit) return;

    var nextId = +this.activeImg[0].dataset.id + 1;

    if (nextId > this.length) nextId = 1;

    this.startTransition(nextId);
  };

  Slider.prototype.prev = function prev() {
    if (this.inTransit) return;

    var nextId = +this.activeImg[0].dataset.id - 1;

    if (nextId < 1) nextId = this.length;

    this.startTransition(nextId);
  };

  Slider.prototype.switchBackgroundImage = function switchBackgroundImage(nextId) {
    function onBackgroundTransitionEnd(e) {
      if (e.target === this) {
        this.style.setProperty('--img-prev', imageUrl);
        this.classList.remove(bgClass);
        this.removeEventListener('transitionend', onBackgroundTransitionEnd);
      }
    }

    var bgClass = 'slider--bg-next';
    var el = this.el;
    var imageUrl = 'url(' + this.images[+nextId - 1].src + ')';

    el.style.setProperty('--img-next', imageUrl);
    el.addEventListener('transitionend', onBackgroundTransitionEnd);
    el.classList.add(bgClass);
  };

  _createClass(Slider, [{
    key: 'reachedFinalPoint',
    get: function get() {
      var lastX = ~ ~this.lastX;
      var lastY = ~ ~this.lastY;
      var targetX = this.targetX;
      var targetY = this.targetY;

      return (lastX == targetX || lastX - 1 == targetX || lastX + 1 == targetX) && (lastY == targetY || lastY - 1 == targetY || lastY + 1 == targetY);
    }
  }]);

  return Slider;
}();

var sliderEl = document.getElementById('slider');
var slider = new Slider(sliderEl);

// ------------------ Demo stuff ------------------------ //

var timer = 0;

function autoSlide() {
  requestAnimationFrame(function () {
    slider.next();
  });

  timer = setTimeout(autoSlide, 5000);
}

function stopAutoSlide() {
  clearTimeout(timer);

  this.removeEventListener('touchstart', stopAutoSlide);
  this.removeEventListener('mousemove', stopAutoSlide);
}

sliderEl.addEventListener('mousemove', stopAutoSlide);
sliderEl.addEventListener('touchstart', stopAutoSlide);

timer = setTimeout(autoSlide, 2000);








var d = document,
    itemBox = d.querySelectorAll('.item_box'), // блок каждого товара
    cartCont = d.getElementById('cart_content'); // блок вывода данных корзины
// Функция кроссбраузерной установка обработчика событий
// function addEvent(elem, type, handler){
//   if(elem.addEventListener){
//     elem.addEventListener(type, handler, false);
//   } else {
//     elem.attachEvent('on'+type, function(){ handler.call( elem ); });
//   }
//   return false;
// }
// Получаем данные из LocalStorage
function getCartData(){
  return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o){
  localStorage.setItem('cart', JSON.stringify(o));
  return false;
}
// Добавляем товар в корзину
function addToCart(e){
  this.disabled = true; // блокируем кнопку на время операции с корзиной
  var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
      parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
      itemId = this.getAttribute('data-id'), // ID товара
      itemTitle = parentBox.querySelector('.item_title').innerHTML, // название товара
      itemPrice = parentBox.querySelector('.item_price').innerHTML; // стоимость товара
  if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
    cartData[itemId][2] += 1;
  } else { // если товара в корзине еще нет, то добавляем в объект
    cartData[itemId] = [itemTitle, itemPrice, 1];
  }
  if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
    this.disabled = false; // разблокируем кнопку после обновления LS
  }
  	Swal.fire({
  position: 'top-end',
  type: 'success',
  title: 'Продукт успешно добавлен в пакет',
  showConfirmButton: false,
  timer: 1000
})
 return false;
}
// Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
for(var i = 0; i < itemBox.length; i++){
  addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}
// Открываем корзину со списком добавленных товаров
function openCart(e){
  var cartData = getCartData(), // вытаскиваем все данные корзины
      totalItems = '';
  // если что-то в корзине уже есть, начинаем формировать данные для вывода
  if(cartData !== null){
    totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
    for(var items in cartData){
      totalItems += '<tr>';
      for(var i = 0; i < cartData[items].length; i++){
        totalItems += '<td>' + cartData[items][i] + '</td>';
      }
      totalItems += '</tr>';
    }
    totalItems += '</table>';
    cartCont.innerHTML = totalItems;
    setCartData(cartData)
  } else {
    // если в корзине пусто, то сигнализируем об этом
    cartCont.innerHTML = 'В пакете пусто!';
        	Swal.fire({
  position: 'top-start',
  title: 'В пакете пусто',
  showConfirmButton: false,
  timer: 1000
})
  }
  return false;
}
/* Открыть корзину */
// addEvent(d.getElementById('checkout'), 'click', openCart);
/* Очистить корзину */
// addEvent(d.getElementById('clear_cart'), 'click', function(e){
//   localStorage.removeItem('cart');
//     	Swal.fire({
//   position: 'top-start',
//   type: 'success',
//   title: 'Пакет успешно очищен',
//   showConfirmButton: false,
//   timer: 1000
// })
//   cartCont.innerHTML = 'Пакет очищен';
// });



}
