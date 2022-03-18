<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="Byliny">
        <meta name="author" content="Oliver Kurnava">
        <meta name="generator" content="Jekyll v4.1.1">
        <title>Byliny</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="icon" type="image/x-icon" href="../img/favicon.ico">


        <!-- Custom styles for this template -->
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
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
            <label class="form-check-label" for="flexSwitchCheckDefault">Zobrazenie obrázkov</label>
          </form>
        </div>
        <br>
        
        <br>
        <br>
        <br>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="../register.js"></script>
        <script src="bylina.js"></script>
        <?php
          if(isset($_POST['obrazky_check'])){
            include "obrazky.php";
          }
        ?>
    </body>
</html>
