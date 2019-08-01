javascript: (async function () {
    /* Get all answers in a google search page, which have a "g" class. */
    let elements = document.querySelectorAll(".g");
    const halfElementsSize = elements.length / 2;

    /* Transform NodeList into array so we can use the built-in sort method */
    /* and randomize the positions of value in the array */
    elements = Array.from(elements).sort(() => {
        return 0.5 - Math.random()
    });

    for (let i = 0; i < halfElementsSize; i++) {
        const el = elements[i];

        scroll(el);
        await sleep(500);

        setOpacityToZero(el);
        console.log("I did it ma");
        await sleep(1000);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Scroll to the location of the element plus some top bandwidth
     * @param {HTMLDivElement} element - Element to scroll to
     */
    function scroll(element) {
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