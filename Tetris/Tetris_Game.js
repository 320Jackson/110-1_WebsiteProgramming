//設定引數、執行繪製等相關方法
function Game(el){
    this.renderArr = [];//待渲染物件儲存陣列
    this.aliveModel = [];//用來存到底的model組合
    
    this.score = 0;//分數
    this.time = 0;//時間
    this.moveCount = 1;//計時控制器
}

Game.prototype.init = function(el, score, time){
    if(!el) {
        return ;   
    }
    this.el = el;
    this.scoreEL = score;
    this.timeEL = time;
    var canvas  =  document.createElement('canvas');//建立畫布
    canvas.style.cssText = "background: darkgrey; border: 1px solid grey;";//設定樣式
    var W = canvas.width = 300; //設定寬度
    var H = canvas.height = 400;//設定高度
    
    el.appendChild(canvas);//新增到指定的dom物件中
    
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.w = W;
    this.h = H;
    
    this.disX = 20;//每個格子的x方向大小
    this.disY = 20;//每個格子的y方向大小
    this.maxX = 15;//x方向格子總數
    this.maxY = 20;//y方向格子總數
    
    this.control();//
    this.draw();//繪製
}

//繪製地圖
Game.prototype.createMap = function(){
    var renderArr = this.renderArr;
    var disX = this.disX;
    var disY = this.disY;
    var maxX = this.maxX;
    var maxY = this.maxY;
    var rectW = this.w;
    var rectH = this.h;
    var rect = null;
    var color;
    
    for(var i = 1; i < maxY; i++){//20行
        var line = new Line(this.ctx, {
            x: 0,
            y: 0,
            startX: 0,
            startY: i * disY,
            endX: this.w,
            endY: i * disY,
            thin: true,
            strokeStyle: 'white',
            lineWidth: 0.2
        })
        renderArr.push(line);
    }
    
    for(var i = 1; i < maxX; i++){//15列
        var line = new Line(this.ctx,{
            x: 0,
            y: 0,
            startX: i * disX,
            startY: 0,
            endX: i * disX,
            endY: this.h,
            thin: true,
            strokeStyle: 'white',
            lineWidth: 0.2
        })
        renderArr.push(line);
    }
}

Game.prototype.draw = function(){
    this.createMap();//繪製地圖
    
    this.render();//渲染
}