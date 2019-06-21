<?php

ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);

$name = $_POST['user_name'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$products = $_POST['products'];
$comment = $_POST['comment'];
$token = "826389147:AAEOGKQqwvI3nLyL-VbnO-PGZRopuFT-tOA";
$chat_id = "-384507820";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Адрес: ' => $company,
  'Продукты: ' => $products,
  'Комментарий: ' => $comment,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>