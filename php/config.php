<?
	//define the receiver of the email

	define('TO_NAME','My Personal Website');
	define('TO_EMAIL','iberasoftsl@gmail.com');
	define('SUBJECT','Contact from my website');

	define('TEMPLATE_PATH','template/default.php');

	define('SMTP_ENABLE',true); // True to enable SMTP
	define('SMTP_HOST','smtp.gmail.com');
	define('SMTP_USERNAME','iberasoftsl@gmail.com');
	define('SMTP_PASSWORD','');

	// Messages
	define('MSG_INVALID_NAME','Please enter your name.');
	define('MSG_INVALID_EMAIL','Please enter valid e-mail.');
	define('MSG_INVALID_MESSAGE','Please enter your message.');
	define('MSG_SEND_ERROR','Sorry, we can\'t send this message.');

?>