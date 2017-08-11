(function(window, document) {
    if (isBoxSelected(1)) {
        console.log(`Is in box selected 1?`);
        document.getElementById('module-1').classList.add('completed-module');
    }
    if (isBoxSelected(2)) {
        console.log(`Is in box selected 2?`);
        document.getElementById('module-2').classList.add('completed-module');
    }
    if (isBoxSelected(3)) {
        console.log(`Is in box selected 3?`);
        document.getElementById('module-3').classList.add('completed-module');
    }
    if (isBoxSelected(4)) {
        console.log(`Is in box selected 4?`);
        document.getElementById('module-4').classList.add('completed-module');
    }

    addEventListeners();

    addRouting();
})(window, document);

/************************************** CLICK EVENT HANDLING **************************************/
function addEventListeners() {
    const modules = getModuleBoxElements();

    modules.module1Box.addEventListener("click", () => {
        console.log(`Event occurred!`);
        modules.module1Box.classList.add('completed-module');
        setModuleComplete(1);
    });

    modules.module2Box.addEventListener("click", () => {
        console.log(`Event occurred!`);
        modules.module2Box.classList.add('completed-module');
        setModuleComplete(2);
    });

    modules.module3Box.addEventListener("click", () => {
        console.log(`Event occurred!`);
        modules.module3Box.classList.add('completed-module');
        setModuleComplete(3);
    });

    modules.module4Box.addEventListener("click", () => {
        console.log(`Event occurred!`);
        modules.module4Box.classList.add('completed-module');
        setModuleComplete(4);
    });
}



/******************************************** ROUTING *********************************************/
function addRouting() {
    window.onhashchange = routingHandler;
    document.addEventListener("DOMContentLoaded", routingHandler);
}


function routingHandler() {
    const pages = {
        home:              document.getElementById('home'),
        whyStudyInGroups:  document.getElementById('why-study-in-groups'),
        whatIsAStudyGroup: document.getElementById('what-is-a-study-group'),
        commonProblems:    document.getElementById('common-problems'),
    };

    function hideInactivePages(activePage) {
        Object.keys(pages).forEach(function(pageId) {
            pages[pageId].classList.add('hidden');
        });
        activePage.classList.remove('hidden');
    }

    switch(window.location.hash) {
        case "#home":
            console.log(`case #home`);
            hideInactivePages(pages.home);
            break;

        case "#why-study-in-groups":
            console.log(`case #why-study-in-groups`);
            hideInactivePages(pages.whyStudyInGroups);
            break;

        case "#what-is-a-study-group":
            console.log('case what-is-a-study-group');
            hideInactivePages(pages.whatIsAStudyGroup);
            break;

        case "#common-problems":
            console.log('case common-problems');
            hideInactivePages(pages.commonProblems);
            break;

        default:
            alert('Default route!')
            break;
    }
}

/******************************************** HELPERS *********************************************/
function getModuleBoxElements () {
    return {
        module1Box: document.getElementById('module-1'),
        module2Box: document.getElementById('module-2'),
        module3Box: document.getElementById('module-3'),
        module4Box: document.getElementById('module-4'),
    };
}

/**
 * Mark a module box as complete (for graying it out)
 * @param {number} num - The module number.
 */
function setModuleComplete(num) {
    window.sessionStorage.setItem(`isModule${num}Complete`, true);
}

/**
 * Mark all module boxes as incomplete.
 */
function resetModules() {
    window.sessionStorage.setItem(`isModule1Complete`, false);
    window.sessionStorage.setItem(`isModule2Complete`, false);
    window.sessionStorage.setItem(`isModule3Complete`, false);
    window.sessionStorage.setItem(`isModule4Complete`, false);
}

/**
 * @return {boolean} true if module is complete.
 */
function isModuleComplete (num) {
    return window.sessionStorage.getItem(`isModule${num}Complete`);
}

/**
 * 
 */
function isBoxSelected(num) {
    return window.sessionStorage.getItem(`isModule${num}Complete`, true);
}











// function addEventListeners() {
//     const modules = getModuleBoxElements();

//     modules.module1Box.addEventListener("click", setModuleComplete(1));
//     modules.module2Box.addEventListener("click", setModuleComplete(2));
//     modules.module3Box.addEventListener("click", setModuleComplete(3));
//     modules.module4Box.addEventListener("click", setModuleComplete(4));
// }


// function setModuleComplete(moduleNumber) {
//     return function () {
//         console.log(`Event occurred!`);
//         modules[`module${moduleNumber}Box`].classList.add('completed-module');
//         setModuleComplete(moduleNumber);
//     }
// }