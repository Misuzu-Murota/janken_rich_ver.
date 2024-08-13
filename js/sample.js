   // 1人目クリック：2人目のトランプ選ぶのじゃというコメント&選択したカードが浮き上がる、選択した以外のカードはグレーアウト
   // 2人目クリック：2人目のトランプ選ぶのじゃというコメント&選択したカードが浮き上がる、選択した以外のカードはグレーアウト「対決！」のボタンを表示
   //対決ボタン押す：各エリアにカードの値表示、勝敗表示、誰が何を何杯飲むか表示
   // 勝敗：数字が大きい方が勝ち
   //inputしたお酒をランダム表示&杯数を乱数表示
   
// 0-1. 開始ボタン押下時に入力されている氏名のデータを取得＆表示
$("#kaishibtn").on("click",function(){
    const text1 = $('#content').val();
    console.log(text1)
    const text2 = $('#content2').val();
    console.log(text2)
    $("#hitorime-comment").html(text1+"よ、1枚トランプを選ぶのじゃ");
    $("#futarime-comment").html(text2+"よ、1枚トランプを選ぶのじゃ");
})

// 1.&2. 選んだトランプカードを選ぶ
$("#shote1").on("click",function(){
    $(".shote").removeClass('animation')
    $("#shote1").css("transform", "scale(1.2)");
    $("#shote2").css("transform", "scale(0.8)");
    $("#shote3").css("transform", "scale(0.8)");
})
$("#shote2").on("click",function(){
    $("#shote2").css("transform", "scale(1.2)");
    $("#shote1").css("transform", "scale(0.8)");
    $("#shote3").css("transform", "scale(0.8)");
})
$("#shote3").on("click",function(){
    $("#shote3").css("transform", "scale(1.2)");
    $("#shote1").css("transform", "scale(0.8)");
    $("#shote2").css("transform", "scale(0.8)");
})

