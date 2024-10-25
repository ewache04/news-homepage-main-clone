document.addEventListener("DOMContentLoaded", function() {
    function adjustImageWeb3() {
        var windowWidth = window.innerWidth;

        // Select the main image element
        var imageWeb3Container = document.querySelector('.image-web-3');
        var imgElement = imageWeb3Container ? imageWeb3Container.querySelector('img') : null;

        // Ensure the imageWeb3Container and imgElement exist
        if (!imageWeb3Container || !imgElement) {
            console.error("Image or container element not found");
            return;
        }

        // Adjust the image source and class based on window width
        if (windowWidth < 768) {
            imgElement.src = "assets/images/image-web-3-mobile.jpg"; // Set mobile image
            imageWeb3Container.classList.remove('image-web-3-desktop');
            imageWeb3Container.classList.add('image-web-3-mobile');
        } else {
            imgElement.src = "assets/images/image-web-3-desktop.jpg"; // Set desktop image
            imageWeb3Container.classList.remove('image-web-3-mobile');
            imageWeb3Container.classList.add('image-web-3-desktop');
        }
    }

    function adjustSmallScreenMargin() {
        var windowWidth = window.innerWidth;

        // Select the #small-screen-margin element
        var smallScreenMarginElement = document.getElementById('small-screen-margin');

        // Check if the element exists
        if (!smallScreenMarginElement) {
            console.error("#small-screen-margin element not found");
            return;
        }

        // Adjust margin and remove class for small screens
        if (windowWidth < 768) {
            smallScreenMarginElement.style.margin = "10px"; // Set margin to 10px for small screens
            smallScreenMarginElement.classList.remove('container-fluid'); // Remove container-fluid class for small screens
        } else {
            smallScreenMarginElement.style.margin = "0px"; // Reset margin for larger screens
            smallScreenMarginElement.classList.add('container-fluid'); // Add container-fluid class back for larger screens
        }
    }

    function adjustFeaturedArticlesMargin() {
        var windowWidth = $(window).width();

        var featuredArticlesElement = $('.featured-articles');
        if (!featuredArticlesElement.length) {
            console.error(".featured-articles element not found");
            return;
        }

        if (windowWidth < 768) {
            featuredArticlesElement.css('margin', '14px');
        } else {
            featuredArticlesElement.css('margin', '0px');
        }
    }

    function adjustSidebarVisibility() {
        var windowWidth = $(window).width();

        if (windowWidth < 768) {
            // Show mobile sidebar and hide desktop sidebar on small screens
            $('.show-on-mobile').show();
            $('.hide-on-mobile').hide();
        } else {
            // Hide mobile sidebar and show desktop sidebar on larger screens
            $('.show-on-mobile').hide();
            $('.hide-on-mobile').show();
        }
    }

    function initialize() {
        // Call both functions to set the initial layout and margins
        adjustImageWeb3();
        adjustSmallScreenMargin();
        adjustFeaturedArticlesMargin();
        adjustSidebarVisibility();

        // Add window resize event listener for layout and margin adjustments
        window.addEventListener('resize', function() {
            adjustImageWeb3();
            adjustSmallScreenMargin();
            adjustFeaturedArticlesMargin();
            adjustSidebarVisibility();
        });
    }

    initialize(); // Initialize event listeners and adjust the layout
});
