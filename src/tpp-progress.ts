/// <reference path="tpp-structure" />
class Duration {
	days: number;

	get TotalSeconds() {
		return this.seconds + (this.minutes * 60) + (this.hours * 60 * 60) + (this.days * 60 * 60 * 24);
	}

	get TotalDays() {
		return this.TotalSeconds / 60 / 60 / 24;
	}

	static parse(time: string) {
		try {
			var matches = /^\s*(?:(\d*)d)?\s*(?:(\d*)h)?\s*(?:(\d*)m)?\s*(?:(\d*)s)?\s*$/i.exec(time);
			return new Duration(parseInt(matches[1]) || 0, parseInt(matches[2]) || 0, parseInt(matches[3]) || 0, parseInt(matches[4]) || 0);
		}
		catch (e) {
			return new Duration(0, 0, 0, 0);
		}
	}

	constructor(days: string | number, public hours?: number, public minutes?: number, public seconds?: number) {
		if (typeof (days) === "string") {
			var parsed = Duration.parse(<string>days);
			this.days = parsed.days;
			this.hours = parsed.hours;
			this.minutes = parsed.minutes;
			this.seconds = parsed.seconds;
		}
		else this.days = <number>days;
	}
}

var fakeQuery: (selector: string) => Array<HTMLElement> = selector => Array.prototype.slice.call(document.querySelectorAll(selector));
var globalPpd: number;

function makeGrid(ppd: number) {
	var bgImageSrc = document.createElement("canvas");
	bgImageSrc.height = 1;
	bgImageSrc.width = ppd / 2;
	var draw = bgImageSrc.getContext("2d");
	draw.strokeStyle = "darkgray";
	draw.moveTo(ppd / 2, -1);
	draw.lineTo(ppd / 2, 2);
	draw.stroke();
	return bgImageSrc.toDataURL();
}

function createChart(data: TPP.Run[], label: string, ppd?: number) {
	globalPpd = ppd = globalPpd || ppd || window.innerWidth / days;
	var chart = document.createElement("div");
	chart.className = "progressChart";
	chart.setAttribute("data-label", label);
	setTimeout(() => document.body.appendChild(chart), 1);
	var days = 0;
	data.forEach(run=> {
		var runLength = Duration.parse(run.Duration).TotalSeconds / 60 / 60 / 24;
		if (days < runLength) days = runLength;
		chart.appendChild(queueRun(run));
	});
	var ruler = document.createElement("div");
	ruler.className = "ruler";
	chart.insertBefore(ruler, chart.firstChild);
	for (var i = 0; i - .5 < days; i++) {
		var stop = document.createElement('div');
		ruler.appendChild(stop);
		stop.className = "stop";
	}
	setTimeout(() => applyScale(ppd), 1);
}

function queueRun(runInfo: TPP.Run) {
	var div = document.createElement("div");
	if (runInfo.ScrapeUrl) Scrape(runInfo).then(r=> {
		drawRun(r, div);
		setTimeout(() => applyScale(globalPpd), 1);
	}, console.error);
	else setTimeout(() => drawRun(runInfo, div), 1);
	return div;	
}

function drawRun(runInfo: TPP.Run, run?:HTMLDivElement) {
	run = run || document.createElement("div");
	run.className = "run";
	run.setAttribute("data-time", runInfo.Duration);
	run.setAttribute("data-label", runInfo.RunName + ": " + runInfo.Duration);
	run.setAttribute("data-json", JSON.stringify(runInfo));
	run.setAttribute("id", runInfo.RunName.replace(/[^A-Z0-9]/ig, '').toLowerCase());
	run.style.backgroundColor = runInfo.ColorPrimary;
	run.style.borderColor = run.style.color = runInfo.ColorSecondary;
	run.appendChild(drawHost(runInfo));
	runInfo.Events.sort((e1, e2) => Duration.parse(e1.Time).TotalSeconds - Duration.parse(e2.Time).TotalSeconds).forEach(event=> run.appendChild(drawEvent(event)));
}

function drawHost(runInfo: TPP.Run) {
	var host = drawEvent({
		Group: "host",
		Name: runInfo.HostName,
		Image: runInfo.HostImage,
		ImageSource: runInfo.HostImageSource,
		Time: ''
	});
	host.style.left = "0";
	return host;
}

