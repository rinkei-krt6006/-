(function(){
    'use strict';
    const assessmentbutton = document.getElementById('buttonhtml');
    const VVV =(document.getElementById('VVV'));
    const AAA =(document.getElementById('AAA'));
    const OOO =(document.getElementById('OOO'));
    let Adennatsu = "";
    let Adennryuu = "";
    let Ateikou = "";

    assessmentbutton.onclick= () => {

        let dennatsu = VVV.value;
        let dennryuu = AAA.value; 
        let teikou = OOO.value;
        let radio1 = document.getElementById('radio1').checked;
        let radio2 = document.getElementById('radio2').checked;

        if(radio1 == true){
                dennryuu = dennryuu / 1000
            }

        document.getElementById('Adennatsu').innerText = ' 電圧 ' + dennryuu*teikou + ' V ';
        document.getElementById('Ateikou').innerText = ' 抵抗 ' + dennatsu/dennryuu + ' Ω ';
        if(radio1 === true){
            document.getElementById('Adennryuu').innerText = ' 電流 ' + dennatsu/teikou*1000 + ' mA ';
        }else{
        if(radio2 === true){
            document.getElementById('Adennryuu').innerText = ' 電流 ' + dennatsu/teikou + ' A ';
        }else{
            document.getElementById('Adennryuu').innerText = ' 電流 ' + 'ラジオボタンをチェックしてください。' + ' A ';
        }
        }
        document.getElementById('Adennryoku').innerText = ' 電力 ' + dennryuu*dennatsu + ' W ';



    }

})();