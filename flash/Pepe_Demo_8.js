(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.Pepe_Demo_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		playSound("pepe");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(40));

	// Text
	this.instance = new lib.Bubble("synched",0);
	this.instance.setTransform(684,167.5,1,1,0,0,0,216,92.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({startPosition:0,_off:false},0).wait(41));

	// Pepi
	this.instance_1 = new lib.Pepi();
	this.instance_1.setTransform(-253.9,428.1,1,1,0,0,0,224.5,331.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).wait(1).to({x:-238.4,y:426.9},0).wait(1).to({x:-222.9,y:425.7},0).wait(1).to({x:-207.5,y:424.5},0).wait(1).to({x:-192.1,y:423.3},0).wait(1).to({x:-176.6,y:422.1},0).wait(1).to({x:-161.2,y:420.9},0).wait(1).to({x:-145.8,y:419.7},0).wait(1).to({x:-130.3,y:418.5},0).wait(1).to({x:-114.9,y:417.3},0).wait(1).to({x:-99.4,y:416.1},0).wait(1).to({x:-84,y:414.9},0).wait(1).to({x:-68.6,y:413.7},0).wait(1).to({x:-53.1,y:412.5},0).wait(1).to({x:-37.7,y:411.3},0).wait(1).to({x:-22.3,y:410.1},0).wait(1).to({x:-6.8,y:409},0).wait(1).to({x:8.5,y:407.8},0).wait(1).to({x:23.9,y:406.6},0).wait(1).to({x:39.3,y:405.4},0).wait(1).to({x:54.8,y:404.2},0).wait(1).to({x:70.2,y:403},0).wait(1).to({x:85.6,y:401.8},0).wait(1).to({x:101.1,y:400.6},0).wait(1).to({x:116.5,y:399.4},0).wait(1).to({x:131.9,y:398.2},0).wait(1).to({x:147.4,y:397},0).wait(1).to({x:162.8,y:395.8},0).wait(1).to({x:178.2,y:394.6},0).wait(1).to({x:193.7,y:393.4},0).wait(1).to({x:209.1,y:392.2},0).wait(1).to({x:224.5,y:391.1},0).wait(41));

	// Farm
	this.instance_2 = new lib.Farm();
	this.instance_2.setTransform(961,812.9,1,1,0,0,0,546,448.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({alpha:1},24).wait(10).to({alpha:0.211},20).wait(72));

	// Island
	this.instance_3 = new lib.Island_Symbol();
	this.instance_3.setTransform(525.5,384.4,1,1,0,0,0,525.5,384.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:512,regY:384,scaleX:1.09,scaleY:1.09,x:542.6,y:391.5,alpha:0.98},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:573.2,y:399,alpha:0.959},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:603.8,y:406.4,alpha:0.939},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:634.4,y:414,alpha:0.918},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:665,y:421.4,alpha:0.898},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:695.6,y:428.9,alpha:0.878},0).wait(1).to({scaleX:1.64,scaleY:1.64,x:726.2,y:436.3,alpha:0.857},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:756.8,y:443.8,alpha:0.837},0).wait(1).to({scaleX:1.82,scaleY:1.82,x:787.4,y:451.3,alpha:0.816},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:818,y:458.8,alpha:0.796},0).wait(1).to({scaleX:2,scaleY:2,x:848.6,y:466.2,alpha:0.776},0).wait(1).to({scaleX:2.09,scaleY:2.09,x:879.2,y:473.7,alpha:0.755},0).wait(1).to({scaleX:2.18,scaleY:2.18,x:909.8,y:481.2,alpha:0.735},0).wait(1).to({scaleX:2.27,scaleY:2.27,x:940.4,y:488.6,alpha:0.714},0).wait(1).to({scaleX:2.36,scaleY:2.36,x:971,y:496.2,alpha:0.694},0).wait(1).to({scaleX:2.46,scaleY:2.46,x:1001.6,y:503.6,alpha:0.673},0).wait(1).to({scaleX:2.55,scaleY:2.55,x:1032.1,y:511.1,alpha:0.653},0).wait(1).to({scaleX:2.64,scaleY:2.64,x:1062.7,y:518.5,alpha:0.633},0).wait(1).to({scaleX:2.73,scaleY:2.73,x:1093.3,y:526,alpha:0.612},0).wait(1).to({scaleX:2.82,scaleY:2.82,x:1123.9,y:533.5,alpha:0.592},0).wait(1).to({scaleX:2.91,scaleY:2.91,x:1154.5,y:541,alpha:0.571},0).wait(1).to({scaleX:3,scaleY:3,x:1185.1,y:548.4,alpha:0.551},0).wait(1).to({scaleX:3.09,scaleY:3.09,x:1215.7,y:555.9,alpha:0.531},0).wait(1).to({scaleX:3.18,scaleY:3.18,x:1246.3,y:563.4,alpha:0.51},0).wait(1).to({scaleX:3.27,scaleY:3.27,x:1276.9,y:570.8,alpha:0.49},0).wait(1).to({scaleX:3.36,scaleY:3.36,x:1307.5,y:578.4,alpha:0.469},0).wait(1).to({scaleX:3.46,scaleY:3.46,x:1338.1,y:585.8,alpha:0.449},0).wait(1).to({scaleX:3.55,scaleY:3.55,x:1368.7,y:593.3,alpha:0.429},0).wait(1).to({scaleX:3.64,scaleY:3.64,x:1399.3,y:600.7,alpha:0.408},0).wait(1).to({scaleX:3.73,scaleY:3.73,x:1429.9,y:608.2,alpha:0.388},0).wait(1).to({scaleX:3.82,scaleY:3.82,x:1460.5,y:615.7,alpha:0.367},0).wait(1).to({scaleX:3.91,scaleY:3.91,x:1491.1,y:623.2,alpha:0.347},0).wait(1).to({scaleX:4,scaleY:4,x:1521.6,y:630.6,alpha:0.327},0).wait(1).to({alpha:0.306},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.265},0).wait(1).to({alpha:0.245},0).wait(1).to({alpha:0.224},0).wait(1).to({alpha:0.204},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.163},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.082},0).wait(1).to({alpha:0.061},0).wait(1).to({alpha:0.041},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


// symbols:
(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,1201);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1523,1219);


(lib.ZoomonIsland = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-538.9,-384.9,0.672,0.63);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-538.9,-384.9,1024,768);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-511.9,-383.9,0.683,0.639);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-511.9,-383.9,1024,768);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-511.9,-383.9,0.683,0.639);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-511.9,-383.9,1024,768);


