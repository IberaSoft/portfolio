<?php
include_once 'common.php';

// Clean up the input values
foreach($_POST as $key => $value) {
	if(ini_get('magic_quotes_gpc'))
		$_POST[$key] = stripslashes($_POST[$key]);
	
	$_POST[$key] = htmlspecialchars(strip_tags($_POST[$key]));
}

// Assign the input values to variables for easy reference
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

// Test input values for errors
$errors = array();
if(strlen($name) < 2) {
	if(!$name) {
		$errors[] = $lang['VALIDNAME'];
	} else {
		$errors[] = $lang['VALIDNAME1'];
	}
}
if(!$email) {
	$errors[] = $lang['VALIDEMAIL'];
} else if(!validEmail($email)) {
	$errors[] = $lang['VALIDEMAIL1'];
}
if(strlen($message) < 10) {
	if(!$message) {
		$errors[] = $lang['VALIDMSN'];
	} else {
		$errors[] = $lang['VALIDMSN1'];
	}
}

if($errors) {
	// Output errors and die with a failure message
	$errortext = "";
	foreach($errors as $error) {
		$errortext .= "<li>".$error."</li>";
	}
	die("<h4 class='failure'>". $lang['ERROR'] ."</h4><br/>". $lang['REASON'] ."<br/><br/><ul>". $errortext ."</ul><br/><br/><span>".$lang['TRYAGAIN']."</span>");
}

// Send the email
$to = "contacto@juancruzllorens.info";
$body = "Nombre: $name \n\nEmail: $email \n\nMotivo: $subject \n\nMensaje:\n $message";
$headers = 'From: Mi WebSite <'.$to.'>' . "\r\n" . 'Reply-To: ' . $email;
mail($to, $subject, $body, $headers);

// Die with a success message
die("<h4 class='success'>". $lang['SUCCESS'] ."</h4><br/><p>". $lang['SUCCESS1'] ."<strong> ". $name ." </strong>". $lang['SUCCESS2'] ."</p>");

// A function that checks to see if
// an email is valid
function validEmail($email)
{
   $isValid = true;
   $atIndex = strrpos($email, "@");
   if (is_bool($atIndex) && !$atIndex)
   {
      $isValid = false;
   }
   else
   {
      $domain = substr($email, $atIndex+1);
      $local = substr($email, 0, $atIndex);
      $localLen = strlen($local);
      $domainLen = strlen($domain);
      if ($localLen < 1 || $localLen > 64)
      {
         // local part length exceeded
         $isValid = false;
      }
      else if ($domainLen < 1 || $domainLen > 255)
      {
         // domain part length exceeded
         $isValid = false;
      }
      else if ($local[0] == '.' || $local[$localLen-1] == '.')
      {
         // local part starts or ends with '.'
         $isValid = false;
      }
      else if (preg_match('/\\.\\./', $local))
      {
         // local part has two consecutive dots
         $isValid = false;
      }
      else if (!preg_match('/^[A-Za-z0-9\\-\\.]+$/', $domain))
      {
         // character not valid in domain part
         $isValid = false;
      }
      else if (preg_match('/\\.\\./', $domain))
      {
         // domain part has two consecutive dots
         $isValid = false;
      }
      else if(!preg_match('/^(\\\\.|[A-Za-z0-9!#%&`_=\\/$\'*+?^{}|~.-])+$/',
                 str_replace("\\\\","",$local)))
      {
         // character not valid in local part unless 
         // local part is quoted
         if (!preg_match('/^"(\\\\"|[^"])+"$/',
             str_replace("\\\\","",$local)))
         {
            $isValid = false;
         }
      }
      if ($isValid && !(checkdnsrr($domain,"MX") || checkdnsrr($domain,"A")))
      {
         // domain not found in DNS
         $isValid = false;
      }
   }
   return $isValid;
}

?>