<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta name="viewport" content="width=640, user-scalable=no"/>   

<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />

<title>Smart Card Finder</title>

<link rel="stylesheet" type="text/css" href="css/estilos.css"/>

<script src="js/libs/jquery-1.8.3.min.js"></script>
<script src="js/libs/jquery.transit.min.js"></script>

<script src="js/com/Main.js"></script>
<script src="js/com/home/Home.js"></script>
<script src="js/com/settings/Settings.js"></script>
<script src="js/com/tutorial/Tutorial.js"></script>
<script src="js/com/truco/Truco.js"></script>

</head>
<body>
  <div id="main">
    <img id="main_logo" src="img/logo.png"/>
    <div id="main_back_btn">BACK</div>
    
    <!-- HOME -->
    <div id="home">
      <div id="home_perform_btn" class="home_boton">PERFORM</div>  
      <div id="home_settings_btn" class="home_boton">SETTINGS</div>  
      <div id="home_tutorial_btn" class="home_boton">TUTORIAL</div>  
    </div>

    <!-- SETTINGS --> 
    <div id="settings">
      <div id="settings_placa">
        <div id="settings_titulo">SETTINGS</div>
        Mode: 
        <select class="settings_select">
          <option>Perform</option>
          <option>Learning</option>
          <option>Helpers</option>
        </select>        

        Time: 
        <select class="settings_select">
          <option>15 sec</option>
          <option>20 sec</option>
          <option>30 sec</option>
        </select>

        Sound: 
        <select class="settings_select">
          <option>None</option>
          <option>Magic</option>
          <option>Space</option>
        </select>

      </div>
    </div>

    <!-- TUTORIAL -->
    <div id="tutorial">
      <div id="tutorial_placa">
        <div id="tutorial_titulo">TUTORIAL</div>
        <div id="tutorial_texto">
          Lorem ipsum si dolor sit amet sarasa hola como estas. Lorem ipsum si dolor sit amet sarasa hola como estas.Lorem ipsum si dolor sit amet sarasa hola como estas. Lorem ipsum si dolor sit amet sarasa hola como estas.Lorem ipsum si dolor sit amet sarasa hola como estas. Lorem ipsum si dolor sit amet sarasa hola como estas.Lorem ipsum si dolor sit amet sarasa hola como estas. Lorem ipsum si dolor sit amet sarasa hola como estas.
        </div>
      </div>
    </div>

    <!-- TRUCO-->
    <div id="truco">
      <div class="truco_btn">
        <div class="truco_btn_learning">
          <div class="truco_btn_learning_num">A</div>
        </div>
        <div class="truco_btn_helper"></div>
      </div>

      <div class="truco_btn">
        <div class="truco_btn_learning">
          <div class="truco_btn_learning_num">2</div>
        </div>
        <div class="truco_btn_helper"></div>
      </div>

      <div class="truco_btn">
        <div class="truco_btn_learning">
          <div class="truco_btn_learning_num">3</div>
        </div>
      </div>

      <div class="truco_btn">
        <div class="truco_btn_learning">
          <div class="truco_btn_learning_num">4</div>
        </div>
        <div class="truco_btn_helper"></div>
      </div>

      <div class="truco_btn">
        <div class="truco_btn_learning">
          <div class="truco_btn_learning_num">5</div>
        </div>
        <div class="truco_btn_helper"></div>
      </div>

      <div class="truco_btn">
        <div class="truco_btn_learning">
          <div class="truco_btn_learning_num">6</div>
        </div>
      </div>

      <div class="truco_btn">
        <div class="truco_btn_learning">
          <div class="truco_btn_learning_num">7</div>
        </div>
        <div class="truco_btn_helper"></div>
      </div>

      <div class="truco_btn">
        <div class="truco_btn_learning">
          <div class="truco_btn_learning_num">8</div>
        </div>
        <div class="truco_btn_helper"></div>
      </div>

      <div class="truco_btn">
        <div class="truco_btn_learning">
          <div class="truco_btn_learning_num">9</div>
        </div>
      </div>

      <div class="truco_btn">
        <div class="truco_btn_learning">
          <div class="truco_btn_learning_num">10</div>
        </div>
        <div class="truco_btn_helper"></div>
      </div>

      <div class="truco_btn">
        <div class="truco_btn_learning">
          <div class="truco_btn_learning_num">J</div>
        </div>
        <div class="truco_btn_helper"></div>
      </div>

      <div class="truco_btn">
        <div class="truco_btn_learning">
          <div class="truco_btn_learning_num">Q</div>
        </div>
      </div>

      <div class="truco_btn">
        <div class="truco_btn_learning">
          <div class="truco_btn_learning_num">K</div>
        </div>
      </div>

      <div id="truco_btn_reset">
        <div class="truco_btn_learning">
          <div class="truco_btn_learning_num">RESET</div>
        </div>
      </div>
 
    </div>

  </div>

  <script>
    var main;  

    $(document).ready(function(){
      main = new Main();
    })

  </script>
</body>
</html>