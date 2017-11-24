(function(){
        'use strict';
        const assessmentbutton = document.getElementById('buttonhtml');
        
        const choku0 =(document.getElementById('cho0'));
        const choku1 =(document.getElementById('cho1'));
        const choku2 =(document.getElementById('cho2'));
        const choku3 =(document.getElementById('cho3'));
        const choku4 =(document.getElementById('cho4'));
        const choku5 =(document.getElementById('cho5'));
        const choku6 =(document.getElementById('cho6'));
        const choku7 =(document.getElementById('cho7'));
        const choku8 =(document.getElementById('cho8'));
        const choku9 =(document.getElementById('cho9'));
        
        let chokuretsu0 = '';
        let chokuretsu1 = '';
        let chokuretsu2 = '';
        let chokuretsu3 = '';
        let chokuretsu4 = '';
        let chokuretsu5 = '';
        let chokuretsu6 = '';
        let chokuretsu7 = '';
        let chokuretsu8 = '';
        let chokuretsu9 = '';
        
        const hei0 = document.getElementById('hei0');
        const hei1 = document.getElementById('hei1');
        const hei2 = document.getElementById('hei2');
        const hei3 = document.getElementById('hei3');
        const hei4 = document.getElementById('hei4');
        const hei5 = document.getElementById('hei5');
        const hei6 = document.getElementById('hei6');
        const hei7 = document.getElementById('hei7');
        const hei8 = document.getElementById('hei8');
        const hei9 = document.getElementById('hei9');
    
        let heiretsu0 = '';
        let heiretsu1 = '';
        let heiretsu2 = '';
        let heiretsu3 = '';
        let heiretsu4 = '';
        let heiretsu5 = '';
        let heiretsu6 = '';
        let heiretsu7 = '';
        let heiretsu8 = '';
        let heiretsu9 = '';
        
        let radio1 = document.getElementById('radio1').checked;
        let radio2 = document.getElementById('radio2').checked;

        let answer = 0

        ///////////////////////////////////////////////////////////////////////////////////
    
        assessmentbutton.onclick = () => { //ボタン認識

        const chokure0 = choku0.value;
        const chokure1 = choku1.value;
        const chokure2 = choku2.value;
        const chokure3 = choku3.value;
        const chokure4 = choku4.value;
        const chokure5 = choku5.value;
        const chokure6 = choku6.value;
        const chokure7 = choku7.value;
        const chokure8 = choku8.value;
        const chokure9 = choku9.value;

        if(  chokure0 === "") {chokuretsu0 = 0 }else{ chokuretsu0 = chokure0};
        if ( chokure0 === "") {chokuretsu0 = 0 }else{ chokuretsu0 = chokure0};
        if ( chokure1 === "") {chokuretsu1 = 0 }else{ chokuretsu1 = chokure1};
        if ( chokure2 === "") {chokuretsu2 = 0 }else{ chokuretsu2 = chokure2};
        if ( chokure3 === "") {chokuretsu3 = 0 }else{ chokuretsu3 = chokure3};
        if ( chokure4 === "") {chokuretsu4 = 0 }else{ chokuretsu4 = chokure4};
        if ( chokure5 === "") {chokuretsu5 = 0 }else{ chokuretsu5 = chokure5};
        if ( chokure6 === "") {chokuretsu6 = 0 }else{ chokuretsu6 = chokure6};
        if ( chokure7 === "") {chokuretsu7 = 0 }else{ chokuretsu7 = chokure7};
        if ( chokure8 === "") {chokuretsu8 = 0 }else{ chokuretsu8 = chokure8};
        if ( chokure9 === "") {chokuretsu9 = 0 }else{ chokuretsu9 = chokure9};

        var chokuretsu =  ( parseInt(chokuretsu0) + parseInt(chokuretsu1) + parseInt(chokuretsu2) + parseInt(chokuretsu3) + parseInt(chokuretsu4) + parseInt(chokuretsu5) + parseInt(chokuretsu6) + parseInt(chokuretsu7) + parseInt(chokuretsu8) + parseInt(chokuretsu9 ));
        console.log("直列合計" + chokuretsu);
        
        const heire0 = hei0.value;
        const heire1 = hei1.value;
        const heire2 = hei2.value;
        const heire3 = hei3.value;
        const heire4 = hei4.value;
        const heire5 = hei5.value;
        const heire6 = hei6.value;
        const heire7 = hei7.value;
        const heire8 = hei8.value;
        const heire9 = hei9.value;

        if(  heire0 === "") {heiretsu0 = 0 }else{ heiretsu0 = 1/(heire0)};
        if(  heire1 === "") {heiretsu1 = 0 }else{ heiretsu1 = 1/(heire1)};
        if(  heire2 === "") {heiretsu2 = 0 }else{ heiretsu2 = 1/(heire2)};
        if(  heire3 === "") {heiretsu3 = 0 }else{ heiretsu3 = 1/(heire3)};
        if(  heire4 === "") {heiretsu4 = 0 }else{ heiretsu4 = 1/(heire4)};
        if(  heire5 === "") {heiretsu5 = 0 }else{ heiretsu5 = 1/(heire5)};
        if(  heire6 === "") {heiretsu6 = 0 }else{ heiretsu6 = 1/(heire6)};
        if(  heire7 === "") {heiretsu7 = 0 }else{ heiretsu7 = 1/(heire7)};
        if(  heire8 === "") {heiretsu8 = 0 }else{ heiretsu8 = 1/(heire8)};
        if(  heire9 === "") {heiretsu9 = 0 }else{ heiretsu9 = 1/(heire9)};
        
        var heiretsu = 1/(heiretsu0 + heiretsu1+heiretsu2+heiretsu3+heiretsu4+heiretsu5+heiretsu6+heiretsu7+heiretsu8+heiretsu9 )
        if(  heiretsu === Infinity ) {heiretsu = 0 }else{ heiretsu = ( heiretsu )};
        console.log("並列合計" + heiretsu);
        //TODO直並列合計 
        let radio1 = document.getElementById('radio1').checked;
        let radio2 = document.getElementById('radio2').checked;
        if( radio1 == true){
                answer = chokuretsu + heiretsu
        }else{
                if(radio2 == true){
                        if(chokuretsu === 0){
                                if(heireteu === 0){answer=0}else{answer = 1/(1/(heiretsu))};
                        }else{
                                if(heiretsu === 0){answer=chokuretsu}else{answer = 1/(1/(chokuretsu)+1/(heiretsu))}
                        }
                                }else{
                console.log ("error")};
                       }
        console.log (answer) 
        document.getElementById('ans').innerText = "計算結果 : " + answer + " Ω";



//TODO結果記述

        } //ボタン動作終了


})();