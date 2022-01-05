function DrawCircle() {
    var CanvasElement = document.getElementById("CanvasTest");

    var CanvasContext = CanvasElement.getContext("2d");
    var Pen = CanvasContext.createRadialGradient(75, 50, 5, 90, 60, 100);

    Pen.addColorStop(0, "blue");
    Pen.addColorStop(1, "aqua");
    CanvasContext.beginPath();
    CanvasContext.arc(95, 90, 80, 0, 2 * Math.PI);
    CanvasContext.fillStyle = Pen;
    CanvasContext.fill();

    CanvasContext.lineWidth = 5;
    CanvasContext.strokeStyle = 'black';
    CanvasContext.stroke();

    CanvasContext.fillStyle = 'white';
    CanvasContext.font = "60px Arial";
    CanvasContext.fillText("Hi", 65, 110);
}