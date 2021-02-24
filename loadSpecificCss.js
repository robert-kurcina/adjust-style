//------------------------------------------------------------------------------------------------
//URL PORTION
//------------------------------------------------------------------------------------------------
https://theminiaturespage.com/

// window.addEventListener('load', () => {
	function insertClasses (){
		function mungePathnameProp (){
			let pathnameProp = window.location.pathname;
			let mungedPathname = pathnameProp.replaceAll('.', '');
			let goodPathname = mungedPathname.split('/').filter(x => x !== '').join('_');

			if (pathnameProp === '/'){
				goodPathname = 'main';
			}
			
			let result = 'section--' + goodPathname;
			return result;
		};

		function mungeSearchProp (){
			let searchProp = window.location.search || '';

			if (!searchProp){ return ''; }

			let mungedSearch = searchProp.split('?')[1].split('&').filter(x => x !== '');
			let searchArr = mungedSearch instanceof Array ? mungedSearch : [mungedSearch];
			let goodSearch = searchArr.map(x => x.split('=')[0]).join('_');

			let result = 'sub--' + goodSearch;
			return result;
		}

		let classForPathname = mungePathnameProp();
		let classForSearch = mungeSearchProp();
		
		if (classForPathname){
			document.querySelector('body').classList.add(classForPathname);
		}

		if (classForSearch){
			document.querySelector('body').classList.add(classForSearch);
		}
	}

// }, false);