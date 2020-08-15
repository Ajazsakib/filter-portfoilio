
let makeNiceCollection = collection =>{
	// start code for collection.om
		collection.on = (eventName, eventHandler)=>{
			collection.forEach((element)=>{
				element.addEventListener(eventName, eventHandler);
			});
		};
		// end code collection.on

		// start code for colection.each

		collection.each = (callback)=>{
			collection.forEach((element, i)=>{
				let boundFn = callback.bind(element);
				boundFn(i, element);
			});
		}


		// end code for colection.each

		// start code for collection.css
		collection.css = (...cssArgs)=> {
			if(typeof cssArgs[0] === "string") {
				let [property, value] = cssArgs;
				collection.forEach((element)=>{
					element.style[property] = value;
				});
			}
			else if(typeof cssArgs[0] === "object") {
				let cssProp = Object.entries(cssArgs[0]);
				
				collection.forEach((element)=>{
					cssProp.forEach(([property, value])=>{
						element.style[property] = value;
					});
				});
			}
		}
		// end code of collection css

		collection.addClass = (className) => {
    collection.forEach((element) => {
        element.classList.add(className);
      });
   }

   collection.removeClass = (className) => {
    collection.forEach((element) => {
        element.classList.remove(className);
      });
   }
}




let $ = (...args)=>{
	if(typeof args[0] === "function") {
		let readyFn = args[0];
		document.addEventListener('DOMContentLoaded', readyFn);
	}
	else if(typeof args[0] === "string") {
		let selector = args[0];
		let collection = document.querySelectorAll(selector);
		

		makeNiceCollection(collection);
		return collection;
	}
	else if (args[0] instanceof HTMLElement) {
     // we have an element!
    const collection = [args[0]];
    makeNiceCollection(collection);
    return collection;
  }
};