function drawEvent(eventInfo: TPP.Event) {
	var event = document.createElement("div");
	var eventImg = document.createElement("img");
	if (eventInfo.ImageSource) {
		var imgSource = document.createElement("a");
		event.appendChild(imgSource);
		imgSource.appendChild(eventImg);
		imgSource.setAttribute("href", eventInfo.ImageSource);
		imgSource.setAttribute("target", "_blank");
	}
	else event.appendChild(eventImg);
	event.className = "event " + eventInfo.Group.replace(/[^A-Z0-9]/ig, '').toLowerCase();
	var label = eventInfo.Name;
	if (eventInfo.Time) label += "\n" + eventInfo.Time;
	if (eventInfo.Attempts) label += "\n(" + eventInfo.Attempts + " Attempt" + (eventInfo.Attempts > 1 ? "s" : "") + ")";
	eventImg.src = eventInfo.Image;
	eventImg.alt = label;
	event.setAttribute('data-label', label);
	event.setAttribute("data-time", eventInfo.Time);
	return event;
}

function applyScale(ppd?: number) {
	globalPpd = ppd = Math.pow(2, Math.floor(Math.log(ppd || 64) / Math.log(2))); //floor to power of 2
	var $ = fakeQuery;
	var $find: (elements: Array<HTMLElement>, selector: string) => Array<Array<HTMLElement>> = (elements, selector) => elements.map(e=> Array.prototype.slice.call(e.querySelectorAll(selector)));
	function left(element:HTMLElement) {
		return parseInt(element.style.left.replace('px', ''));
	}
	function width(element: HTMLElement) {
		return element.offsetWidth;
	}
	function findImage(element: HTMLElement) {
		return $find([element], "img").pop().pop();
	}
	function marginTop(element: HTMLElement) {
		return parseInt((element.style.marginTop || '0').replace('px', '')) || 0;
	}
	$('.progressChart').forEach(chart=> {
		chart.style.backgroundImage = 'url("' + makeGrid(ppd) + '")';
	});
	$find($(".progressChart .ruler"), ".stop").forEach(ruler=> ruler.forEach((stop, i) => {
		stop.style.left = i * ppd + "px";
	}));
	$(".progressChart .run").forEach(run=> {
		if (run.getAttribute('data-time')) run.style.width = Duration.parse(run.getAttribute('data-time')).TotalDays * ppd + "px";
		var events = $find([run], ".event").pop();
		events.forEach(event=> {
			if (event.getAttribute('data-time')) event.style.left = Duration.parse(event.getAttribute('data-time')).TotalDays * ppd + "px";
			findImage(event).style.marginTop = "0";
		});
		if (explode) {
			var dir = -.3;
			events.forEach((event, i) => {
				var d = dir *= -1;
				if (i == 0) return;
				var myLeft = left(event);
				var myImg = findImage(event);
				var myWidth = width(myImg) / 2;
				if (i > 1 && events[i - 1]) {
					var thisLeft = left(events[i - 1]);
					var thisImg = findImage(events[i - 1]);
					var thisWidth = width(thisImg) / 2;
					if (thisLeft + thisWidth > myLeft) {
						thisImg.style.marginTop = (marginTop(thisImg) - (thisLeft + thisWidth - myLeft) * d) + "px";
						myImg.style.marginTop = (marginTop(myImg) + (thisLeft + thisWidth - myLeft) * d) + "px";
					}
				}
				if (events[i + 1]) {
					var thisLeft = left(events[i + 1]);
					if (myLeft + myWidth > thisLeft) {
						var thisImg = findImage(events[i + 1]);
						thisImg.style.marginTop = (marginTop(thisImg) - (myLeft + myWidth - thisLeft) * d) + "px";
						myImg.style.marginTop = (marginTop(myImg) +  (myLeft + myWidth - thisLeft) * d) + "px";
					}
				}
				
			});
			findImage(events[0]).style.marginTop = findImage(events[events.length-1]).style.marginTop = "0";
		}    
	});
}

//controls and settings
var zoomIn = ()=> applyScale(globalPpd * 2);
var zoomOut = ()=> applyScale(globalPpd / 2);

var explode = localStorage.getItem("explode") == "true";
function toggleExplode(element?:HTMLInputElement) {
	explode = element ? element.checked : !explode;
	applyScale(globalPpd);
	localStorage.setItem("explode", explode ? "true" : "false");
}
window.addEventListener("load", () => {
	fakeQuery('.settings input').forEach(element => (<HTMLInputElement>element).checked = window[element.id]);
});
