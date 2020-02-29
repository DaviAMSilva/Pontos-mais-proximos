//////////////////////////////////////////////////////////////////////////////////////////////////////

new p5();

var points = [];
var numPoints = 100;

// randomSeed(101131131);
for (var i = 0; i < numPoints; i++) {
    points[i] = createVector(random(windowWidth), random(windowHeight));
}

var list = [{ i: 0, j: 1 }, { i: 0, j: 2 }, { i: 1, j: 2 }]

function vectorLine(a, b) {
    line(a.x, a.y, b.x, b.y);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeCap(ROUND);
    noLoop();
}
function draw() {
    var startTimeTotal = new Date().getTime();
    strokeWeight(5);
    for (p of points) {
        point(p.x, p.y);
    }

    var startTime = new Date().getTime();
    var c = closestPair(points);
    console.log("Execução: " + (new Date().getTime() - startTime) + "ms");

    if (c) {
        console.log(c);
        stroke(255,0,0); strokeWeight(7); vectorLine(...c.slice(1));
    }

    console.log("Total: " + (new Date().getTime() - startTimeTotal) + "ms");
    
    var minDist = Infinity;
    var minPoints = [];
    
    for (const p of points) {
        for (const other of points) {
            if (p === other) continue;
            if ((a = p5.Vector.dist(p, other)) < minDist) {
                minDist = a;
                minPoints = [p, other]
            }
        }
    }
    
    console.log(minDist, minPoints);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////