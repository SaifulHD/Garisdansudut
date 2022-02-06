(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"MultimediaInteraktif_atlas_1", frames: [[1282,0,91,91],[1375,0,91,91],[1282,93,91,91],[0,722,363,105],[1375,93,91,91],[365,722,363,105],[730,722,363,105],[1282,186,91,91],[1375,186,91,91],[1282,279,91,91],[1095,722,293,80],[0,0,1280,720]]},
		{name:"MultimediaInteraktif_atlas_2", frames: [[0,0,1280,720],[0,722,1280,720]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.btnabout = function() {
	this.initialize(ss["MultimediaInteraktif_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btngame = function() {
	this.initialize(ss["MultimediaInteraktif_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btnhome = function() {
	this.initialize(ss["MultimediaInteraktif_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.btnindikator = function() {
	this.initialize(ss["MultimediaInteraktif_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BTNKIKD = function() {
	this.initialize(ss["MultimediaInteraktif_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.btnkompdasar = function() {
	this.initialize(ss["MultimediaInteraktif_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.btnkompinti = function() {
	this.initialize(ss["MultimediaInteraktif_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.btnmateri = function() {
	this.initialize(ss["MultimediaInteraktif_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.btnmenu = function() {
	this.initialize(ss["MultimediaInteraktif_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.btnpetunjuk = function() {
	this.initialize(ss["MultimediaInteraktif_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.btnstart = function() {
	this.initialize(ss["MultimediaInteraktif_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.halamanKompetensi = function() {
	this.initialize(ss["MultimediaInteraktif_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.HalamanSelamatDatang = function() {
	this.initialize(ss["MultimediaInteraktif_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.HOME = function() {
	this.initialize(ss["MultimediaInteraktif_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.tblPetunjuk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.btnpetunjuk();
	this.instance.setTransform(-45.5,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-45.5,91,91);


(lib.tblMulai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.btnstart();
	this.instance.setTransform(-146.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.5,-40,293,80);


(lib.tblMenu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.btnmenu();
	this.instance.setTransform(-45.5,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-45.5,91,91);


(lib.tblMateri = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.btnmateri();
	this.instance.setTransform(-45.5,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-45.5,91,91);


(lib.tblKompInti = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.btnkompinti();
	this.instance.setTransform(-181.5,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.5,-52.5,363,105);


(lib.tblKompDasar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.btnkompdasar();
	this.instance.setTransform(-181.5,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.5,-52.5,363,105);


(lib.tblKIKD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BTNKIKD();
	this.instance.setTransform(-45.5,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-45.5,91,91);


(lib.tblIndikator = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.btnindikator();
	this.instance.setTransform(-181.5,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.5,-52.5,363,105);


(lib.tblHomeKIKD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.btnhome();
	this.instance.setTransform(-45.5,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-45.5,91,91);


(lib.tblGame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.btngame();
	this.instance.setTransform(-45.5,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-45.5,91,91);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.btnpetunjuk = new lib.tblPetunjuk();
	this.btnpetunjuk.name = "btnpetunjuk";
	this.btnpetunjuk.setTransform(0,111);
	new cjs.ButtonHelper(this.btnpetunjuk, 0, 1, 1);

	this.btnkikd = new lib.tblKIKD();
	this.btnkikd.name = "btnkikd";
	this.btnkikd.setTransform(30,-222);
	new cjs.ButtonHelper(this.btnkikd, 0, 1, 1);

	this.btnmateri = new lib.tblMateri();
	this.btnmateri.name = "btnmateri";
	this.btnmateri.setTransform(0,-111);
	new cjs.ButtonHelper(this.btnmateri, 0, 1, 1);

	this.btngame = new lib.tblGame();
	this.btngame.name = "btngame";
	this.btngame.setTransform(-30,0);
	new cjs.ButtonHelper(this.btngame, 0, 1, 1);

	this.instance = new lib.btnabout();
	this.instance.setTransform(-15.5,176.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btngame},{t:this.btnmateri},{t:this.btnkikd},{t:this.btnpetunjuk}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-267.5,151,535);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.btnpetunjuk = new lib.tblPetunjuk();
	this.btnpetunjuk.name = "btnpetunjuk";
	this.btnpetunjuk.setTransform(0,111);
	new cjs.ButtonHelper(this.btnpetunjuk, 0, 1, 1);

	this.btnkikd = new lib.tblKIKD();
	this.btnkikd.name = "btnkikd";
	this.btnkikd.setTransform(30,-222);
	new cjs.ButtonHelper(this.btnkikd, 0, 1, 1);

	this.btnmateri = new lib.tblMateri();
	this.btnmateri.name = "btnmateri";
	this.btnmateri.setTransform(0,-111);
	new cjs.ButtonHelper(this.btnmateri, 0, 1, 1);

	this.btngame = new lib.tblGame();
	this.btngame.name = "btngame";
	this.btngame.setTransform(-30,0);
	new cjs.ButtonHelper(this.btngame, 0, 1, 1);

	this.instance = new lib.btnabout();
	this.instance.setTransform(-15.5,176.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btngame},{t:this.btnmateri},{t:this.btnkikd},{t:this.btnpetunjuk}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-267.5,151,535);


// stage content:
(lib.MultimediaInteraktif = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,10,11];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.btnmulai.addEventListener("click", towelcomepage.bind(this));
		function towelcomepage()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		this.btnmenu.addEventListener("click", extendmenu.bind(this));
		function extendmenu()
		{
			this.gotoAndPlay(2);
		}
	}
	this.frame_10 = function() {
		this.stop();
		
		this.btnmenu.addEventListener("click", collapsemenu.bind(this));
		function collapsemenu()
		{
			this.gotoAndStop(1);
		}
		
		this.btnkikd.addEventListener("click", kikdpage.bind(this));
		function kikdpage()
		{
			this.gotoAndStop(11);
		}
	}
	this.frame_11 = function() {
		this.stop();
		
		this.kitext.visible=false;
		this.kipointtext.visible=false;
		
		this.btnhomekikd.addEventListener("click", backhomekikd.bind(this));
		function backhomekikd()
		{
			this.gotoAndStop(1);
		}
		
		this.btnkompinti.addEventListener("click", showinti.bind(this));
		function showinti()
		{
			this.kitext.visible= true;
			this.kipointtext.visible=true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(9).call(this.frame_10).wait(1).call(this.frame_11).wait(1));

	// BUTTONKIKD
	this.btnhomekikd = new lib.tblHomeKIKD();
	this.btnhomekikd.name = "btnhomekikd";
	this.btnhomekikd.setTransform(67.5,62.5);
	new cjs.ButtonHelper(this.btnhomekikd, 0, 1, 1);

	this.btnindikator = new lib.tblIndikator();
	this.btnindikator.name = "btnindikator";
	this.btnindikator.setTransform(1090.5,563.5);
	new cjs.ButtonHelper(this.btnindikator, 0, 1, 1);

	this.btnkompdasar = new lib.tblKompDasar();
	this.btnkompdasar.name = "btnkompdasar";
	this.btnkompdasar.setTransform(1090.5,428.5);
	new cjs.ButtonHelper(this.btnkompdasar, 0, 1, 1);

	this.btnkompinti = new lib.tblKompInti();
	this.btnkompinti.name = "btnkompinti";
	this.btnkompinti.setTransform(1090.5,293.5);
	new cjs.ButtonHelper(this.btnkompinti, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnkompinti},{t:this.btnkompdasar},{t:this.btnindikator},{t:this.btnhomekikd}]},11).wait(1));

	// KIKDPage
	this.kipointtext = new cjs.Text("KI-1:\n\nKI-2:\n\n\n\n\nKI-3:\n\n\n\nKI-3:\n", "19px 'Montserrat Medium'", "#FFFFFF");
	this.kipointtext.name = "kipointtext";
	this.kipointtext.lineHeight = 28;
	this.kipointtext.lineWidth = 45;
	this.kipointtext.parent = this;
	this.kipointtext.setTransform(100.9,135.85);

	this.kitext = new cjs.Text("Menghargai dan menghayati ajaran agama yang dianutnya\n\nMenghargai dan menghayati perilaku jujur, disiplin, tanggungjawab, peduli(toleransi, gotong royong), santun, percaya diri dalam berinteraksi secara efektif dengan lingkungan sosial dan alam dalam jangkauan pergaulan dan keberadaannya. \n\nMemahami pengetahuan (faktual, konseptual, dan prosedural) berdasarkan rasa ingin tahunya tentang ilmu pengetahuan, teknologi, seni, budaya terkait fenomena dan kejadian tampak mata.\n\nMencoba, mengolah, dan menyaji dalam ranah konkret (menggunakan, mengurai, merangkai, memodifikasi, dan membuat) dan ranah abstrak (menulis, membaca, menghitung, menggambar, dan mengarang) sesuai dengan yang dipelajari di sekolah dan sumber lain yang sama dalam sudut pandang/teori.\n", "19px 'Montserrat Medium'", "#FFFFFF");
	this.kitext.name = "kitext";
	this.kitext.lineHeight = 28;
	this.kitext.lineWidth = 750;
	this.kitext.parent = this;
	this.kitext.setTransform(156.1,135.85);

	this.instance = new lib.halamanKompetensi();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.kitext},{t:this.kipointtext}]},11).wait(1));

	// BUTTON_WP
	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.setTransform(1401.5,360.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.setTransform(1100.5,360.5);
	this.instance_2._off = true;

	this.btnpetunjuk = new lib.tblPetunjuk();
	this.btnpetunjuk.name = "btnpetunjuk";
	this.btnpetunjuk.setTransform(1100.5,471.5);
	new cjs.ButtonHelper(this.btnpetunjuk, 0, 1, 1);

	this.btnkikd = new lib.tblKIKD();
	this.btnkikd.name = "btnkikd";
	this.btnkikd.setTransform(1130.5,138.5);
	new cjs.ButtonHelper(this.btnkikd, 0, 1, 1);

	this.btnmateri = new lib.tblMateri();
	this.btnmateri.name = "btnmateri";
	this.btnmateri.setTransform(1100.5,249.5);
	new cjs.ButtonHelper(this.btnmateri, 0, 1, 1);

	this.btngame = new lib.tblGame();
	this.btngame.name = "btngame";
	this.btngame.setTransform(1070.5,360.5);
	new cjs.ButtonHelper(this.btngame, 0, 1, 1);

	this.instance_3 = new lib.btnabout();
	this.instance_3.setTransform(1085,537);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_3},{t:this.btngame},{t:this.btnmateri},{t:this.btnkikd},{t:this.btnpetunjuk}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true,x:1100.5},8).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},8).to({_off:true,y:471.5,mode:"independent"},1).wait(2));

	// BTNFIXED_WP
	this.btnmenu = new lib.tblMenu();
	this.btnmenu.name = "btnmenu";
	this.btnmenu.setTransform(1201.75,360.5);
	this.btnmenu._off = true;
	new cjs.ButtonHelper(this.btnmenu, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnmenu).wait(1).to({_off:false},0).wait(9).to({_off:true},1).wait(1));

	// WELCOME_BG
	this.instance_4 = new lib.HalamanSelamatDatang();
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(9).to({_off:true},1).wait(1));

	// HOME_BG
	this.btnmulai = new lib.tblMulai();
	this.btnmulai.name = "btnmulai";
	this.btnmulai.setTransform(638.5,618);
	new cjs.ButtonHelper(this.btnmulai, 0, 1, 1);

	this.instance_5 = new lib.HOME();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.btnmulai}]}).to({state:[]},1).to({state:[]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,837,360);
// library properties:
lib.properties = {
	id: '9E22F32B716DD1468FEB1AE43FF98AFB',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/MultimediaInteraktif_atlas_1.png", id:"MultimediaInteraktif_atlas_1"},
		{src:"images/MultimediaInteraktif_atlas_2.png", id:"MultimediaInteraktif_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9E22F32B716DD1468FEB1AE43FF98AFB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;