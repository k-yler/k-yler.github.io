<?php 
/* https://api.telegram.org/bot1337042224:AAHL3UqamVc4MtNh-S-TZZvPjklxJEaJayI/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
 
//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
 
//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1288195683:AAGw22LTZz53oXOvLFx43oKVOCDJ5hPec4o";
 
//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "-1001302849813";
 
//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  'Имя: ' => $name,
  'Почта: ' => $phone,
  'Вопрос:' => $email
);
 
//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
//Осуществляется отправка данных в переменной $sendToTelegram
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if ($sendToTelegram) {
  header( 'Location: thankyou.html');
} else {
  echo "Error";
}
 ?>