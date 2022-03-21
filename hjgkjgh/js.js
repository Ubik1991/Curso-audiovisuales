var planos =[

    "https://www.ecartelera.com/images/sets/41500/41558.jpg",
      
    "http://i.imgur.com/fPlbdm7.jpg",
          "https://youdrankthewholefairy.files.wordpress.com/2014/12/star-wars-luke-skywalker.jpg",
      
    "https://cnnespanol.cnn.com/wp-content/uploads/2016/06/tatooine-810x360.jpg?quality=100&strip=info",
      
    "https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/33385.jpg",
        "https://2.bp.blogspot.com/-1sBHWGMjCns/V2_684p97JI/AAAAAAAATuU/TY3cFJU0_TwADutb49oFtqVjxAUh_e7qQCLcB/s1600/Captura%2Bde%2Bpantalla%2B2016-06-26%2Ba%2Bla%2528s%2529%2B17.47.04.png",
      
    "https://www.cinepremiere.com.mx/wp-content/uploads/2020/03/Kylo-Ren-Darth-Vader-Star-Wars-1024x576.jpg",
           
    "https://crehana-blog.imgix.net/media/filer_public/f8/da/f8da02a5-e5ff-41eb-958a-a8c181568e18/star_wars_-_angulo_picado.png?auto=format&q=50"
    
    ];
    
    var texto="";
    
    for(let i=0;i<planos.length;i++){
        texto += " <li> <img src ='" + planos[jose] + " '></li>'";
    } 
    document.getElementById("listado").innerHTML = texto;

    