<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="Byliny">
        <meta name="author" content="Oliver Kurnava">
        <meta name="generator" content="Jekyll v4.1.1">
        <meta name="theme-color" content="#317EFB">
        <title>Byliny</title>
        <link rel="icon" type="image/x-icon" href="../../img/favicon.ico">
        <link rel="manifest" href="../../manifest.json">


        <!-- Custom styles for this template -->
        <link rel="stylesheet" href="../../css/bootstrap.min.css">
        <link rel="stylesheet" href="../style.css">
    </head>
    <body>
      <br>
        <center>
          <div id="telo">
            <div id="header">
              <h1 class="display-1" id="nadpis"></h1>
            </div>
            <br>
            <br>
            <br>
            <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title" id="popis.nadpis"></h4>
                    <p class="card-text" id="popis.text"></p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Výskyt</h4>
                    <p class="card-text" id="vyskyt"></p>
                  </div>
                </div>
              </div>
            </div>

            <br>
            <br>

            <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Zber</h4>
                    <br>
                    <p> Mesiace: <i id="mesiace"></i>
                    <br>
                    Časti: <i id="casti"></i>
                    </p>
                    <p class="card-text" id="zber.text"></p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Ľudové liečiteľstvo</h4>
                    <p class="card-text" id="liecitelstvo"></p>
                  </div>
                </div>
              </div>
            </div>

            <br>
            <br>

            <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title" id="recept.nazov"></h4>
                    <br>
                    <h6>Ingrediencie</h6>
                    <ul class="list-group" id="ingrediencie">
                    </ul>
                    <br>
                    <h6>Príprava</h6>
                    <p class="card-text" id="recept"></p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Zo starého herbára</h4>
                    <p class="card-text" id="fandly"></p>
                  </div>
                </div>
              </div>
            </div>

            <br>
            <br>

            <div class="row" >
              <div class="col-sm-6" id="upozornenieDiv">
                <div class="card">
                  <div class="card-body pozor">
                    <h4 class="card-title">UPOZORNENIE:</h4>
                    <p class="card-text" id="upozornenieText"></p>
                  </div>
                </div>
              </div>
              <br>
            </div>
          </div>
        </center>
        <br>
        <div class="form-check form-switch switch">
          <form action="bylina.php" method="post">
            <input type="checkbox" name="obrazky_check" id="done" value="1" onclick="submit();" class="form-check-input" role="switch" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault">Zobraziť obrázky</label>
          </form>
        </div>
        <br>
        
        <br>
        <br>
        <br>

        <script src="../../register.js"></script>
        <script src="../bylina.js"></script>
        <script src="../../js/disclaimer.js" defer></script>
        <?php
          if(isset($_POST['obrazky_check'])){
            include "obrazky.php";
          }
        ?>
    </body>
</html>
