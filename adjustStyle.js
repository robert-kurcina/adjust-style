window.addEventListener('load', () => {

	function stripAttributes() {
		var targetSelectors =  [
		    { body: [ 'style', 'link', 'align', 'valign', 'vlink', 'text', 'bgcolor', 'alink', 'width', 'height', 'border', 'valign', 'cellspacing', 'cellpadding' ]}, 
			{ table: [ 'style', 'link', 'align', 'valign', 'vlink', 'text', 'bgcolor', 'alink', 'width', 'height', 'border', 'valign', 'cellspacing', 'cellpadding' ]},
			{ tr: [ 'style', 'align', 'width', 'height', 'border' ]},
			{ font: [ 'face', 'size' ]},
			{ td: [ 'style', 'align', 'width', 'height', 'border', 'bgcolor', 'colspan' ]},
			{ th: [ 'style', 'align', 'width', 'height', 'border', 'bgcolor', 'colspan' ]},
			{ tbody: [ 'style', 'align', 'width', 'height', 'border', 'bgcolor' ]},
			{ thead: [ 'style', 'align', 'width', 'height', 'border', 'bgcolor' ]},
			{ tfoot: [ 'style', 'align', 'width', 'height', 'border', 'bgcolor' ]},
			{ caption: [ 'style', 'align', 'width', 'height', 'border', 'bgcolor' ]},
			{ p: [ 'style', 'align', 'width', 'height' ]},
			{ hr: [ 'style', 'width', 'height' ]},
			{ img: [ 'style', 'width', 'height' ]}
		];

		for (var i = 0; i < targetSelectors.length; i++ ){
			var targetConfig = targetSelectors[i] || {};
			var targetKey = Object.keys(targetConfig)[0] || '';
			var stripList = targetConfig[targetKey] || [];
			var targetElems = document.querySelectorAll(targetKey) || [];

			for (var j = 0; j < targetElems.length; j++){
				var elem = targetElems[j];

				for (var k = 0; k < stripList.length; k++){
					var attr = stripList[k];

					elem.removeAttribute(attr)
				}
			}
		}
	};

	function adjustStyle(selector, parentFilterList, givenStyle) {
		var elemList = document.querySelectorAll(selector) || [];
		var i;

		if (!elemList.length){ return; }

		for (i = 0; i < elemList.length; ++i) {
			var elem = elemList[i];
			var found = -1;

			for (j = 0; j < parentFilterList.length; j++){
				var ignoreSelector = parentFilterList[j];

                if (ignoreSelector instanceof Object){
                	var givenKey = Object.keys(ignoreSelector)[0];
                    var notkey = givenKey.indexOf('_notlessthanequal') !== -1 ? givenKey.split('_notlessthanequal')[0] : '';
                    var value = Object.values(ignoreSelector)[0];
					var givenValue = elem[givenKey] || '';
					var notValue = elem[notkey] || '';

					if (notValue){
						if (1*notValue <= 1*value){ found = 1; break; }
					}
					else {
						if (givenValue.indexOf(value) !== -1){ found = 1; break; }
					}
				}
				else {
					var parentElem = elem.parentElement.closest(ignoreSelector);

					if (!!parentElem){
					found = 1;
						break;
					}
				}
			}

			if (found === -1){
				elem.style = givenStyle;
			}
		}
	}

	stripAttributes();
	adjustStyle('img' , [{height_notlessthanequal: '100'}, {width_notlessthanequal: '100'}], "margin-top: 40px; height: auto; width: 75%; max-width: 480px; border: 10px solid white; box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.25); margin-bottom: 20px;");
});