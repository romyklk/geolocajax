<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>App météo</title>
</head>

<body>
    <!DOCTYPE html>
    <html>

    <head>
        <title>Weather card</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>

    <body>

        <div class="container">
            <div class="weather-card">
                <div class="image-section">
                    <div class="layer"></div>
                    <div class="weather anim">
                        <img id="icon" src="" alt="">
                    </div>
                    <small class="type"></small>
                </div>
                <div class="info-section">
                    <div class="wave"></div>
                    <div class="layer-1"></div>
                    <div class="layer-2"></div>
                    <div class="layer-3"></div>
                    <div class="contents">
                        <h1><span class="temp"></span><span class="deg">&deg;</span></h1>
                        <h3></h3>
                        <div class="row justify-content-center">
                            <div class="col-md-8 text-center">
                                <div id="changer">Changer de ville</div>
                            </div>
                        </div>
                        <small>Max:<span id="max"></span> | Min:<span id="min"></span> | Humidité:<span id="hum"></span></small>

                    </div>

                </div>

            </div>
        </div>

        <script src="app.js"></script>
    </body>

    </html>