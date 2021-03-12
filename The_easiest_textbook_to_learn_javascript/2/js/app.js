let weight;
weight = prompt('BMIを算出します。体重(kg)を入力してください。');
let height;
height = prompt('次に身長(m)を入力してください。');
height /=100;
let BMI =weight/Math.pow(height,2);
document.write('あなたのBMIは'+BMI.toFixed(2)+'です。');
let str;

if(18.5>BMI)str='低体重(痩せ型)';
else if(25>BMI)str='普通体重';
else if(30>BMI)str='肥満(1度)';
else if(35>BMI)str='肥満(2度)';
else if(40>BMI)str='肥満(3度)';
else str='肥満(4度)';

document.write('<br>日本肥満学会の判定基準では、 <br>'+str+' です。');