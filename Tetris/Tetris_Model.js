//模型建構函式
function Model(o){
    this.blocks = [], //儲存方塊的陣列，繪製的時候根據陣列來繪製
    this.type = 1, //模型的形狀，預設是一字形（共7種）
    this.dir = 1, //方向預設為1，總共4種，其中一字形為2種，田字形為1種，其他為4種
    this.x = 0, //x座標(只傳入第一個x，根據這個x來生成其他的x）
    this.y = 0, //y座標(只傳入第一個y，根據這個y來生成其他的y）
    
    this.init(o);
}

//初始化
Model.prototype.init = function(o){
    for(var key in o){
        this[key] = o[key];
    }
}

//建立七字形1
Model.prototype.createQi1 = function(){
    var blocks = this.blocks, x = this.x, y = this.y;
    switch(this.dir){
        case 1://
            blocks.push({x: x, y: y});
            blocks.push({x: x, y: y - 1});
            blocks.push({x: x,y: y-2});
            blocks.push({x: x + 1,y: y - 2});
            break;
        case 2://
            blocks.push({x: x + 2, y: y});
            blocks.push({x: x + 1, y: y});
            blocks.push({x: x, y: y});
            blocks.push({x: x, y: y - 1});
            break;	
        case 3://
            blocks.push({x: x + 1, y: y - 2});
            blocks.push({x: x + 1, y: y - 1});
            blocks.push({x: x + 1, y: y});
            blocks.push({x: x, y: y});
            break;	
        case 4://
            blocks.push({x: x - 2, y: y - 1});
            blocks.push({x: x - 1, y: y - 1});
            blocks.push({x: x, y: y - 1});
            blocks.push({x: x, y: y});
            break;
    }
}

//七1變形
Model.prototype.transformQi1 = function(){
    var blocks = this.blocks, block2 = blocks[1];
    switch(this.dir){
        case 1://豎著的
            tran1();
            this.dir = 2;
            break;
        case 2://橫著的
            tran2();
            this.dir = 3;
            break;	
        case 3://豎著的
            tran3();
            this.dir = 4;
            break;
        case 4://橫著的
            tran4();
            this.dir = 1;
            break;			
    }

    function tran1(){//變成橫著的
        for(var i = 0; i < blocks.length; i++){
            block = blocks[i];
            if(i == 0){
                block.x += 2;
            }
            else if(i == 1){
                block.x += 1;
                block.y += 1;
            }
            else if(i==2){
                block.y += 2;
            }
            else if(i==3){
                block.x -= 1;
                block.y += 1;
            }
        }
    }
    
    function tran2(){//豎著的
        for(var i = 0; i < blocks.length; i++) {
            block = blocks[i];
            if(i == 0){
                block.x -= 1;
                block.y -= 2;
            }
            else if(i == 1){
                block.y -= 1;
            }
            else if(i == 2){
                block.x += 1;
            }
            else if(i == 3){
                block.y += 1
            }
        }
    }
    
    function tran3(){//變成橫著的
        for(var i = 0; i < blocks.length; i++){
            block = blocks[i];
            if(i == 3){
                block.x += 2;
            }
            else if(i == 2){
                block.x += 1;
                block.y -= 1;
            }
            else if(i == 1){
                
            }
            else if(i == 0){
                block.x -= 1;
                block.y += 1;
            }
        }
    }
    
    function tran4(){//豎著的
        for(var i = 0; i < blocks.length; i++){
            block = blocks[i];
            if(i == 3){
                block.x -= 1;
                block.y -= 2;
            }
            else if(i == 2){
                block.x -= 2;
                block.y -= 1;
            }
            else if(i == 1){
                block.x -= 1;
            }
            else if(i == 0){
                block.y += 1;
            }
        }
    }
}