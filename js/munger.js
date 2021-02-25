function mungePathnameProp() {
    let pathnameProp = window.location.pathname;
    let mungedPathname = pathnameProp.replaceAll('.', '');
    let goodPathname = mungedPathname.split('/').filter(x => x !== '').join('_');

    if (pathnameProp === '/') {
        goodPathname = 'main';
    }

    let prefix = sectionPrefix || 'section--';
    let result = prefix + goodPathname;
    return result;
};

function mungeSearchProp() {
    let searchProp = window.location.search || '';

    if (!searchProp) { return ''; }

    let mungedSearch = searchProp.split('?')[1].split('&').filter(x => x !== '');
    let searchArr = mungedSearch instanceof Array ? mungedSearch : [mungedSearch];
    let goodSearch = searchArr.map(x => x.split('=')[0]).join('_');

    let prefix = subSectionPrefix || 'sub--';
    let result = prefix + goodSearch;
    return result;
}

function munge(targetSelector, sectionPrefix, subSectionPrefix) {
    let classForPathname = mungePathnameProp();
    let classForSearch = mungeSearchProp();
    let selector = targetSelector || 'body';

    if (classForPathname) {
        document.querySelector(selector).classList.add(classForPathname);
    }

    if (classForSearch) {
        document.querySelector(selector).classList.add(classForSearch);
    }
}

export { munge };