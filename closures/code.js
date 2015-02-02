var nonsense1 = function(string){
	var blab = function(){
		alert(string);
	}
	//setTimeout(function(){ blab(); },2000);
	setTimeout(blab(),2000);
}
/***************************************************************************/
var nonsense2 = function(string){
	return function(){
		setTimeout(function(){ console.log(string)},2000);
	}
}
blabLater = nonsense2('foo');
blabAgainLater = nonsense2('bar');
blabLater();
blabAgainLater();
/***************************************************************************/
var lastNameTrier = function(firstName){
	//does stuff

    var innerFunction = function(lastName) { 
        //does stuff
        console.log(firstName+" "+lastName);
    };
    //maybe returns something here
    return innerFunction;
};
var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brian'); //logs 'Farmer Brown' 

/***************************************************************************/
var storyWriter = function(){
	return {
		story: "",
		addWords: function(word){
			this.story += word;
			return this.story;
		},
		erase: function(){
			this.story = '';
		}
	}
}
var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'
var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''

/**** also works ****/
var storyWriter = function(){
	var story = '';
	return {
		addWords: function(word){
			story += word;
			return story;
		},
		erase: function(){
			story = '';
		}
	}
}
var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'
var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''

var storyWriter = function(){
	var story = '';
	this.addWords = function(word){
		story += word;
		return story;
	};
	this.erase = function(){
		story = '';
		return story;
	}
}
var farmLoveStory = new storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.erase();

/**** *****/
var testObj = function(){
	return {
		name: 'brian',
		last: 'cab',
		bark: function(){
			console.log('woof')
		}
	}
}
var me = testObj();
console.log(me);

/***************************************************************************/
function counter() {
  var n = 0;

  return {
    count: function() { n++; return n; },
    reset: function() { n = 0; }
  };
};
var c = counter();
var d = counter();

/***** ***/
var sayAlice = function(){
  var makeLog = function() {
    console.log(alice);
  };
  var alice = 'Why hello there, Alice!';
  return makeLog;
};
var log = sayAlice();

var makeStopwatch = function(){
  var elapsed = 0;

  var stopwatch = function(){
    return elapsed;
  };

  var increase = function(){ elapsed++; };
  setInterval(increase, 1000);

  return stopwatch;

};

var x = makeStopwatch();

/** MODULE PATTERN *************************************************************************/
var Module = function(){

  var privateProperty = 'I like big fonts,' +
    ' and I cannot lie';

  function privateMethod(params){
    // do something
  };

  return {
    publicProperty: 'JS rulez!!',
    publicMethod: function(params){
      // do something
    },
    privilegedMethod: function(params){ 
      privateMethod(args); 
    }
  };
};

/***************************************************************************/
var Toaster = function(){
    //some private methods and properties
    var toastFor = 3000;
    var returnToast = function(){
    	console.log('here\s your '+toastFor+' toast.');
    }
    var turnOn = function(){
    	setTimeout(returnToast,toastFor);
    }

    return {
      //some public methods and properties, etc
      darkSetting: function(num){
      	toastFor = num;
      },
      toast: function(){
      	turnOn();
      }
    };
};

toaster = Toaster();

/***************************************************************************/
var Mario = function(){
	var health = 1000;
	var breathe = function(){
		setInterval(function(){ health--;},1000);
	};

	return {
		startGame: function(){
			breathe();
		},
		eatMushroom: function(){
			health += 100
		},
		getHealth: function(){
			return health;
		}
	}
};
m = Mario();

/*********************** AAAAAAAH, STILL NOT WORKING ****************************************************/
var checkAttendanceFunc = function(nameArr){
    var resultArr = [];
    for(var i = 0; i < nameArr.length; i++){
    	var logStmt = 'Is '+nameArr[i]+' present?'+i;

        resultArr[i] = (function(str){
        	saythis = str;
        	return function(){
        		console.log(str);
        	};
        })(logStmt);

    };
    return resultArr;
};
nameArray = ['bob','jim','joe','foo','bar'];
checkAttendanceFunc(nameArray);

/**************************************************************************/
var runOnce = function(func){
	var ran = false;
	return function(){
		if (!ran){
			func();
			ran = true;
		} else {
			console.log('sorry, can\'t run again');
		}
	};
};
var yell = function(){ console.log('go hawks');}
var oneThingToSay = runOnce(yell);
oneThingToSay();
oneThingToSay();
oneThingToSay();

/**************************************************************************/
var funcCaller = function(func, arg){
	return function(){
		func(arg);
	}
}
var funcCaller = function(func, arg){
	return func(arg);
}
var addOne = function(num){
	return num + 1;
}
funcCaller(addOne,5);

testArr = [1,2,3,4,5,6,7,8,9];

var firstVal = function(arr,func){
	return func(arr[0],0,arr);
}
firstVal(testArr,addOne);

testArr = [1,2,3,4,5,6,7,8,9];
testObj = {one:1,two:2,three:3}

var addOne = function(num){
	return num + 1;
}
var firstVal = function(item,func){
	if (item.constructor == Array) {
		return func(item[0],0,item)
	} else {
		firstKey = Object.keys(item)[0];
		return func(item[firstKey],firstKey,item)
	}
}
firstVal(testArr,addOne);
firstVal(testObj,addOne);






/**************************************************************************/
testArr = [1,2,3,4,5,6,7,8,9];
testObj = {one:1,two:2,three:3}
var cube = function(num){
	return Math.pow(num,3);
}
cube(3);
var map = function(item,func){
	if (item.constructor == Array) {
		alert('you gave me an object!');
		/*
		var returnArr = [];
		for (var i = 0; item.length; i++) {
			returnArr.push(func(item[i]));
		};
		return returnArr;
		*/
	} else if (item.constructor == Object) {
		alert('gave me an object');
		/*
		var returnObj = {};
		for (key in item) {
			returnObj[key] = func(item[key]);
		};
		return returnObj;
		*/
	} else {
		console.log('something went wrong');
	};
};
map(testArr,cube);

var map = function(item,func){
	if (item instanceof Array) {
		alert('you gave me an array!');
		/*
		var returnArr = [];
		for (var i = 0; item.length; i++) {
			returnArr.push(func(item[i]));
		};
		return returnArr;
		*/
	} else if (item instanceof Object) {
		alert('gave me an object');
		/*
		var returnObj = {};
		for (key in item) {
			returnObj[key] = func(item[key]);
		};
		return returnObj;
		*/
	} else {
		console.log('something went wrong');
	};
};
map(testArr,cube);

/**************************************************************************/
var chargeCreditCard = function(num, price){
    //charges credit card for a certain price
  };
  var processPaymentOnce = once(chargeCreditCard);
  processPaymentOnce(123456789012, 200);





