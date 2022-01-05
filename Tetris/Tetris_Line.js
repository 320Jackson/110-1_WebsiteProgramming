function Line(ctx, o){
    this.x = 0, //x座標
    this.y = 0, //y座標
    this.startX = 0, //開始點x位置
    this.startY = 0, //開始點y位置
    this.endX = 0, //結束點x位置
    this.endY = 0; //結束點y位置
    this.thin = false; //設定變細係數
    this.ctx = ctx;
    
    this.init(o);
}

Line.prototype.init = function(o){
    for(var key in o){
        this[key] = o[key];
    }
}

Line.prototype.render = function(){
    innerRender(this);
    
    function innerRender(obj){
        var ctx = obj.ctx;
        ctx.save()
        ctx.beginPath();
        ctx.translate(obj.x,obj.y);
        if(obj.thin) {
            ctx.translate(0.5, 0.5);
        }
        //設定線寬
        if(obj.lineWidth) {
            ctx.lineWidth = obj.lineWidth;
        }
        if(obj.strokeStyle) {
            ctx.strokeStyle = obj.strokeStyle;
        }
        //劃線
        ctx.moveTo(obj.startX, obj.startY);
        ctx.lineTo(obj.endX, obj.endY);
        ctx.stroke();
        ctx.restore();
    }
    return this;
}