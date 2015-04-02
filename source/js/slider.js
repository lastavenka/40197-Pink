(function(){
    var selectedReview = 0;
    var reviewsDots = document.querySelectorAll('.reviews-slider__pagination > i');
    var reviews = document.querySelector('.reviews-slider__container');
    var priceDots = document.querySelectorAll('.price__pagination > i');
    var price = document.querySelector('.price__table');
    
    for (var i=0; i < reviewsDots.length; i++) {
        reviewsDots[i].addEventListener('tap', function(event) {
            var n = Array.prototype.indexOf.call(
                event.target.parentNode.children,
                event.target
            );
            
            selectedReview = n;
            
            document.querySelector('.reviews-slider__pagination-active').classList.remove('reviews-slider__pagination-active');
            event.target.classList.add('reviews-slider__pagination-active');
            
            reviews.style.webkitTransform = reviews.style.transform = 'translateX(-'+ (100 / 3 * n) +'%)';
        });
    }
    

    document.querySelector('.reviews-slider__controls--prev').addEventListener("click", function(event) {
        var target = event.target;
        
        if (selectedReview == 0) {
            return;
        }
        
        selectedReview--;
        reviews.style.webkitTransform = reviews.style.transform = 'translateX(-'+ (100 / 3 * selectedReview) +'%)';
    });
    
    document.querySelector('.reviews-slider__controls--next').addEventListener("click", function(event) {
        var target = event.target;
        
        if (selectedReview >= 2) {
            return;
        }
        
        selectedReview++;
        
        reviews.style.webkitTransform = reviews.style.transform = 'translateX(-'+ (100 / 3 * selectedReview) +'%)';
    });
    
    for (var i=0; i < priceDots.length; i++) {
        priceDots[i].addEventListener('tap', function(event) {
            var n = Array.prototype.indexOf.call(
                event.target.parentNode.children,
                event.target
            );
            
            document.querySelector('.price__pagination-active').classList.remove('price__pagination-active');
            event.target.classList.add('price__pagination-active');
            
            price.style.webkitTransform = price.style.transform = 'translateX(-'+ (100 / 3 * n) +'%)';
        });
    }
})();