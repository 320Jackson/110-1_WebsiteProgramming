var index = 0;
setInterval(GenerateClock, 1000);

function GenerateClock() {
    var ClockContext = document.getElementById("Clock").getContext("2d");
    if(index == 0) {
        ClockContext.translate(245, 245);
        index++;
    }
    ClockContext.beginPath();        
    ClockContext.arc(0, 0, 300, 0, 2 * Math.PI);
    ClockContext.fillStyle = 'white';
    ClockContext.fill();
    ClockContext.lineWidth = 1;
    /*Clock frame.*/
    //DrawBackgroud(ClockContext, 0, 0, 245);
    DrawFillCircle(ClockContext, 0, 0, 5);
    //DrawStrokeCircle(ClockContext, 0, 0, 230, 10);

    /*Draw scale.*/
    DrawScale(ClockContext, 230);
    DrawRomeScale(ClockContext, 230);

    /*Draw time.*/
    DrawTime(ClockContext, 225);
}

function DrawTime(Context, Radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    DrawHand(Context, hour, Radius * 0.5, Radius * 0.04);
    //minute
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    DrawHand(Context, minute, Radius * 0.8, Radius * 0.04);
    // second
    second = (second * Math.PI / 30);
    DrawHand(Context, second, Radius * 0.9, Radius * 0.02);
}

function DrawHand(Context, Angle, Length, Width) {
    Context.beginPath();
    Context.lineWidth = Width;
    Context.lineCap = "round";
    Context.moveTo(0, 0);
    Context.rotate(Angle);
    Context.lineTo(0, -Length);
    Context.stroke();
    Context.rotate(-Angle);
}

function DrawScale(Context, Radius) {
    Context.strokeStyle = "black";
    for(var Num = 0; Num < 60; Num++) {
        var Angle = (Num / 30) * Math.PI;
        Context.rotate(-Angle);
        Context.moveTo(0, -Radius);
        if(Num % 5 == 0) {
            Context.lineTo(0, -Radius + 10);    
        }
        else {
            Context.lineTo(0, -Radius + 5);
        }
        Context.stroke();
        Context.rotate(Angle);
    }
}

function DrawRomeScale(Context, Radius) {
    var NumList = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
    Context.font = Radius * 0.15 + "px arial";
    Context.textAlign = "center";
    Context.textBaseline = "middle";
    for(var Num = 1; Num <= 12; Num++) {
        var Angle = (Num / 6) * Math.PI;
        RotateAndTranslate(Context, Angle, Radius, -1);
        Context.fillText(NumList[Num - 1], 0, 0);
        RotateAndTranslate(Context, Angle, Radius, 1);
    }
}

function DrawNumScale(Context, Radius) {
    Context.font = Radius * 0.15 + "px arial";
    Context.textAlign = "center";
    Context.textBaseline = "middle";
    for(var Num = 1; Num <= 12; Num++) {
        var Angle = (Num / 6) * Math.PI;
        RotateAndTranslate(Context, Angle, Radius, -1);
        Context.fillText(Num.toString(), 0, 0);
        RotateAndTranslate(Context, Angle, Radius, 1);
    }
}

function DrawBackgroud(Context, x, y, Radius) {    
    Context.beginPath();
    
    var Pen = Context.createRadialGradient(90, 60, 20, 90, 60, 100);
    Pen.addColorStop(0, "blue");
    Pen.addColorStop(1, "aqua");

    Context.arc(x, y, Radius, 0, 2 * Math.PI);
    Context.fillStyle = Pen;
    Context.fill();
}

function DrawFillCircle(Context, x, y, Radius) {    
    Context.beginPath();
    Context.arc(x, y, Radius, 0, 2 * Math.PI);
    Context.fillStyle = "black";
    Context.fill();
}

function DrawStrokeCircle(Context, x, y, Radius, LineWidth) {    
    Context.beginPath();
    Context.arc(x, y, Radius, 0, 2 * Math.PI);
    Context.LineWidth = LineWidth;
    Context.stroke();
}

function RotateAndTranslate(Context, Angle, Radius, Fix) {    
    Context.rotate(Angle);
    Context.translate(0, Fix * Radius * 0.85);
    Context.rotate(-Angle);
}