<?php

include_once 'common.php';

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="https://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <title><?php echo $lang['PAGE_TITLE']; ?></title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <meta name="description" content="Curriculum Vitae" />
    <meta name="keywords" content="curriculum, vitae, resume, cv, portfolio, front end, developer, software, engineer" />
    <meta name="subject" content="Curriculum Vitae" />
    <meta name="robots" content="noindex, nofollow" />
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="stylesheet" type="text/css" href="css/reset.css"/>
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" href="css/fancybox.css"/>
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,300,800,700,400italic|PT+Serif:400,400italic"/>
</head>

<body>
    <!-- Container -->
    <div id="container">
        <!-- Top -->
		<div class="top">
        	<!-- Logo -->
        	<div id="logo">
            	<h2><a href="index.php"><?php echo $lang['HEADER']; ?></a></h2>
                <h4><?php echo $lang['JOBTITLE']; ?></h4>
            </div>
            <!-- /Logo -->
        </div>
        <!-- /Top -->

        <!-- Content -->
        <div id="content" >
            <!-- Profile -->
            <div id="profile">
             	<!-- About section -->
            	<div class="about">
                	<div class="photo-inner"><img src="images/photo.jpg" height="186" width="153" alt="photo"/></div>
                    <h1><?php echo $lang['HEADER']; ?></h1>
                    <h3><?php echo $lang['JOBTITLE']; ?></h3>
                    <p><?php echo $lang['INTRO1']; ?></p>
                </div>
                <!-- /About section -->

                <!-- Personal info section -->
            	<div class="personal-info about">
					<h4><?php echo $lang['SOLUTIONS']; ?></h4>
					<p><?php echo $lang['INTRO2']; ?></p>
					<h4><?php echo $lang['HOWCONTACT']; ?></h4>
					<p><?php echo $lang['INTRO3']; ?></p>
					<ul>
						<li><a href="https://es.linkedin.com/in/juancruzllorens" class="social-linkedin" target="_blank"></a></li>
						<li><a href="https://twitter.com/juancllorens" class="social-twitter" target="_blank"></a></li>
						<li><a href="https://mcp.microsoft.com/Anonymous//Transcript/Validate" target="_blank" title="Transcript ID (1175410) - Access Code (MCProfessional)"><span class="mcts-logo"></span></a></li>
					</ul>
				</div>
                <!-- /Personal info section -->
            </div>

            <!-- /Profile -->
            <!-- Menu -->
            <div class="menu">
            	<ul class="tabs">
                	<li><a href="#profile" class="tab-profile"><?php echo $lang['PROFILE']; ?></a></li>
                	<li><a href="#resume" class="tab-resume"><?php echo $lang['RESUME']; ?></a></li>
                	<li><a href="#portfolio" class="tab-portfolio"><?php echo $lang['PORTFOLIO']; ?></a></li>
                	<li><a href="#contact" class="tab-contact"><?php echo $lang['CONTACT']; ?></a></li>
                </ul>
            </div>
            <!-- /Menu -->

            <!-- Resume -->
            <div id="resume">
            	 <div class="timeline-section">
                    <!-- Timeline for Employment -->
                    <h3 class="main-heading"><span><?php echo $lang['EXPERIENCE']; ?></span></h3>
                    <ul class="timeline">
                        <li>
                            <div class="timelineUnit">
                                <h4><?php echo $lang['EXP7']; ?></h4>
                                <h5><?php echo $lang['EXPD7']; ?></h5>
                                <p><?php echo $lang['EXPDETAILS7']; ?></p>
                            </div>
                        </li>
                        <li>
                            <div class="timelineUnit">
                                <h4><?php echo $lang['EXP6']; ?></h4>
                                <h5><?php echo $lang['EXPD6']; ?></h5>
                                <p><?php echo $lang['EXPDETAILS6']; ?></p>
                            </div>
                        </li>
                        <li>
                            <div class="timelineUnit">
                                <h4><?php echo $lang['EXP5']; ?></h4>
                                <h5><?php echo $lang['EXPD5']; ?></h5>
                                <p><?php echo $lang['EXPDETAILS5']; ?></p>
                            </div>
                        </li>
                        <li>
                            <div class="timelineUnit">
                                <h4><?php echo $lang['EXP4']; ?></h4>
                                <h5><?php echo $lang['EXPD4']; ?></h5>
								<p><?php echo $lang['EXPDETAILS4']; ?></p>
                            </div>
                        </li>
						<li>
                            <div class="timelineUnit">
                                <h4><?php echo $lang['EXP3']; ?></h4>
                                <h5><?php echo $lang['EXPD3']; ?></h5>
                                <p><?php echo $lang['EXPDETAILS3']; ?></p>
                            </div>
                        </li>
                        <li>
                            <div class="timelineUnit">
                                <h4><?php echo $lang['EXP2']; ?></h4>
                                <h5><?php echo $lang['EXPD2']; ?></h5>
                                <p><?php echo $lang['EXPDETAILS2']; ?></p>
                            </div>
                        </li>
						<li>
                            <div class="timelineUnit">
                                <h4><?php echo $lang['EXP1']; ?></h4>
                                <h5><?php echo $lang['EXPD1']; ?></h5>
                                <p><?php echo $lang['EXPDETAILS1']; ?></p>
                            </div>
                        </li>
                        <div class="clear"></div>
                    </ul>
                    <!-- /Timeline for Employment -->

                    <!-- Timeline for Education -->
                    <h3 class="main-heading"><span><?php echo $lang['EDUCATION']; ?></span></h3>
                     <ul class="timeline">
                        <li>
                            <div class="timelineUnit">
                                <h4><?php echo $lang['EDU1']; ?><span class="timelineDate">1997 -</span></h4>
                                <h5><?php echo $lang['EDU1D']; ?></h5>
                                <p><?php echo $lang['EDU1DETAILS']; ?></p>
                            </div>
                        </li>
						<li>
                            <div class="timelineUnit">
                                <h4><?php echo $lang['EDU2']; ?><span class="timelineDate">1991</span></h4>
                                <h5><?php echo $lang['EDU2D']; ?></h5>
                                <p><?php echo $lang['EDU2DETAILS']; ?></p>
                            </div>
                        </li>
                        <li>
                            <div class="timelineUnit">
                                <h4><?php echo $lang['CERTIFICATES']; ?><span class="timelineDate">2011 - 2012</span></h4>
                                <h5><?php echo $lang['CER1']; ?></h5>
                                <p><?php echo $lang['CER1DETAILS']; ?></p>
                            </div>
                        </li>
						<li>
                            <div class="timelineUnit">
                                <h4><?php echo $lang['CURSES']; ?><span class="timelineDate">2009 - 2012</span></h4>
								<h5><?php echo $lang['C14']; ?></h5>
                                <p><?php echo $lang['C14DETAILS']; ?></p>
								<h5><?php echo $lang['C13']; ?></h5>
                                <p><?php echo $lang['C13DETAILS']; ?></p>
								<h5><?php echo $lang['C12']; ?></h5>
                                <p><?php echo $lang['C12DETAILS']; ?></p>
								<!--<h5><?php echo $lang['C11']; ?></h5>
                                <p><?php echo $lang['C11DETAILS']; ?></p>-->
								<h5><?php echo $lang['C10']; ?></h5>
                                <p><?php echo $lang['C10DETAILS']; ?></p>
								<h5><?php echo $lang['C9']; ?></h5>
                                <p><?php echo $lang['C9DETAILS']; ?></p>
								<!--<h5><?php echo $lang['C8']; ?></h5>
                                <p><?php echo $lang['C8DETAILS']; ?></p>
								<h5><?php echo $lang['C7']; ?></h5>
                                <p><?php echo $lang['C7DETAILS']; ?></p>
								<h5><?php echo $lang['C6']; ?></h5>
                                <p><?php echo $lang['C6DETAILS']; ?></p>
                                <h5><?php echo $lang['C5']; ?></h5>
                                <p><?php echo $lang['C5DETAILS']; ?></p>
								<h5><?php echo $lang['C4']; ?></h5>
                                <p><?php echo $lang['C4DETAILS']; ?></p>
								<h5><?php echo $lang['C3']; ?></h5>
                                <p><?php echo $lang['C3DETAILS']; ?></p>
								<h5><?php echo $lang['C2']; ?></h5>
                                <p><?php echo $lang['C2DETAILS']; ?></p>
								<h5><?php echo $lang['C1']; ?></h5>
                                <p><?php echo $lang['C1DETAILS']; ?></p>-->
							</div>
                        </li>
						<li>
                            <div class="timelineUnit">
                                <h4><?php echo $lang['LANGUAGES']; ?></h4>
								<p><?php echo $lang['L1']; ?>: <span><?php echo $lang['L1DETAILS']; ?></span></p>
                                <p><?php echo $lang['L2']; ?>: <span><?php echo $lang['L2DETAILS']; ?></span></p>
							</div>
                        </li>
                        <div class="clear"></div>
                    </ul>
                    <!-- /Timeline for Education  -->
                </div>

                <div class="skills-section">
                    <!-- Skills -->
                    <h3 class="main-heading"><span><?php echo $lang['SKILLS']; ?></span></h3>
                    <ul class="skills">
                        <li>
                            <h4><?php echo $lang['S1']; ?></h4>
                            <span class="rat7"></span>
                        </li>
                        <li>
                            <h4><?php echo $lang['S2']; ?></h4>
                            <span class="rat5"></span>
                        </li>
                        <li>
                            <h4><?php echo $lang['S3']; ?></h4>
                            <span class="rat7"></span>
                        </li>
                        <li>
                            <h4><?php echo $lang['S4']; ?></h4>
                            <span class="rat4"></span>
                        </li>
                        <li>
                            <h4><?php echo $lang['S5']; ?></h4>
                            <span class="rat5"></span>
                        </li>
						<li>
                            <h4><?php echo $lang['S6']; ?></h4>
                            <span class="rat7"></span>
                        </li>
						<li>
                            <h4><?php echo $lang['S7']; ?></h4>
                            <span class="rat6"></span>
                        </li>
						<!-- <li>
                            <h4><?php echo $lang['S8']; ?></h4>
                            <span class="rat4"></span>
                        </li> -->
                    </ul>

					<h3 class="main-heading"><span><?php echo $lang['TOOLS']; ?></span></h3>
                    <ul class="skills">
                        <li>
                            <h4><?php echo $lang['T1']; ?></h4>
                            <span class="rat6"></span>
                        </li>
                        <li>
                            <h4><?php echo $lang['T2']; ?></h4>
                            <span class="rat6"></span>
                        </li>
                        <li>
                            <h4><?php echo $lang['T3']; ?></h4>
                            <span class="rat5"></span>
                        </li>
                        <li>
                            <h4><?php echo $lang['T4']; ?></h4>
                            <span class="rat4"></span>
                        </li>
                        <li>
                            <h4><?php echo $lang['T5']; ?></h4>
                            <span class="rat6"></span>
                        </li>
                    </ul>

                    <h3 class="main-heading"><span><?php echo $lang['BESTPRACTICES']; ?></span></h3>
                    <ul class="skills">
                        <li>
                            <h4><?php echo $lang['BP1']; ?></h4>
                            <span class="rat7"></span>
                        </li>
                        <li>
                            <h4><?php echo $lang['BP2']; ?></h4>
                            <span class="rat7"></span>
                        </li>
                        <li>
                            <h4><?php echo $lang['BP3']; ?></h4>
                            <span class="rat7"></span>
                        </li>
						<li>
                            <h4><?php echo $lang['BP4']; ?></h4>
                            <span class="rat7"></span>
                        </li>
						<li>
                            <h4><?php echo $lang['BP5']; ?></h4>
                            <span class="rat7"></span>
                        </li>
						<li>
                            <h4><?php echo $lang['BP6']; ?></h4>
                            <span class="rat7"></span>
                        </li>
                    </ul>
                 <!-- /Skills -->
                 </div>
            </div>
            <!-- /Resume -->

            <!-- Portfolio -->
            <div id="portfolio">
                 <ul id="portfolio-filter">
                    <li><a href="#" class="current" data-filter="*"><?php echo $lang['ALL']; ?></a></li>
                    <li><a href="#" data-filter=".design"><?php echo $lang['DESIGN']; ?></a></li>
                    <li><a href="#" data-filter=".webdevelopment"><?php echo $lang['WEBDEVELOPMENT']; ?></a></li>
                    <!--<li><a href="#" data-filter=".print"><?php echo $lang['PRINT']; ?></a></li>-->
                    <li><a href="#" data-filter=".mobileapps"><?php echo $lang['MOBILE']; ?></a></li>
                </ul>
                <div class="extra-text"><?php echo $lang['PCOMMENT']; ?></div>
                <ul id="portfolio-list">
					<li class="design webdevelopment">
                        <a href="portfolio/14.jpg" rel="portfolio">
                            <img src="portfolio/14-thumb.jpg" alt="" >
                            <h2 class="title"><?php echo $lang['P14']; ?></h2>
                            <span class="categorie"><?php echo $lang['DESIGN']; ?> / <?php echo $lang['WEBDEVELOPMENT']; ?></span>
                        </a>
                	</li>
					<li class="design mobileapps">
                        <a href="portfolio/13.jpg" rel="portfolio">
                            <img src="portfolio/13-thumb.jpg" alt="" />
                            <h2 class="title"><?php echo $lang['P13']; ?></h2>
                            <span class="categorie"><?php echo $lang['DESIGN']; ?> / <?php echo $lang['MOBILE']; ?></span>
                        </a>
                	</li>
					<li class="webdevelopment">
                        <a href="portfolio/12.jpg" rel="portfolio">
                            <img src="portfolio/12-thumb.jpg" alt="" />
                            <h2 class="title"><?php echo $lang['P12']; ?></h2>
                            <span class="categorie"><?php echo $lang['WEBDEVELOPMENT']; ?></span>
                        </a>
                	</li>
					<li class="design webdevelopment">
                        <a href="portfolio/11.jpg" rel="portfolio">
                            <img src="portfolio/11-thumb.jpg" alt="" />
                            <h2 class="title"><?php echo $lang['P11']; ?></h2>
                            <span class="categorie"><?php echo $lang['DESIGN']; ?> / <?php echo $lang['WEBDEVELOPMENT']; ?></span>
                        </a>
                	</li>
					<li class="design webdevelopment">
                        <a href="portfolio/10.jpg" rel="portfolio">
                            <img src="portfolio/10-thumb.jpg" alt="" />
                            <h2 class="title"><?php echo $lang['P10']; ?></h2>
                            <span class="categorie"><?php echo $lang['DESIGN']; ?> / <?php echo $lang['WEBDEVELOPMENT']; ?></span>
                        </a>
                	</li>
					<li class="design webdevelopment">
                        <a href="portfolio/9.jpg" rel="portfolio">
                            <img src="portfolio/9-thumb.jpg" alt="" />
                            <h2 class="title"><?php echo $lang['P9']; ?></h2>
                            <span class="categorie"><?php echo $lang['DESIGN']; ?> / <?php echo $lang['WEBDEVELOPMENT']; ?></span>
                        </a>
                	</li>
					<li class="design webdevelopment">
                        <a href="portfolio/8.jpg" rel="portfolio">
                            <img src="portfolio/8-thumb.jpg" alt="" />
                            <h2 class="title"><?php echo $lang['P8']; ?></h2>
                            <span class="categorie"><?php echo $lang['DESIGN']; ?> / <?php echo $lang['WEBDEVELOPMENT']; ?></span>
                        </a>
                	</li>
					<li class="design">
                        <a href="portfolio/7.jpg" rel="portfolio">
                            <img src="portfolio/7-thumb.jpg" alt="" />
                            <h2 class="title"><?php echo $lang['P7']; ?></h2>
                            <span class="categorie"><?php echo $lang['DESIGN']; ?></span>
                        </a>
                	</li>
					<li class="design webdevelopment">
                        <a href="portfolio/6.jpg" rel="portfolio">
                            <img src="portfolio/6-thumb.jpg" alt="" />
                            <h2 class="title"><?php echo $lang['P6']; ?></h2>
                            <span class="categorie"><?php echo $lang['DESIGN']; ?> / <?php echo $lang['WEBDEVELOPMENT']; ?></span>
                        </a>
                	</li>
					<li class="webdevelopment">
                        <a href="portfolio/5.jpg" rel="portfolio">
                            <img src="portfolio/5-thumb.jpg" alt="" />
                            <h2 class="title"><?php echo $lang['P5']; ?></h2>
                            <span class="categorie"><?php echo $lang['WEBDEVELOPMENT']; ?></span>
                        </a>
                	</li>
					<li class="design">
                        <a href="portfolio/4.jpg" rel="portfolio">
                            <img src="portfolio/4-thumb.jpg" alt="" />
                            <h2 class="title"><?php echo $lang['P4']; ?></h2>
                            <span class="categorie"><?php echo $lang['DESIGN']; ?></span>
                        </a>
                	</li>
					<li class="webdevelopment">
                        <a href="portfolio/3.jpg" rel="portfolio">
                            <img src="portfolio/3-thumb.jpg" alt="" />
                            <h2 class="title"><?php echo $lang['P3']; ?></h2>
                            <span class="categorie"><?php echo $lang['WEBDEVELOPMENT']; ?></span>
                        </a>
                	</li>
                    <li class="webdevelopment">
                        <a href="portfolio/2a.jpg" rel="portfolio">
                            <img src="portfolio/2-thumb.jpg" alt="" >
                            <h2 class="title"><?php echo $lang['P2']; ?></h2>
                            <span class="categorie"><?php echo $lang['WEBDEVELOPMENT']; ?></span>
                        </a>
                	</li>
					<li class="design">
                        <a href="portfolio/1.jpg" rel="portfolio">
                            <img src="portfolio/1-thumb.jpg" alt="" />
                            <h2 class="title"><?php echo $lang['P1']; ?></h2>
                            <span class="categorie"><?php echo $lang['DESIGN']; ?></span>
                        </a>
                	</li>
                </ul>
            </div>
            <!-- /Portfolio -->

            <!-- Contact -->
            <div id="contact">
            	<!-- Contact Info -->
                <div class="contact-info">
                <h3 class="main-heading"><span><?php echo $lang['CINFO']; ?></span></h3>
            	<ul>
                    <li>Email: <?php echo $lang['EMAIL']; ?></li>
                    <br/>
					<li><?php echo $lang['VCARD']; ?><br /><a href="vcard-jcll.vcf" id="vcard" title="vCard Juan Cruz Llorens"></a></li>
                </ul>
                </div>
                <!-- /Contact Info -->

				<div id="form-wrapper">
                    <h3 class="main-heading"><span><?php echo $lang['FORMTITLE']; ?></span></h3>
                    <form method="post" action="email-validation-and-send.php" id="contactform">
						<div class="stage clear">
							<p><label for="name"><?php echo $lang['YOURNAME']; ?></label></p>
							<input type="text" name="name" id="name" value="" class="required" role="input" aria-required="true" />
						</div>
						<div class="stage clear">
							<p><label for="email"><?php echo $lang['YOUREMAIL']; ?></label></p>
							<input type="text" name="email" id="email" value="" class="required email" role="input" aria-required="true" />
						</div>
						<div class="stage clear">
							<p><label for="subject"><?php echo $lang['SUBJECT']; ?></label></p>
							<input type="text" name="subject" id="subject" value="" class="required" role="input" aria-required="true" />
						</div>
						<div class="stage clear">
							<p><label for="message"><?php echo $lang['YOURMESSAGE']; ?></label></p>
							<textarea rows="8" name="message" id="message" class="required" role="textbox" aria-required="true"></textarea>
						</div>
						<input type="submit" value="<?php echo $lang['SEND']; ?>" name="submit" id="submitButton" title="Click here to submit your message!" />
					</form>

					<div id="response"></div>

				</div>
                <!-- /Contact Form -->
            </div>
            <!-- /contact -->
        </div>
        <!-- /Content -->

        <!-- Footer -->
		<div class="footer">
        	<div class="copyright">&copy; Copyright 2009 - <script type="text/javascript">document.write(new Date().getFullYear())</script> | <?php echo $lang['COPYRIGHT']; ?></div>
			<span><a href="index.php?lang=es" class="es-flag" title="Espa&ntilde;ol"></a></span>
			<span><a href="index.php?lang=en" class="en-flag" title="English"></a></span>
        </div>
        <!-- /Footer -->
    </div>

		<!-- Hire Me Ribbon
		<div id="style-switcher">
			<a href="#contact" class="title"><?php echo $lang['AVAILABLE']; ?></a> <!--<?php echo $lang['BUSY']; ?>
        </div>-->
		<!-- /Hire Me Ribbon -->
       </div>
    </div>

<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.easytabs.min.js"></script>
<script type="text/javascript" src="js/respond.min.js"></script>
<script type="text/javascript" src="js/jquery.easytabs.min.js"></script>
<script type="text/javascript" src="js/jquery.adipoli.min.js"></script>
<script type="text/javascript" src="js/jquery.fancybox-1.3.4.pack.js"></script>
<script type="text/javascript" src="js/jquery.isotope.min.js"></script>
<script type="text/javascript" src="js/jquery.validate.min.js"></script>
<script type="text/javascript" src="js/jquery.form.js"></script>
<script type="text/javascript" src="js/custom.js"></script>

<!-- Google Analytics -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-11180928-8', 'juancruzllorens.info');
  ga('send', 'pageview');

</script>
<!-- /Google Analytics -->
</body>
</html>