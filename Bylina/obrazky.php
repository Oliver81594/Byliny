<?php
    $number_of_images = 20;

    function printImages(){
        global $matches, $number_of_images, $url;
        $html = file_get_contents( $url );
        preg_match_all( '|<img.*?src=[\'"](.*?)[\'"].*?>|i', $html, $matches );
        for($i=2; $i<=$number_of_images; $i=$i+2){
            if($i < count($matches[1])){
                $src = $matches[1][$i];
                $alt = strval($i/2); 
                echo "<img src=$src class='obrazok' alt=$alt>";
            }
            else{
                echo "No more images are available";
                break;
            }
        }
        return $number_of_images;
    }
    
    $cookie_name = "bylina";
    
    if(!isset($_COOKIE[$cookie_name])){
        echo "
        <center><div class=\"alert alert-warning\" role=\"alert\">
            Niečo sa pokazilo. Pre zobrazenie skontrolujte, či máte povolené cookies.
        </div></center>";
    }
    else{
        $search_query = $_COOKIE[$cookie_name];
        $search_query = urlencode( $search_query );

        $yahoo_url = "https://images.search.yahoo.com/search/images;_ylt=AwrJ7FU19gdiDHEA2llXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZANMT0NVSTAxOV8xBHNlYwNwaXZz?p=$search_query&fr2=piv-web&fr=yfp-t-s";
        $url = $yahoo_url;
        $html = file_get_contents( $url );
    
        preg_match_all( '|<img.*?src=[\'"](.*?)[\'"].*?>|i', $html, $matches );
        printImages();
    }
?>