<?php 
    include("header.php")
?>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
/>

<div class="contenedor d-flex justify-content-center my-5" > 
    <div class="row" id = "movies-container">
    </div>
</div>
<div class="container-fluid">
    <div class="row" id = "display-movies">
        <div class="container-fluid">
                <div class="row">
                    <div class="head">
                        <div class="head">
                            <img src="https://upload.wikimedia.org/wikipedia/en/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg" alt="">
                        </div>
                        <p>Grave of the Fireflies</p>
                        <p>火垂るの墓 (Hotaru no Haka)</p>
                        <div class="container icons">
                            <i class="bx bxs-heart"><span class="likes-num"></span></i>
                            <i class="bx bxs-comment" id="comments"></i>
                        </div>
                    </div>
                    <div class="container">
                        <h2>Sinopsis</h2>
                        <div class="container">
                                <p>
                                    synopsis: A devastating meditation on the human cost of war, this animated tale follows Seita (Tsutomu Tatsumi), a teenager charged with the care of his younger sister, Setsuko (Ayano Shiraishi), after an American firebombing during World War II separates the two children from their parents. Their tale of survival is as heartbreaking as it is true to life. The siblings rely completely on each other and struggle against all odds to stay together and stay alive.
                                </p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg" alt="" id="movie-cover">
                            </div>
                    </div>
                    <div class="container">
                    <div class="container">
                            <img src="https://upload.wikimedia.org/wikipedia/en/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg" alt="">
                            <ul>
                                <li>title: Grave of the Fireflies</li>
                                <li>original title: 火垂るの墓 (Hotaru no Haka)</li>
                                <li>rating: 9.8</li>
                                <li>duration: 1 hour 29 minutes</li>
                                <li id="genres"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>
    
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js"></script>
<script src="js/main.js"></script>
<?php 
    include("footer.php")
?>