(lib.Pepi = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#363953").s().p("AAABoQgDhogBhnIAIAAIAADFIAAAKg");
	this.shape.setTransform(192.5,590.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#545A80").s().p("AgFA7IAAh/IAIAAIABAJQAHBMgQA0IAAgKg");
	this.shape_1.setTransform(193.6,570.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353851").s().p("AgEAyIAAgKIAAhYIAJAAIAABYIAAAKIgJAAg");
	this.shape_2.setTransform(193.5,558.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#393C57").s().p("AgEBVIAAiyQAQBSgMBpIgEAAIAAgJg");
	this.shape_3.setTransform(197.5,509.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#211D28").s().p("AhYEEQgQg1AIhNQAaAPAEBLIAEgHQB8jBAekhQATBQgcBRQgBAFAAAEIgBAKQg1DRhyCVQAAgEgCgFg");
	this.shape_4.setTransform(215.8,485.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#24212D").s().p("AAAAzQgKgOACgbQALhUADASQAIA8gOA4QAAgFAAgEg");
	this.shape_5.setTransform(225.9,475.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#646A99").s().p("AiLOGQgsj1AFknIAAgKIAAjIIAAgKIAAgUQARg1gHhLIAAgKIAAgKIAAhaIAAgKIAAgyQAch6ACiUIAAgKIAFgBQAMhrgRhSIAAgKIAAgKQAohfAPh9IAFAAQAhhAgDBoIAAAeQgeA9AcBPQACAFAAAFQgIBNAQA1QACAFAAAFQByiVA1jUIABgJQAFAAACACQADADAAAFQgCAbAJAOQADAEAAAFQAQARgOAHQgCABAAAFIAAAKIAAC0QAFAAAAABQAPAnAKAoQheHmhfHaQgQBMgGA/QgUDYhXCFIgBgKg");
	this.shape_6.setTransform(211,565.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#251F29").s().p("AgLgcIAAgKQAph3gaCeQgFAsAAAtQgRgwAHhGg");
	this.shape_7.setTransform(227.2,449.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C3648").s().p("AgFBPIAAioIAIAAIABAKQAHBggQBIIAAgKg");
	this.shape_8.setTransform(182.6,449.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#29151A").s().p("AgXg4QAXAvAUAxQAAACAFAAIAAAKIAAAFQg5gVAJhcg");
	this.shape_9.setTransform(234.4,439.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B1519").s().p("AhpDqQAyBlAlhqQBUjwAbklQAcBigkBTQgCAEAAAFQgUDGhECbQgeBCgZAAQgZAAgUhHg");
	this.shape_10.setTransform(201.6,414.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3B181E").s().p("AgJATIAAgbQAFgFADgGQABgFAAgEQAEAAAAABQARAxgeAHIAAgKg");
	this.shape_11.setTransform(234.1,411.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#70506B").s().p("AhsG5QAAgFgCgEQgchQAeg9IAAgdQADhpghBAIAAgKQAfjxAJjZQgeDSgZDaQgXDPhmCFQgFAAgBgBQhJjIAJkXQARhGgHhiIAAgKIAAgKIAAiCQARg+gChYIAFAAQAMBsAkBTQACAEAAAFQAcAdgQAgQgCAEAAAFQAmCMA9iHQBHibAUjIQABBvAIB3IABAKQgHB1ApBHQABACAFAAQCIiYAWkDQAHhLAXA4IgKAAQAAAZAFAYQAAABAFAAQAAAFgCAEQgDAGgFAFIAAAeIAAAKIABAKQAGAggRAIQATA2gSBNIgBAJQgJBeA7AVIAAgFQBmidAhjoIAFgBQAAAFACAEQAVAzghAeIAAAKIAAAKIgBAKQgKCEAfCKQgFAAAAABQhEFZiJEQQgZgPABgtQABhcgbhEQAAgFACgBQAOgHgQgRQAOg4gJg+QgCgRgNBVQAAgFgDgCQgCgDgFAAQAAgFABgEQAchRgThQQgeEjh8DAIgEAHQgEhKgagQgABahXIgBAKQgHBJASAtQAAgrAHgsQAOhbgHAAQgGAAgSAyg");
	this.shape_12.setTransform(217,454.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A1317").s().p("AheFAIAAgLQBzklBFlYQAAgBAEAAQgNCOgjB3QgCAEABAFIgGABQggDmhlCeIAAgKg");
	this.shape_13.setTransform(246.5,411.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C151A").s().p("AhSFDQgohIAGh0QASBSAVBOQABAEAAAGQCojsAPmIIAFAAQAHBogCBzIgFAAQgXg3gGBKQgXEBiICZQgFAAgBgCg");
	this.shape_14.setTransform(222.7,413.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#391318").s().p("AhPCZQgHghgCglQAYBAAXgCIgSAQQgGAFgFAAQgHAAgCgNgAALA8QAmh0AphtQgPCphQBnQAHgTAJgcg");
	this.shape_15.setTransform(223,359);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#371217").s().p("AibEuQgmgwAFhaQAaAVANBYQAGAkAPgjQB6jtAVlUIAFgBQAAAFACADQACACAFAAIABAAIgBACQggCfgUCxQgUCrhpBaQgFgBgCgCgAAyBpIAAgLQAXBSAbAdIAKgKQAih5Aoh0QABgCAFABQgfCmhJCCQgBABgFAAQgdg8gBhZg");
	this.shape_16.setTransform(256,342.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#25273B").s().p("AgDgPQgCgEAAgFIALAxIgJgog");
	this.shape_17.setTransform(173.6,360.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D161D").s().p("AgGgJQgCgEAAgFIAQAlIgOgcg");
	this.shape_18.setTransform(189.9,342.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#43151B").s().p("AgFANQADgNAAgPQAchAgiB1IAAAAIADgZg");
	this.shape_19.setTransform(232.4,337.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#341317").s().p("AgJgFQAmg2ghBQQgCAGgCAAQgDAAACggg");
	this.shape_20.setTransform(236,323.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#361217").s().p("AgGhAIABgKQAWBAgNBLIgBAJQgQg5AHhRg");
	this.shape_21.setTransform(213.7,349.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#371216").s().p("AhZDvQgOgiAFg9QAKBAAsAXIgYAVQgDADgEAAQgIAAgGgQgAAUCGQAii9AfjGQAAgBAFAAQAHA4ADA2IAAAKQgbgVgFBbQgHB+gwBYIAHgQg");
	this.shape_22.setTransform(202.9,355.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#987719").s().p("AghAqQAjhGAWgXIgBAPQgGAoARASQAAAFgCACQgdARgkAGIAAgKg");
	this.shape_23.setTransform(242.5,307.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BC2F42").s().p("AivLGQgVhOgShSIAAgKQgIh4gChvQAAgFADgEQAkhTgdhiQgbEmhVDyQgmBqgyhmQAAgEACgFQARgfgdgeIAGAAQhLkxgLl0QBOh+gbi5IAAgKQCGhEB5AhQAPAEAdACQBbAFAJhMIAAgJQCWg6CfgmIAAAPIgGABQgWFWh6DtQgPAhgGgiQgOhYgagVQgFBaAnAuQABACAGABQBphYAUirQAUizAiifQANAvAIgxIAHgbQBVhbB/gLQgKCKgwCYQgjBvAig+QgHgUAKAIQAPAMgRBbIhcHwQgTBmgRBlQgaCchOBcIgEAAQgShxgRhqIAAgLIAAgKQAhgegWgzQgBgDAAgGQgBgFACgEQAjh3ANiOQgEAAAAABQhFFah1ElIAAALQgFgBAAgCQgWgygUgwIABgJQAPhNgQg1QAOgJgGggIAAgKQAggHgRgzQgBgBgEAAQgFAAgBgBQgEgYAAgaIAKAAIAFAAQAChzgHhoIgGAAQgNGKipDsQgBgGgBgEgAmBBKQAKAXAMgKIAXgVQgrgXgLg+QgFA7AOAigAiuAUQAEAWAQgOIASgQQgXACgYg/QACAmAHAfgAjRmiQgfDGghC/IgHAQQAvhXAHiBQAFhbAcAVIgBAKQgHBTASA5IABgJQAMhNgXhAIAAgKQgEg2gGg4QgGAAAAABgAhShHQgJAcgJATQBShnAPisQgpBugmB2gAEdi8QAABZAdA8QAGAAABgBQBIiCAgioQgGgBAAACQgoB2giB5IgKAKQgbgdgXhSIAAALgAmwk2QAiA/gkhIQABAFABAEgAgDlmQgBAOgCAPIgEAaQAWhOgFAAQgCAAgIAXgAAYnpQgDAxAJgVQAVgxgHAAQgEAAgQAVg");
	this.shape_24.setTransform(232.5,372.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3E3D0B").s().p("AAKAhQgGAAAAgCQgPgxgcglQAxAjAcA2QABAEABAFQgBAFgCACQgGAGgFAAQgKAAgGgXg");
	this.shape_25.setTransform(239,284);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#463E0D").s().p("AgxBwIAAgKQAbgXAIguQAAgBAFAAQAEhTgNhBIgBgKQAJAiAQgRQADgCAAgFQAuA/gGBzIAAAKIgKAAIAAAKIAAAKQgSgSAGgqIACgPQgXAWgjBJIAAAKIAAAFIgBAAQgVAAACgPg");
	this.shape_26.setTransform(242.1,300.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3F380D").s().p("AAdAnQgHg7hBABIAAgJQAPgBANgEQACgBgBgEQAiAYAXAjQACADAAAGIgKAAIAAAKIgGgBg");
	this.shape_27.setTransform(228.5,287.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C2BF0A").s().p("Ag6BsQA3gnADhZIAAgKQARg0gChOIAFAAQAKAjAMAiQAoBsgzBgQgZAwgVAAQgXAAgUg1g");
	this.shape_28.setTransform(220,309.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#65630A").s().p("AgJBAIAAiJQAJAEAHAIQADADAAAFIgGAAQADBLgQA0IAAgKg");
	this.shape_29.setTransform(221,298.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#331118").s().p("AAOBnQgphkgBhqQA3BPADBjIAAAKIgLAAIAAAKIAAAKQgEAAgBgCg");
	this.shape_30.setTransform(227,255.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#222435").s().p("AAAAOQgLgNAAgXQAbAtgFAAQgCAAgJgJg");
	this.shape_31.setTransform(173.2,262.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#232534").s().p("AgIgSQgCgEAAgFIAVA3IgTgug");
	this.shape_32.setTransform(170.1,252.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#252738").s().p("AgJgJQgDgDAAgFQAaAjgBAAIgWgbg");
	this.shape_33.setTransform(186.3,252.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#242637").s().p("AAAAKQgGgCgFgSQAiAVgPAAIgIgBg");
	this.shape_34.setTransform(184.3,242.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#26293B").s().p("AgJgUQgCgFAAgFIAXA9IgVgzg");
	this.shape_35.setTransform(182.2,233.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3B3B2B").s().p("AgTAKQANgRAQgJQAFgDAEAAIgBAKQgHAageADIAAgKg");
	this.shape_36.setTransform(173,227.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B2B23").s().p("AgSATIAAgJQARgQANgUQADgCAFAAIgBAKQgHAjgeAMIAAgKg");
	this.shape_37.setTransform(178,221.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#232535").s().p("AgFBQIAAhiQAdgBgKAnIgBAJIgFAAQACArgPASIAAgKgAgOhPQgBgFAAgEIAPApIgOggg");
	this.shape_38.setTransform(198.7,230.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#33342A").s().p("AgQAYIAAgKIAAgKQAPgIAHgSQABgCAFAAIAFAAQgJAxgUAAIgEgBg");
	this.shape_39.setTransform(182.8,213.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#72700A").s().p("AgEAsIAAhiQAQArgMBAQAAACgEAAIAAgLg");
	this.shape_40.setTransform(306.5,284.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#616795").s().p("AhpGNIAAhGICArMQADgOAagDQAGAAAFgFQBBBVghCeQhHFLiBD5g");
	this.shape_41.setTransform(285.7,337.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#37310C").s().p("AgkCEQgDgCgEAAIAAgLQAth3AIiKIAMAMQANAMAKAPIgKAAIAAAKIgJgKIgGgJQAFCEg6B0QgBgFgCgDg");
	this.shape_42.setTransform(299.5,277.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#49480A").s().p("AgFAmQgFgNAAgPQAPgLgCgmIAFAAIABAKQAGAjgPANIAAAKIAAAKQgFABAAgCg");
	this.shape_43.setTransform(287.1,256.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C4C10A").s().p("AA7DNQAAh9gjhTQAAgGgCgDQgWglgigYQglgWgkAbQhdBEgEhdQAvg7BbgKQARgBASgSQASgRAbgGQBcAJAgBGQABABAFAAQBnB1hHCiQgCAFAAAEIgKAAIABgKQAGh0gvg+QAAgEgCgFQgcg3gygkQAcAmARAzQAAACAFgBIABAKQAOBAgFBUQgFAAAAABQgHAvgcAXIAAAKg");
	this.shape_44.setTransform(230.5,290.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#40390D").s().p("AgJCRQAAgFACgEQBFiihlh1QApAOAUgfQACgDAFAAQAAAFgDAEQghAwAuA1IAAAKQAIB5gvBDQAAAFABADQADACAFAAQAAAFgCABQgHADgDAAQgLAAAFgTg");
	this.shape_45.setTransform(249.1,292.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#311117").s().p("AAvBVQhSg5gihoQAogvAhBmQAOAnAlAaQAQALgCAbQgFAAgEACQgGADgFAFQAAgFgCgCg");
	this.shape_46.setTransform(268,257.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C3C00A").s().p("ABFDNQgGiqhXhOIAAgGQhZAQhRAdIAAgKIAAgKQARgNgGglIgBgKIAAgKQBKgpBRgnQAdgOAigPQBYAgAkBVQABACAFAAQAAAGACADQA7CCg9CBIgFAAQgFhQAAhPQgFAAgBgCQgWhPg0gwIgFAAQAwCVgrCgg");
	this.shape_47.setTransform(306.6,260.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#292B3D").s().p("AgWgXIAKAAQgNAtApgHIAKAAQAAAFgCAAQgOAEgKAAQghAAALgvg");
	this.shape_48.setTransform(297.4,242.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#351218").s().p("AAAAnQgFgogOgmQAugjgIBnIAAAKQgFAAgEACQgGADgEAFIAAgKg");
	this.shape_49.setTransform(288.1,226.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#606694").s().p("Ah7khIgBgKQB2glB5ggIAJgBQAFC5g7B8QgBACgFAAQgNDqg7DAQgBACgFAAQhJk5gklagAAkgdQAbBCgdhMQAAAFACAFgAAQhtQAXBYgZhiQAAAFACAFg");
	this.shape_50.setTransform(171.5,370.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A5811A").s().p("AyYH0IAAkEQEph2E5hlQAcgIAMgVQLDi6KVjpQBvgoBtgpQBDgCAIA9IAFABQAHA5AQA0QAhBqg4AZQgLAJAAgCQgcithRhoIgFAAQABB9gaCHQgFAAgCACQgWAngfAdQlVBUk5BnIhdAgQqeDrqzDMIAAgKg");
	this.shape_51.setTransform(117.8,336.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#222436").s().p("AAABeQgDhegBhdIAIAAIAACyIAAAKIgEgBg");
	this.shape_52.setTransform(156.5,290.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3A3E5C").s().p("AgFByIAAjtIAIAAIABAKQAHCCgQBsIAAgLg");
	this.shape_53.setTransform(157.6,268.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2C2E41").s().p("AgFgSIgBgJIAMA3IgLgug");
	this.shape_54.setTransform(161.7,270.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#363526").s().p("Ah5DIQgbABgDgRQBegUAfhYQAAgBAFAAIAFAAQgbBYhOApgAB1iaQAMgWAMgaQABgBAFAAIAFAAQgBAsgiAQIAAgLg");
	this.shape_55.setTransform(172.3,223.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#585524").s().p("AAABFQgEhFAAhFIAIAAIAACBIAAAKIgEgBg");
	this.shape_56.setTransform(153.5,222.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#535020").s().p("AgFAdIAAhDIAIAAIABAKQAHAtgQAWIAAgKg");
	this.shape_57.setTransform(154.6,204.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#44141D").s().p("AAABPQgDhPAAhPIAIAAIAAAzIAAAKIAABYIAAAKIgFgBg");
	this.shape_58.setTransform(152.5,177.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#98283F").s().p("AgFAjIAAgxIAAgJIAAgUIAIAAIABAKQAHAygQAcIAAgKg");
	this.shape_59.setTransform(153.6,170.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4E1621").s().p("AgEBpIAAjbQAQBngMB9IgEABIAAgKg");
	this.shape_60.setTransform(314.5,180.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2F2B3E").s().p("AgFAyIAAhsIAIAAIABAKQAHBBgQArIAAgKg");
	this.shape_61.setTransform(313.6,198.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#31344C").s().p("AgEBBIAAiKQAQA+gMBVIgEABIAAgKg");
	this.shape_62.setTransform(306.5,175.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#555223").s().p("AAEAnQgEgqgJgjQAYASgGAxIAAALIgFgBg");
	this.shape_63.setTransform(303.1,151.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#626694").s().p("AhSGeIAAgKQBMj5AVkrIABgKIAFgBQAMhXgRg+IgBgKQgMg0ADhEQAQABgBgVIAFAAQAjC5AYDDIABAKIAABsIAAAKIgBAKQgaCoghCiQgFAAgDACQgaAbgiAVIAAAKIgKAAIgKABQgfAAALgpg");
	this.shape_64.setTransform(304.4,198.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B8324D").s().p("AAjEEIgBgKQgZjDghi3QABgFgCgFQgSgzAAhFQAzgIACBiIAFAAQAPBeAOBeIABAKIAADcIAAAKIgKAAg");
	this.shape_65.setTransform(309.5,166.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#96263C").s().p("AAdA1QgBhfg0AHIgKAAIAAgKQBGgigCB6IAAAKg");
	this.shape_66.setTransform(307.5,143.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#BBAE44").s().p("AAFBKIgIAAIAAgKQAEgzgYgRIAAgKIAAg8IAKAAIAKAAIAIAAQAABFASAyQACAEgBAFIgEAAQABAVgOAAIgCgBg");
	this.shape_67.setTransform(304.5,147.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#571925").s().p("AgEBKIAAieQAQBJgMBfIgEAAIAAgKg");
	this.shape_68.setTransform(298.5,107.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5C5B0A").s().p("AgEA3IAAh2QAQA0gMBLQAAAAgEAAIAAgJg");
	this.shape_69.setTransform(301.5,107.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#49151F").s().p("AgFAeIAAhFIAIAAIABAKQAHAugQAWIAAgJg");
	this.shape_70.setTransform(222.6,183.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#252839").s().p("AAAAEQgDAAgJgJQAgALgJAAIgLgCg");
	this.shape_71.setTransform(206.4,187.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1F212F").s().p("AgCACQABgIgFgKQAbgjgXBOIAAAAQgBAAABgZg");
	this.shape_72.setTransform(204.8,182);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1D1D2A").s().p("AgCAHQgCgGgFgDQAigtgZBEg");
	this.shape_73.setTransform(205,171.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#212434").s().p("AgCAUQgJgHAAgSIAAgUQAfAzgLAAQgDAAgIgGg");
	this.shape_74.setTransform(205.3,160.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#242636").s().p("AhgNQQgBgEAAgFIAPApIgOgggABTtmQgCgEAAgFIARArIgPgig");
	this.shape_75.setTransform(184.9,282.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#363524").s().p("AgQAZIAAgVQANgOAJgWQABgCAFABIAFAAQgEArgdAZIAAgKg");
	this.shape_76.setTransform(193.8,189.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#32332C").s().p("AgSAVIAAgKQAPgSAPgSQACgCAFAAQAAAFgBAEQgPAugLAAQgFAAgFgHg");
	this.shape_77.setTransform(190,197.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#383726").s().p("AgNAlIAAgKIAAgUQAOgQAIgfQABgBAEAAIAAAKQgFBJgOAAQgEAAgEgFg");
	this.shape_78.setTransform(197.5,178.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3A271A").s().p("AgSAOQgVACABgQQAsAAAZgQQAEgDAFAAQAAAFgDADQgXATggAMg");
	this.shape_79.setTransform(160,191.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#45331E").s().p("AgYAOQAZgNARgWQACgCAFAAQgBAFgBAEQgLAfgkAHIAAgKg");
	this.shape_80.setTransform(167.5,185.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#5B3523").s().p("AgVAWQgDgDABgFQATgRAVgSQADgDAEABQAAAFgCAEQgLAZgZANQgEAAgDgCg");
	this.shape_81.setTransform(172.5,178.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4E2E1E").s().p("AgTAcQgEgJgBgJQAUgTAUgRQAEgCAFgBQgBAFgCAEQgSAZgRAZQgGAAAAgCg");
	this.shape_82.setTransform(177.5,172.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#383827").s().p("AgNAiIAAgdQAKgSAHgVQABgEAAgGQAFAAABACQANAqglAsIAAgKg");
	this.shape_83.setTransform(200.4,167.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#52341E").s().p("AgQAbQgCgCgBgFQATgUAOgbQAAgCAGAAIgCAKQgEAhgXAQQgEgBgDgCg");
	this.shape_84.setTransform(183,163.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#573C24").s().p("AgNAPIAAgdQAJgFAJgDQAFgCAFAAQgBAGgBAEQgIAYgSAPIAAgKg");
	this.shape_85.setTransform(187.5,155.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#48482D").s().p("AgOAmQgFgOAAgOQAPgYAQgWQADgCAFgBQgBAFgBAFQgJAdgRAUIAAAKIAAAJQgGABAAgCg");
	this.shape_86.setTransform(204,156.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4A341D").s().p("AgOAdIAAgTQAPgQAIgfQAAgCAFAAIAAALQABAwgdATIAAgKg");
	this.shape_87.setTransform(193.5,140.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#593725").s().p("AgOAUIAAgcQALgKAJgIQADgDAFAAQAAAGgBAEQgJAcgSAUIAAgJg");
	this.shape_88.setTransform(190.5,148.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#4A301D").s().p("AgFAhQgFgcAAgcQAFgGAFgCQADgCAFgBIABALQAGAigPANIAAAKQgFAAAAgBg");
	this.shape_89.setTransform(196.1,130.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#492D1F").s().p("AgOArQgFgTABgTQAIgeAVgQQAEgDAEAAQABAGgCAEQgMAkgOAgIAAAKQgFAAgBgBg");
	this.shape_90.setTransform(198,121.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#2A2C3D").s().p("AgFBLIAAifIAIAAIABAKQAHBbgQBDIAAgJg");
	this.shape_91.setTransform(225.6,151.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#211922").s().p("AgEAsQgFgoAAglQAFgBADgCQABgDAAgEQARAggNA3QAAABgEAAIgEgBg");
	this.shape_92.setTransform(226,135.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#311C26").s().p("AgEA7QgFg7AAg7QAfAlgSBRQAAABgEAAIgEgBg");
	this.shape_93.setTransform(226.1,123.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3B3A25").s().p("AgKAZIAAgmQAPABgCgWIAFAAIABAKQAIAvgbALIAAgJg");
	this.shape_94.setTransform(212.1,138.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3B3B23").s().p("AgTAUIAAgKQAVgLAMgZQABgDAEAAIgBAKQgGAkgfANIAAgKg");
	this.shape_95.setTransform(209,147.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3F3D26").s().p("AgEAiQgFgiAAgiIAJAAQARAXgMAtQgBAAgEABIgEgBg");
	this.shape_96.setTransform(213,128.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#4D4C26").s().p("AgEAiQgFgiAAgiIAJAAQARAXgMAtQgBABgEAAIgEgBg");
	this.shape_97.setTransform(213,118.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#593822").s().p("AgTAUQgFgIAAgKQAUgTAdgEIAAAFQgBAFgCACQgRAQgTAPQgEAAgBgCg");
	this.shape_98.setTransform(203.5,113.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C9C04D").s().p("AkKKSQgWgzgGhGIAAgKIAAiCIAAgKIAAg8QASgXgHgvIgBgKIAAgKIAZg7QAAgBAGAAQAigLAXgWQADgCgBgFQAFAAADgDQACgCAAgFQAmgIALghQABgEABgFIAAgKQAEAAADgDQACgCAAgFQAbgOALgbQACgEAAgFQAGAAACgDQADgCAAgDQATgZASgbQACgDAAgFIAAgKQALgFAHgIQADgCgBgFQAXgQAEgiIACgKIAAgKQAFAAACgDQADgCAAgFQAUgPAIgaQABgEABgFIAAgKIAAgKQATgVAJgeQABgEAAgFIAAgKQAfgUAAgyIAAgKIAAgKQAFAAACgDQACgCABgFIAAgKQAQgNgGglIAAgKIAAgKIAAgKQAQghAMgmQACgEgBgFIAAgKQALAAAHgEQACgBAAgFQAVgPARgSQACgCABgFQAEAAADgDQACgCABgFQAsgjAOAtQACAFAAAFIAAAUIAAAKIgKAAQAAAjAEAiIAGABIAAAUIAAAKIgKAAQAAAjAEAiIAGABIAAAUIAAAKIgGAAQACAVgRgBIAAAoIAAAKIAAAKIAAAKQgEAAgBACQgMAagWAMIAAAKIAAAKQgBAFgBAEQgDAGgFAFQgFAAgDACQgSAWgPAaQAAAPAFANQAAACAGAAQAAAFgDACQgIAIgKAFIAAAKQAAAFgBAEQgIAVgLAUIAAAeIAAAKIAAAKIAAAKQgEAAgBABQgIAdgQASIAAAUIAAAKIgKAAIAAAeIAAAKQgGAAgBACQgKAVgOARIAAAUIAAAKIAAAKQgFAAgCACQgRASgPAUIAAAKIgKAAIAAAeIAAAKQgGAAgBACQgLAZgNAXIAAAKIAAAKIAAAKQgEAAAAACQgJASgPAKIAAAKIAAAKIgKAAIAAAKIAAAKQgEAAgDACQgPAUgRASIAAAKIAAAKIgLAAIAAAKQgEAAgFACQgSAKgNASIAAAKQAAAFgCACQgDADgEAAIAAAKQgFAAgBABQgeBYhfAVQAAgFgCgEg");
	this.shape_99.setTransform(183.5,175.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#403325").s().p("AAIAoQgMgrgtAhIAAgLIBahBQADgCAFAAQABAFgDACQghAggEA7QAAgFgCgFg");
	this.shape_100.setTransform(212,107.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#381A25").s().p("AARAeIgFAAQAEglglAHIAAgIIAAgKQAtglgCBVg");
	this.shape_101.setTransform(219.3,101.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#371B26").s().p("AAJAmQgKgogNglQAgAQgDA0IgBAKQgFABAAgCg");
	this.shape_102.setTransform(223.5,111.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#616694").s().p("AlYPMIAAgKIAAi0QAShrgHiFIAAgKQAAgUgDgTQgFghAFAFQAgAegdhJQAEgFAHgDQADgCAGAAQBOgqAahYIgEAAIAAgKQAEAAADgCQACgDAAgFQAggDAHgbIABgKIAAgKIALAAQAggMAHgmIAAgKIAAgKIAAgKIAKAAQAZAFAKg3IgFAAIAAgKIAAgKQAjgPAAgtIgEAAIAAgIIAAgeIAKAAQARAaAThCQABgFAAgFIAAgKQAfgYAEguIgEAAIAAgKIAAgeIAKAAQAWAWAHhcIAAgKIAAgKIAAgKQAngugNgqQAAgCgGAAIAAgKQAKgFAIgHQADgDAAgFIAAgKIAAgKQATgUAJgeQABgFABgFQAFgFADgGQABgEABgFQAggMAGgmIABgKIAAgKIAAgKQAegLgIgxIgBgKIAAgKIAAgUQAFAAAAgBQAMgugRgXIAAgKIAAgUQAFAAAAgBQAMgugRgXIAAgKIAAgUQAEg8AhggQADgDgBgFIAAgKQAngJgDAnIAFAAQgHAWAQADQABAAAAAFQANAlALAqQABABAFAAIAAAKIAAAKQgBA8AGA8IAEAAIAAAKIAAAKQABAFgDADQgDACgEAAQgBAoAGAoIAEAAIAAAKIAAAKIAAAKIgJAAIAACgIAAAKQgqBegFB+QgHCThXANIgKgFQAYDlh8B8IABgJQAKgqgeABIAABkIAAAKIgBAKQgbB7gzBhQABA3ABA3QAEChhMBPQgqAagLglIglAfQgeAZgtgNIgFgBQgdAtgWAAQgWAAgRgugAkvKMQAbBlgbhvIAAAKgAi1JiQAdAdgqhDQAAAZANANgAjeHYQAqBkgrhuQAAAFABAFgAg9HgQAxA/gzhHQAAAFACADgAhGGUQAeAFgsgbQAGAUAIACgAhmEaQAvBvgxh5QAAAFACAFgAA4DAQAcBEgdhOQgBAFACAFgAARhNQAgBJgjhSQABAFACAEgACUiRQAhAHgugSQAJALAEAAgAB9jiQAFAKgBAKQgBAbAAgCQASg3gJAAQgEAAgIAKgAB9k8QAFAFABAGIAEAOQAPgqgHAAQgFAAgNARgAB9mqQAAAUAJAHQAkAYgthHIAAAUg");
	this.shape_103.setTransform(191.5,203);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#491620").s().p("AgDANQgDgGgFgFIAAgIQAngngaBBQAAACgDAAQAAgFgCgEg");
	this.shape_104.setTransform(209.3,68.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#54272F").s().p("AgcgDQAbAFAFgNQABgCAFAAQAggCgYASQgDACgFAAQgFAAgDADQgGAGgHAAQgLAAgGgRg");
	this.shape_105.setTransform(239.9,60.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3D141B").s().p("AACAFQgMgFgPAAIAAgIQBNgGgoAWQgDACgFAAQAAgFgCAAg");
	this.shape_106.setTransform(229.6,30.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#85820A").s().p("AAAAnQgDgngBgmIAJAAIAABEIAAAKIgFgBg");
	this.shape_107.setTransform(283.5,98.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C1BE0A").s().p("AAKPUQA8hzgFiHIAGAJIAJALQASAvALA1IABAKIAABkIAAAKQgBAFgBAEQgcA+gYAAQgZAAgVg9gAgQruQhEg5gYhlIAAgKIAAhGIAAgKQATgPASgRQACgDAAgFQBSgKgdA9QgCAEAAAFQgGAAAAABQgeB/AuBmQgGAAgCgCg");
	this.shape_108.setTransform(295,193.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#613C43").s().p("AgIAOIAAglIAIAAQAFgBAAACQAMAngZAHIAAgKg");
	this.shape_109.setTransform(303,69.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#433033").s().p("AgEATQgFgTAAgSQAdgBgPAlQgBACgEAAQgEAAAAgBg");
	this.shape_110.setTransform(303,63.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#503A3D").s().p("AAAAXQgLgVgCgaIAKAAQAZAIgMAnQAAABgFABQgFAAAAgCg");
	this.shape_111.setTransform(302.5,56.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#342012").s().p("AhvBDQgDgDgFAAIAAgKIAAgKQAqg4A4gtQACgCAAgFQA6gPBQAKIABAFIgKAAIgLAAIAAAKIgKAAQg7gEgnAOQgEAAgDADQgzA0gqA/QAAgFgCgCg");
	this.shape_112.setTransform(309,79.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#2C1D12").s().p("ABCCjQiDhIgJjCQAFgBADgCQADgCgBgFIAAgKQAZgVAbgRQADgCAGgBQgBAFADADQABADAFgBQgBAFgCADQgQASgTAPIAAAKIgLAAQABAoAEAnIAGABQAYBiBCA5QACACAGAAQguhmAeh8QAAgBAGAAQgBAPAFANQAAACAGgBIAAAKIAKDbQgGAAgDgCg");
	this.shape_113.setTransform(287.5,104.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#4E3439").s().p("AgXADQAFAAACgDQADAAAAgFQAagQAKARQABAEAAADQgEAAgEACQgMAJgIAAQgLAAgIgLg");
	this.shape_114.setTransform(277.5,92);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#412B2F").s().p("AgXACQAEAAADgCQACgBABgFQARgFAUAAIAAAFQgEAAgBACQgLAQgLAAQgKAAgKgKg");
	this.shape_115.setTransform(270.5,90.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#514144").s().p("AgVAEQAFAAACgDQADgBAAgEQAegbADAjIgFAAQgFAAgCACQgJAKgFAAQgJAAgIgMg");
	this.shape_116.setTransform(264.3,86.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#4C3B3E").s().p("AgaAAQAFAAADgCQACgCAAgFQA8gHgYAWQgDADgFAAIgKABIgKACQgPAAgDgMg");
	this.shape_117.setTransform(249.7,77.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#56363C").s().p("AgbgJIAKAAIAKAAQA0gFgaAUQgDADgFgBIgJACQgGABgGAAQgUAAADgUg");
	this.shape_118.setTransform(244.8,72.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#483337").s().p("AgcAAQAWgIAagBIAKgBQAAAFgDAEQgIAJgTAAIgIABIgJACQgMAAABgLg");
	this.shape_119.setTransform(241,55.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#373828").s().p("AgEAsQgEgsAAgsIAIAAIAKAAIAABFIAAAJIgKAAIAAAKIgEAAg");
	this.shape_120.setTransform(260,56.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#151510").s().p("AhGBEQgCgCgFAAQgcgqAHhMIABgKQCdh3AoDZIABAKQhxhEBGBjQADAEAAAFQgiATgbAAQgnAAgfglg");
	this.shape_121.setTransform(276.9,58.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#BBBD75").s().p("AgdCPIgKAAQhGgogmhHQgCgEAAgFIAAgKIAAhEIAAgKQAogzA9gbQAEgCAFAAQB/ALAtBhQABACAFAAQAZBNghA0QgCAEAAAFQglArhRAAQgSAAgWgDgAhZg3IAAAKQgIBMAcAqQAFAAACACQA2BABNguQAAgFgCgEQhGhjBwBEIgBgKQgZiMhMAAQgoAAg4Aqg");
	this.shape_122.setTransform(276,58);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#37372E").s().p("AgoCeQAAgFgBAAQhlgXgShmIAAgKIAKAAQAAAFACAEQAmBHBGAoIAKAAQBwANAug1QAAgFACgEQAhg0gZhNQgFAAgBgCQgthhh/gLQgFAAgEACQg9AbgoAzIAAAKIgKAAIgKAAIAAgKQAfhABGgZQAEgBAFAAIBEAAIAKAAQAFAAAEACQBdApAwBXIABAKQALBtg0AxQgFAAgEACQgqAVhAAAQgYAAgdgDg");
	this.shape_123.setTransform(276.1,58.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#777777").s().p("AAeAEIhFAAIAAgHQAnAAAnADIABAEIgKAAg");
	this.shape_124.setTransform(274,41.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#4A2A30").s().p("AgcgCQAcgFAeAAIAAAFQAAADgCAAQgNAFgPAAIgIABIgJABQgMAAABgKg");
	this.shape_125.setTransform(257,37.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#50393E").s().p("AgLAOQgFAAgBgCQgEgIAAgIQATAAAKgHQAEgDAFAAIAFAAQABAdgfAAIgDgBg");
	this.shape_126.setTransform(244.3,49.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#49383B").s().p("AgGAIQgFAAgEgCQgGgDgFgDQAaAAANgHQAEgDAFAAQAFAAAAABQAEAUgVAAQgHAAgJgDg");
	this.shape_127.setTransform(249.8,43.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#3D131B").s().p("Aj/VXQgig9gehDQAxgdASBkQAEATAKAKIgKAAIAAAUIAAALQgGgBgBgCgAE21PIiCAAIAAgKQBFAABGAGIAAAEIgJAAg");
	this.shape_128.setTransform(230,144.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#5A1925").s().p("AAUAOQgggFgRgWQAigBAXAOQABAAABAFIAAAKIgKgBg");
	this.shape_129.setTransform(267,2.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#4B2F34").s().p("AAFARQgRgIgBgcQAYADADAaIAAAKQgEAAgFgDg");
	this.shape_130.setTransform(297.5,46.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CAC9C9").s().p("ABSEkQgCgDgBgFQAAgFgBgEQgKgQgcAPIgKABQgbAGAGgbIAAgFQgSAAgTAFIgKAAQgRgDgDgRIAEAAQgCgkghAaQgEAAgDgCQgigqhOgkQAEAAADgCQAYgZg9AHQgGAAgDgCQgLgIgBgUQAGAAACgCQAagXg2AFIAAgKQAAgzgdglQAEAAAEgCQAXgUgfACIAAgKIAAgUQATAAAIgLQADgEgBgFIAAgFQgUACABgRQAEAAADgCQACgDAAgFQAlACgBggIgGAAIAAgKIAAgKQALgJASgFQACgBAAgFQApALgGgeQgBgBgFAAIAAgKQAVgOAcgKQACgBAAgFQAPAAANgEQABgBABgFQB4g6CKA4QAEACAGAAQACAbAbADIAKAAQAOAbAcALQADACAGAAQABAdATAJQAFACAEAAQADAmAZAQQADABAAAFIgLAAQADAcALAUQACACAFAAQAAAFgDADQgCACgFAAIAAAKQgBAUAFARQAAABAGAAIAAAKIAAAKIgKAAIAAAoIAAAKIgCAKQgcBqhuAYIAAAKIgKAAIAAAKQgGAAgDADQgbARgZAUIAAAKQgEAAgDgCgAgTjWQgEAAgFACQhGAYgeBAIAAAKQAAAtAEAtIAGAAQARBlBlAWQAAAAAAAFQBmAMA6geQAEgCAFAAQA0gwgLhuIAAgKQgwhWhdgqQgEgCgFAAIgBgFQgogFgmAAIAAAKg");
	this.shape_131.setTransform(272,63.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#503338").s().p("AAJAOQgZgDgCgZQAaACAJASQACADAAAGIgKgBg");
	this.shape_132.setTransform(289,38.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CC3354").s().p("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");
	this.shape_133.setTransform(239.7,148);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(9,9,9,0.204)").s().p("AgTgJQAFAAACgCQADgDAAgFQAFAAACADQAbAkgGAAQgGAAgggdg");
	this.shape_134.setTransform(304.1,16.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#36300D").s().p("AgXCuQgGi2hjhWIAAgJQAKAAAIgFQACgBAAgEQBZBQAGCoIAFAAQApieguiXIAFAAQAyAwAWBRQABACAFAAQAABNAFBQIAFAAQA9h/g7iEQgCgDAAgGQAFAAACgCQADgDAAgFQAFAAABACQBOC0hoB/IgFgBQgJh6gZhjQASCRhDBqg");
	this.shape_135.setTransform(315,267.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#A5801A").s().p("AvkH2QgCgCAAgGQAvhDgHh7IgBgKQgvg1AjgwQACgEAAgFQD/hQDshiQAEgCAGAAQBjBWAFC4IAGAAQBEhqgRiTQAZBlAIB6IAGABQBnh/hNi0QgCgCgFAAIAAgKQHGipHZiaQChg0Chg3IAADxIAAAJQg2Abg9AaQpuEIqWDnIAAgKQgIhvgphPQgKgPgNgMIgMgMQgICKgvB5IAAALQAAAFgCAAQjdBbjjBUQgFAAgDgDg");
	this.shape_136.setTransform(349,257.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(21,18,16,0.953)").s().p("AlrWWQAKmHAvlKQAViOg7A1IgEAEQh2iYATkaQAfnFglmLIAAAKQADDGhnBbQgGAAAAgBQhYlFgvlsQg0AIguARQgsASgqAOQqnDgqvDSIAAgKIAAgfQK0jMKgjqIBdggQE4hqFVhUQAggdAWgnQACgCAEAAQAaiGAAh+IAEAAQBPBoAdCtQAAADALgKQA3gZgghpQgQg0gHg5IAAgKIAKAAQAiBVABB9IAEAAQgCAPAXAAIAAgGQAmgFAdgSQACgBAAgFIAAgKIAAgLIAKAAIALAAQgHAbAZgLQACgBAAgEQDjhUDdhbQACAAAAgFQAEAAADACQACADABAFQArB5A3h6QABgFABgEQAEAAABgCQAMhCgRgrIgBgKQgLg1gSgvIAAgKIAKAAQApBPAIBvIAAAKQKYjnJukKQA9gaA2gbIAAAUIAAAKQgzAZgzAWQp4EJqRDvQAAAFgBAEIgdBGQgEAAgFACQgjAOgaAZQgUB8gSB+Qg2FqiyDtIgBAKQg6Dsg8DrQgFAAgBACQgRAogmARIgBAKQhGF+ieEoQg1EvhCEnQhCEeggE9QgVDXh4BpQhbkxALmfgAk+YDIAEAAQgEEoAsD0IABAKQBWiFAVjXQAFhAAQhLQBincBbnnQgJgngPgnQgBgBgFgBIAAi0IAAgKQAbBEgBBdQAAAsAZAQQCJkRBDlYQABgBAFAAQggiLALiDIABgKQARBqASBxIAEAAQBOhcAaicQARhlAThmIBcnyQARhbgPgMQgKgIAHAUQgiA+AjhvQAwiYAKiKQh/AMhVBaIgHAbQgIAxgNgvIABgCIgBAAQgFAAgCgCQgCgDAAgFIAAgPQifAmiYA6IAAAJQgJBMhZgFQgdgBgPgFQh5ghiGBEIAAAKQAbC5hOB+QALF2BLExIgGAAQAAgFgBgEQgkhTgMhsIgGAAQADBYgSA/IAACBIAAAKIgKAAIAACoIAAAKQgIEYBJDHQABACAEAAQBniFAXjQQAZjbAdjRQgJDXgeDzIAAAKIgGABQgOB9goBfIAAAKIAAAKIAAC0IAAAJIAAAKQgCCVgcB5IAAAzIAAAKIgLAAIAABaIAAAKIAACBIAAAKIAAAVIAAAKIgKAAQABBpAFBogAmdxyQh7Agh1AlIAAAKQAkFcBKE5QAEAAABgCQA9jAAOjsQAEAAABgCQA7h8gFi5IgJABgAKY3fQgaADgDAOIiCLNIAABGIAAAQQCDj5BGlOQAhidhBhWQgFAGgFAAgAgs2LIAAAKIAAAKQgEBbg3AoQAnBmA0hiQAxhggmhtQgNgjgJgiQAAgFgDgDQgIgIgKgEIAACLg");
	this.shape_137.setTransform(224.5,447.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#CAC70A").s().p("AhkBVIABgKQAFAAAAgBQANhKgSg1IAAgKQgEhMgag2QAqg/Azg2QACgDAFAAQAngOA7AEIAKAAQA/AMAZA9QBMC0hnCqQhzC/jgAiQBMheAXiSg");
	this.shape_138.setTransform(311,106.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(25,17,15,0.933)").s().p("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");
	this.shape_139.setTransform(224.5,180.2);

	this.addChild(this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,449,662.3);


(lib.Bubble = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Hello Kids!\nWelcome to my island!", "bold 36px Comic Sans MS");
	this.text.lineHeight = 38;
	this.text.lineWidth = 393;
	this.text.setTransform(12,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF66").s().p("EglFgNzMBDnAISIGkQ2MhFWACfg");
	this.shape.setTransform(206.6,50.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.8,-37.9,474.9,177);


(lib.Island_Symbol = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ZoomonIsland();
	this.instance.setTransform(1051,769,1,1,0,0,0,512,384);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.Farm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(97,20.1);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(512,384);
	this.instance_1.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.9,-363.9,1024,768);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;