$("#shote21").on("click",function(){
    $("#shote21").css("transform", "scale(1.2)");
    $("#shote22").css("transform", "scale(0.8)");
    $("#shote23").css("transform", "scale(0.8)");
})
$("#shote22").on("click",function(){
    $("#shote22").css("transform", "scale(1.2)");
    $("#shote21").css("transform", "scale(0.8)");
    $("#shote23").css("transform", "scale(0.8)");
})
$("#shote23").on("click",function(){
    $("#shote23").css("transform", "scale(1.2)");
    $("#shote21").css("transform", "scale(0.8)");
    $("#shote22").css("transform", "scale(0.8)");
})
// 3.対決ボタンを押す（カード表示する＆選択カードリセット）
$("#taiketsu-btn").on("click",function(){
    $("#hitorime").addClass('shote');
        setTimeout(function() {
        $("#hitorime").removeClass('shote'); // 3秒後にアニメーションを終了する
        }, 3000);
    $("#futarime").addClass('shote')
        setTimeout(function() {
        $("#futarime").removeClass('shote'); // 3秒後にアニメーションを終了する
        }, 3000);
    
    setTimeout(function() {
    console.log("対決ボタンがクリックされました");
    $('.popup-ichi').css('visibility', 'visible'); 
    const t= Math.floor(Math.random()*14);   
    if(t==0){
        $("#hitorime").attr('src',"img/torannpu-illust53.png");
    }
    if(t==1){
        $("#hitorime").attr('src',"img/diamond_1.png");
    }
    if(t==2){
        $("#hitorime").attr('src',"img/diamond_2.png");
    }
    if(t==3){
        $("#hitorime").attr('src',"img/diamond_3.png");
    }
    if(t==4){
        $("#hitorime").attr('src',"img/diamond_4.png");
    }
    if(t==5){
        $("#hitorime").attr('src',"img/diamond_5.png");
    }
    if(t==6){
        $("#hitorime").attr('src',"img/diamond_6.png");
    }
    if(t==7){
        $("#hitorime").attr('src',"img/diamond_7.png");
    }
    if(t==8){
        $("#hitorime").attr('src',"img/diamond_8.png");
    }
    if(t==9){
        $("#hitorime").attr('src',"img/diamond_9.png");
    }
    if(t==10){
        $("#hitorime").attr('src',"img/diamond_10.png");
    }
    if(t==11){
        $("#hitorime").attr('src',"img/diamond_11.png");
    }
    if(t==12){
        $("#hitorime").attr('src',"img/diamond_12.png");
    }
    if(t==13){
        $("#hitorime").attr('src',"img/diamond_13.png");
    }
    const r= Math.floor(Math.random()*14);   
    if(r==0){
        $("#futarime").attr('src',"img/torannpu-illust53.png");
    }
    if(r==1){
        $("#futarime").attr('src',"img/spade_1.png");
    }
    if(r==2){
        $("#futarime").attr('src',"img/spade_2.png");
    }
    if(r==3){
        $("#futarime").attr('src',"img/spade_3.png");
    }
    if(r==4){
        $("#futarime").attr('src',"img/spade_4.png");
    }
    if(r==5){
        $("#futarime").attr('src',"img/spade_5.png");
    }
    if(r==6){
        $("#futarime").attr('src',"img/spade_6.png");
    }
    if(r==7){
        $("#futarime").attr('src',"img/spade_7.png");
    }
    if(r==8){
        $("#futarime").attr('src',"img/spade_8.png");
    }
    if(r==9){
        $("#futarime").attr('src',"img/spade_9.png");
    }
    if(r==10){
        $("#futarime").attr('src',"img/spade_10.png");
    }
    if(r==11){
        $("#futarime").attr('src',"img/spade_11.png");
    }
    if(r==12){
        $("#futarime").attr('src',"img/spade_12.png");
    }
    if(r==13){
        $("#futarime").attr('src',"img/spade_13.png");
    }
    console.log(t,r)
 // 4. 定数tと定数rを比較して、勝ち負けを決める

     //4-1. 勝負後に飲むお酒データを取得
     let osake1 = $('#osake1 option:selected').text();
     console.log('osake1:', osake1);
     let osake2 = $('#osake2 option:selected').text();
     console.log('osake2:', osake2);
        //  変更オプション
    $('#osake1').change(function() {
        osake1 = $('#osake1 option:selected').text(); 
        console.log('osake1 (changed):', osake1);
    });
    $('#osake2').change(function() {
        osake2 = $('#osake2 option:selected').text(); 
        console.log('osake2 (changed):', osake2);
    });
    // 4-2. 結果のポップアップ表示
    // 飲む人の名前取得
    const text11 = $('#content').val();
    console.log(text11)
    const text22 = $('#content2').val();
    console.log(text22)

    // 勝敗結果
     if(t>r){
        $("#shouhai").html(text22+"の負け～！")
        $("#namae").html(text22+"よ")
        // 杯数設定
        const v= Math.floor(Math.random()*4);
        if(v==0){
            $('#inshu1').text("");
            $('#inshu2').text("");
            $("#haisuu").html("ラッキー!!!飲まなくていいよ")
        }
        if(v==1){
         //飲むお酒設定
            var value1 = $('#osake1 option:selected').text();
            var value2 = $('#osake2 option:selected').text();
    
            $('#inshu1').text(value1);
            $('#inshu2').text(value2);
        
            var items = $('.inshu'); // 全ての要素を取得
            var randomIndex = Math.floor(Math.random() * items.length); // ランダムなインデックスを取得
            items.hide();
            items.eq(randomIndex).show();
            console.log(randomIndex)
    
            $("#haisuu").html("1杯飲め～！")
        }
        if(v==2){
         //飲むお酒設定
            var value1 = $('#osake1 option:selected').text();
            var value2 = $('#osake2 option:selected').text();
    
            $('#inshu1').text(value1);
            $('#inshu2').text(value2);
        
            var items = $('.inshu'); // 全ての要素を取得
            var randomIndex = Math.floor(Math.random() * items.length); // ランダムなインデックスを取得
            items.hide();
            items.eq(randomIndex).show();
            console.log(randomIndex)
    
            $("#haisuu").html("2杯飲め～！")
        }
        if(v==3){
         //飲むお酒設定
            var value1 = $('#osake1 option:selected').text();
            var value2 = $('#osake2 option:selected').text();
    
            $('#inshu1').text(value1);
            $('#inshu2').text(value2);
        
            var items = $('.inshu'); // 全ての要素を取得
            var randomIndex = Math.floor(Math.random() * items.length); // ランダムなインデックスを取得
            items.hide();
            items.eq(randomIndex).show();
            console.log(randomIndex)
    
            $("#haisuu").html("3杯飲め～！")
        }
    }else if(r>t){
        $("#shouhai").html(text11+"の負け～！")
        $("#namae").html(text11+"よ")
     
        const w= Math.floor(Math.random()*4);
        if(w==0){
            $('#inshu1').text("");
            $('#inshu2').text("");
            $("#haisuu").html("ラッキー!!!飲まなくていいよ")
        }
        if(w==1){
         //飲むお酒設定
            var value1 = $('#osake1 option:selected').text();
            var value2 = $('#osake2 option:selected').text();
    
            $('#inshu1').text(value1);
            $('#inshu2').text(value2);
        
            var items = $('.inshu'); // 全ての要素を取得
            var randomIndex = Math.floor(Math.random() * items.length); // ランダムなインデックスを取得
            items.hide();
            items.eq(randomIndex).show();
            console.log(randomIndex)
    
            $("#haisuu").html("1杯飲め～！")
        }
        if(w==2){
          //飲むお酒設定
            var value1 = $('#osake1 option:selected').text();
            var value2 = $('#osake2 option:selected').text();
    
            $('#inshu1').text(value1);
            $('#inshu2').text(value2);
        
            var items = $('.inshu'); // 全ての要素を取得
            var randomIndex = Math.floor(Math.random() * items.length); // ランダムなインデックスを取得
            items.hide();
            items.eq(randomIndex).show();
            console.log(randomIndex)
    
            $("#haisuu").html("2杯飲め～！")
        }
        if(w==3){
          //飲むお酒設定
            var value1 = $('#osake1 option:selected').text();
            var value2 = $('#osake2 option:selected').text();
    
            $('#inshu1').text(value1);
            $('#inshu2').text(value2);
        
            var items = $('.inshu'); // 全ての要素を取得
            var randomIndex = Math.floor(Math.random() * items.length); // ランダムなインデックスを取得
            items.hide();
            items.eq(randomIndex).show();
            console.log(randomIndex)
    
            $("#haisuu").html("3杯飲め～！")
        }
        console.log(w)
    }else{
        $("#namae").html("二人とも")
        $("#shouhai").html("どっちも飲め～")
        const z= Math.floor(Math.random()*2);
        if(z==0){
            $('#inshu1').text("");
            $('#inshu2').text("");
            $("#haisuu").html("ラッキー!!!飲まなくていいよ")
        }
        if(z==1){
          //飲むお酒設定
            var value1 = $('#osake1 option:selected').text();
            var value2 = $('#osake2 option:selected').text();
    
            $('#inshu1').text(value1);
            $('#inshu2').text(value2);
        
            var items = $('.inshu'); // 全ての要素を取得
            var randomIndex = Math.floor(Math.random() * items.length); // ランダムなインデックスを取得
            items.hide();
            items.eq(randomIndex).show();
            console.log(randomIndex)
    
            $("#haisuu").html("仲良く1杯飲め～！")
        }
        console.log(z)
        }
    }, 3000); 
    $("#close").on("click",function(){
        $('.popup-ichi').css('visibility', 'hidden');
    })
})