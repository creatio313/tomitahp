<?php
mb_language('japanese');
mb_internal_encoding('UTF-8');


$action = $_POST['action'];
$name = htmlspecialchars($_POST['Name']);
$email = htmlspecialchars($_POST['Mail']);
$tel = mb_convert_kana($_POST['Tel'],'n','UTF-8');
$subject = htmlspecialchars($POST['subject']);
$comment = htmlspecialchars($_POST['Naiyou']);
$to = 'メールアドレス';
$message = '[お名前]'."\n".$name."\n";
$message .= '[email]'."\n".$email."\n";
$message .= '[Tel]'."\n".$tel."\n";
$message .= '[コメント]'."\n".$comment."\n\n\n";
$header = 'From: '.$email."\r\n";
$header .= 'Reply-To: '.$email."\r\n";
if($action == "post"){
$status = mb_send_mail($to, $subject, $message, $header);
if ($status) {
echo '<p class="msg">メッセージは正常に送信されました</p>';
echo '<button type="button" onclick="history.go(-1)">入力フォームに戻る</button>';
} else {
echo '<p class="msg">メッセージの送信に失敗しました</p>';
echo '<button type="button" onclick="history.go(-1)">入力フォームに戻る</button>';
}
}
?>