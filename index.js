javascript: (async function () {
    /* Get all answers in a google search page, which have a "g" class. */
    let elements = document.querySelectorAll(".g");
    const halfElementsSize = elements.length / 2;

    /* Transform NodeList into array so we can use the built-in sort method */
    /* and randomize the positions of value in the array */
    elements = Array.from(elements).sort(() => {
        return 0.5 - Math.random()
    });

    /* Loop through half of the randomized array and make them disappear from the DOM */
    for (let i = 0; i < halfElementsSize; i++) {
        /* Get the element at index i */
        const el = elements[i];

        /* Scroll to the element and wait for 500ms before making it disappear (optional) */
        scrollTo(el);
        await sleep(500);

        /* Make the element disappear by turning down the opacity and wait for 1 second before doing the next one (optional) */
        setOpacityToZero(el); 
        await sleep(1000);
    }

    /*
    * Utility function used to force the program to wait for a number of miliseconds before moving on.
    * You only need to do this if you want to do each disappearance one at a time.
    * @param {number} ms - Number of miliseconds you would like the program to wait
    */
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Scroll to the location of the element plus some space at the top and bottom.
     * @param {HTMLDivElement} element - Element to scroll to
     */
    function scrollTo(element) {
        window.scrollTo(0,  element.offsetTop - (window.innerHeight / 2));
    }

    /**
     * Set opacity of an html element to 0
     * @param {HTMLDivElement} element - The element we want to set the opacity 
     *  to zero of. We know it's a HTMLDivElement from looking at the Google's
     *  DOM page
     */
    function setOpacityToZero(element) {
        /* You can make them fade at different rates by randomizing the value */
        element.style.transitionDuration = "1s";
        element.style.opacity = 0;
    }
})();
