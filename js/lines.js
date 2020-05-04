//hard coded implementation of Leader-Line by anseki

//https://github.com/anseki/leader-line#color-value

//to be streamlined

// 1

document.getElementById("n01").onmouseenter = function() {mouseEnter01()};
document.getElementById("n01").onmouseleave = function() {mouseLeave01()};


var line01;
var line02;
var line03;
var line04;
var line05;

function mouseEnter01() {
     line01 = new LeaderLine(
        document.getElementById('n01'),
        document.getElementById('n02'),
            {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
            duration: 3000
          }});
        
       line02 = new LeaderLine(
        document.getElementById('n01'),
        document.getElementById('n03'),
        {color: 'rgb(39, 52, 126, 0.1)', endPlug: 'square', animOptions: {
        duration: 3000
      }});

      line03 = new LeaderLine(
        document.getElementById('n01'),
        document.getElementById('n04'),
            {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
            duration: 3000
          }});
          
     line04 = new LeaderLine(
        document.getElementById('n01'),
        document.getElementById('n05'),
            {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
            duration: 3000
            }});
              
    line05 = new LeaderLine(
        document.getElementById('n01'),
        document.getElementById('n06'),
            {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
            duration: 3000
            }});             

     }

    function mouseLeave01() {
        line01.remove();
        line02.hide();
        line03.hide();
        line04.hide();
        line05.hide();
    }

// 2    

    document.getElementById("n02").onmouseenter = function() {mouseEnter02()};
    document.getElementById("n02").onmouseleave = function() {mouseLeave02()}; 

    var line01;
    var line02;
    var line03;
    var line04;
    var line05; 

    function mouseEnter02() {
        line01 = new LeaderLine(
           document.getElementById('n02'),
           document.getElementById('n07'),
               {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
               duration: 3000
             }});
           
          line02 = new LeaderLine(
           document.getElementById('n02'),
           document.getElementById('n03'),
           {color: 'rgb(39, 52, 126, 0.1)', endPlug: 'square', animOptions: {
           duration: 3000
         }});
   
         line03 = new LeaderLine(
           document.getElementById('n02'),
           document.getElementById('n04'),
               {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
               duration: 3000
             }});
             
        line04 = new LeaderLine(
           document.getElementById('n02'),
           document.getElementById('n05'),
               {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
               duration: 3000
               }});
                 
       line05 = new LeaderLine(
           document.getElementById('n02'),
           document.getElementById('n06'),
               {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
               duration: 3000
               }});             
   
        }
   
       function mouseLeave02() {
           line01.hide();
           line02.hide();
           line03.hide();
           line04.hide();
           line05.hide();
       }
 
 // 3      
   
    document.getElementById("n03").onmouseenter = function() {mouseEnter03()};
    document.getElementById("n03").onmouseleave = function() {mouseLeave03()};

       var line01;
       var line02;
       var line03;
       var line04;
       var line05;
       
       function mouseEnter03() {
            line01 = new LeaderLine(
               document.getElementById('n03'),
               document.getElementById('n02'),
                   {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                   duration: 3000
                 }});
               
              line02 = new LeaderLine(
               document.getElementById('n03'),
               document.getElementById('n09'),
               {color: 'rgb(39, 52, 126, 0.1)', endPlug: 'square', animOptions: {
               duration: 3000
             }});
       
             line03 = new LeaderLine(
               document.getElementById('n03'),
               document.getElementById('n04'),
                   {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                   duration: 3000
                 }});
                 
            line04 = new LeaderLine(
               document.getElementById('n03'),
               document.getElementById('n05'),
                   {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                   duration: 3000
                   }});
                     
           line05 = new LeaderLine(
               document.getElementById('n03'),
               document.getElementById('n06'),
                   {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                   duration: 3000
                   }});             
       
            }
       
           function mouseLeave03() {
               line01.remove();
               line02.hide();
               line03.hide();
               line04.hide();
               line05.hide();
           }

// 4

    document.getElementById("n04").onmouseenter = function() {mouseEnter04()};
    document.getElementById("n04").onmouseleave = function() {mouseLeave04()};
           

var line01;
var line02;
var line03;
var line04;
var line05;

function mouseEnter04() {
     line01 = new LeaderLine(
        document.getElementById('n04'),
        document.getElementById('n02'),
            {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
            duration: 3000
          }});
        
       line02 = new LeaderLine(
        document.getElementById('n04'),
        document.getElementById('n03'),
        {color: 'rgb(39, 52, 126, 0.1)', endPlug: 'square', animOptions: {
        duration: 3000
      }});

      line03 = new LeaderLine(
        document.getElementById('n04'),
        document.getElementById('n20'),
            {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
            duration: 3000
          }});
          
     line04 = new LeaderLine(
        document.getElementById('n04'),
        document.getElementById('n05'),
            {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
            duration: 3000
            }});
              
    line05 = new LeaderLine(
        document.getElementById('n04'),
        document.getElementById('n06'),
            {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
            duration: 3000
            }});             

     }

    function mouseLeave04() {
        line01.remove();
        line02.hide();
        line03.hide();
        line04.hide();
        line05.hide();
    }


// 5

document.getElementById("n05").onmouseenter = function() {mouseEnter05()};
document.getElementById("n05").onmouseleave = function() {mouseLeave05()};


    var line01;
    var line02;
    var line03;
    var line04;
    var line05;
    
    function mouseEnter05() {
         line01 = new LeaderLine(
            document.getElementById('n05'),
            document.getElementById('n02'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
            
           line02 = new LeaderLine(
            document.getElementById('n05'),
            document.getElementById('n03'),
            {color: 'rgb(39, 52, 126, 0.1)', endPlug: 'square', animOptions: {
            duration: 3000
          }});
    
          line03 = new LeaderLine(
            document.getElementById('n05'),
            document.getElementById('n04'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
              
         line04 = new LeaderLine(
            document.getElementById('n05'),
            document.getElementById('n01'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});
                  
        line05 = new LeaderLine(
            document.getElementById('n05'),
            document.getElementById('n06'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});             
    
         }
    
        function mouseLeave05() {
            line01.remove();
            line02.hide();
            line03.hide();
            line04.hide();
            line05.hide();
        }
    
// 6

document.getElementById("n06").onmouseenter = function() {mouseEnter06()};
document.getElementById("n06").onmouseleave = function() {mouseLeave06()};


    var line01;
    var line02;
    var line03;
    var line04;
    var line05;
    
    function mouseEnter06() {
         line01 = new LeaderLine(
            document.getElementById('n06'),
            document.getElementById('n02'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
            
           line02 = new LeaderLine(
            document.getElementById('n06'),
            document.getElementById('n03'),
            {color: 'rgb(39, 52, 126, 0.1)', endPlug: 'square', animOptions: {
            duration: 3000
          }});
    
          line03 = new LeaderLine(
            document.getElementById('n06'),
            document.getElementById('n04'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
              
         line04 = new LeaderLine(
            document.getElementById('n06'),
            document.getElementById('n01'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});
                  
        line05 = new LeaderLine(
            document.getElementById('n06'),
            document.getElementById('n07'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});             
    
         }
    
        function mouseLeave06() {
            line01.remove();
            line02.hide();
            line03.hide();
            line04.hide();
            line05.hide();
        }

// 7

document.getElementById("n07").onmouseenter = function() {mouseEnter07()};
document.getElementById("n07").onmouseleave = function() {mouseLeave07()};


    var line01;
    var line02;
    var line03;
    var line04;
    var line05;
    
    function mouseEnter07() {
         line01 = new LeaderLine(
            document.getElementById('n07'),
            document.getElementById('n02'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
            
           line02 = new LeaderLine(
            document.getElementById('n07'),
            document.getElementById('n03'),
            {color: 'rgb(39, 52, 126, 0.1)', endPlug: 'square', animOptions: {
            duration: 3000
          }});
    
          line03 = new LeaderLine(
            document.getElementById('n07'),
            document.getElementById('n04'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
              
         line04 = new LeaderLine(
            document.getElementById('n07'),
            document.getElementById('n01'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});
                  
        line05 = new LeaderLine(
            document.getElementById('n07'),
            document.getElementById('n08'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});             
    
         }
    
        function mouseLeave07() {
            line01.remove();
            line02.hide();
            line03.hide();
            line04.hide();
            line05.hide();
        }

// 8

document.getElementById("n08").onmouseenter = function() {mouseEnter08()};
document.getElementById("n08").onmouseleave = function() {mouseLeave08()};


    var line01;
    var line02;
    var line03;
    var line04;
    var line05;
    
    function mouseEnter08() {
         line01 = new LeaderLine(
            document.getElementById('n08'),
            document.getElementById('n02'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
            
           line02 = new LeaderLine(
            document.getElementById('n08'),
            document.getElementById('n03'),
            {color: 'rgb(39, 52, 126, 0.1)', endPlug: 'square', animOptions: {
            duration: 3000
          }});
    
          line03 = new LeaderLine(
            document.getElementById('n08'),
            document.getElementById('n04'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
              
         line04 = new LeaderLine(
            document.getElementById('n08'),
            document.getElementById('n01'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});
                  
        line05 = new LeaderLine(
            document.getElementById('n08'),
            document.getElementById('n06'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});             
    
         }
    
        function mouseLeave08() {
            line01.remove();
            line02.hide();
            line03.hide();
            line04.hide();
            line05.hide();
        }

// 9

document.getElementById("n09").onmouseenter = function() {mouseEnter09()};
document.getElementById("n09").onmouseleave = function() {mouseLeave09()};


    var line01;
    var line02;
    var line03;
    var line04;
    var line05;
    
    function mouseEnter09() {
         line01 = new LeaderLine(
            document.getElementById('n09'),
            document.getElementById('n02'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
            
           line02 = new LeaderLine(
            document.getElementById('n09'),
            document.getElementById('n03'),
            {color: 'rgb(39, 52, 126, 0.1)', endPlug: 'square', animOptions: {
            duration: 3000
          }});
    
          line03 = new LeaderLine(
            document.getElementById('n09'),
            document.getElementById('n04'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
              
         line04 = new LeaderLine(
            document.getElementById('n09'),
            document.getElementById('n01'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});
                  
        line05 = new LeaderLine(
            document.getElementById('n09'),
            document.getElementById('n06'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});             
    
         }
    
        function mouseLeave09() {
            line01.remove();
            line02.hide();
            line03.hide();
            line04.hide();
            line05.hide();
        }


// 10

document.getElementById("n10").onmouseenter = function() {mouseEnter10()};
document.getElementById("n10").onmouseleave = function() {mouseLeave10()};


    var line01;
    var line02;
    var line03;
    var line04;
    var line05;
    
    function mouseEnter10() {
         line01 = new LeaderLine(
            document.getElementById('n10'),
            document.getElementById('n02'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
            
           line02 = new LeaderLine(
            document.getElementById('n10'),
            document.getElementById('n03'),
            {color: 'rgb(39, 52, 126, 0.1)', endPlug: 'square', animOptions: {
            duration: 3000
          }});
    
          line03 = new LeaderLine(
            document.getElementById('n10'),
            document.getElementById('n04'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
              
         line04 = new LeaderLine(
            document.getElementById('n10'),
            document.getElementById('n01'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});
                  
        line05 = new LeaderLine(
            document.getElementById('n10'),
            document.getElementById('n06'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});             
    
         }
    
        function mouseLeave10() {
            line01.remove();
            line02.hide();
            line03.hide();
            line04.hide();
            line05.hide();
        }

// 11

document.getElementById("n11").onmouseenter = function() {mouseEnter11()};
document.getElementById("n11").onmouseleave = function() {mouseLeave11()};

var line01;
var line02;
var line03;
var line04;
var line05;

function mouseEnter11() {
     line01 = new LeaderLine(
        document.getElementById('n11'),
        document.getElementById('n02'),
            {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
            duration: 3000
          }});
        
       line02 = new LeaderLine(
        document.getElementById('n11'),
        document.getElementById('n03'),
        {color: 'rgb(39, 52, 126, 0.1)', endPlug: 'square', animOptions: {
        duration: 3000
      }});

      line03 = new LeaderLine(
        document.getElementById('n11'),
        document.getElementById('n04'),
            {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
            duration: 3000
          }});
          
     line04 = new LeaderLine(
        document.getElementById('n11'),
        document.getElementById('n05'),
            {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
            duration: 3000
            }});
              
    line05 = new LeaderLine(
        document.getElementById('n11'),
        document.getElementById('n06'),
            {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
            duration: 3000
            }});             

     }

    function mouseLeave11() {
        line01.remove();
        line02.hide();
        line03.hide();
        line04.hide();
        line05.hide();
    }

// 12    

    document.getElementById("n12").onmouseenter = function() {mouseEnter12()};
    document.getElementById("n12").onmouseleave = function() {mouseLeave12()}; 

    var line01;
    var line02;
    var line03;
    var line04;
    var line05; 

    function mouseEnter12() {
        line01 = new LeaderLine(
           document.getElementById('n12'),
           document.getElementById('n07'),
               {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
               duration: 3000
             }});
           
          line02 = new LeaderLine(
           document.getElementById('n12'),
           document.getElementById('n03'),
           {color: 'rgb(39, 52, 126, 0.1)', endPlug: 'square', animOptions: {
           duration: 3000
         }});
   
         line03 = new LeaderLine(
           document.getElementById('n12'),
           document.getElementById('n04'),
               {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
               duration: 3000
             }});
             
        line04 = new LeaderLine(
           document.getElementById('n12'),
           document.getElementById('n05'),
               {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
               duration: 3000
               }});
                 
       line05 = new LeaderLine(
           document.getElementById('n12'),
           document.getElementById('n06'),
               {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
               duration: 3000
               }});             
   
        }
   
       function mouseLeave12() {
           line01.hide();
           line02.hide();
           line03.hide();
           line04.hide();
           line05.hide();
       }
 
 // 13      
   
    document.getElementById("n13").onmouseenter = function() {mouseEnter13()};
    document.getElementById("n13").onmouseleave = function() {mouseLeave13()};

       var line01;
       var line02;
       var line03;
       var line04;
       var line05;
       
       function mouseEnter13() {
            line01 = new LeaderLine(
               document.getElementById('n13'),
               document.getElementById('n12'),
                   {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                   duration: 3000
                 }});
               
              line02 = new LeaderLine(
               document.getElementById('n13'),
               document.getElementById('n19'),
               {color: 'rgb(39, 52, 126, 0.1)', endPlug: 'square', animOptions: {
               duration: 3000
             }});
       
             line03 = new LeaderLine(
               document.getElementById('n13'),
               document.getElementById('n04'),
                   {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                   duration: 3000
                 }});
                 
            line04 = new LeaderLine(
               document.getElementById('n13'),
               document.getElementById('n05'),
                   {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                   duration: 3000
                   }});
                     
           line05 = new LeaderLine(
               document.getElementById('n13'),
               document.getElementById('n06'),
                   {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                   duration: 3000
                   }});             
       
            }
       
           function mouseLeave13() {
               line01.remove();
               line02.hide();
               line03.hide();
               line04.hide();
               line05.hide();
           }

// 14

    document.getElementById("n14").onmouseenter = function() {mouseEnter14()};
    document.getElementById("n14").onmouseleave = function() {mouseLeave14()};
           

var line01;
var line02;
var line03;
var line04;
var line05;

function mouseEnter14() {
     line01 = new LeaderLine(
        document.getElementById('n14'),
        document.getElementById('n02'),
            {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
            duration: 3000
          }});
        
       line02 = new LeaderLine(
        document.getElementById('n14'),
        document.getElementById('n03'),
        {color: 'rgb(39, 52, 126, 0.1)', endPlug: 'square', animOptions: {
        duration: 3000
      }});

      line03 = new LeaderLine(
        document.getElementById('n14'),
        document.getElementById('n20'),
            {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
            duration: 3000
          }});
          
     line04 = new LeaderLine(
        document.getElementById('n14'),
        document.getElementById('n05'),
            {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
            duration: 3000
            }});
              
    line05 = new LeaderLine(
        document.getElementById('n14'),
        document.getElementById('n06'),
            {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
            duration: 3000
            }});             

     }

    function mouseLeave14() {
        line01.remove();
        line02.hide();
        line03.hide();
        line04.hide();
        line05.hide();
    }


// 5

document.getElementById("n15").onmouseenter = function() {mouseEnter15()};
document.getElementById("n15").onmouseleave = function() {mouseLeave15()};


    var line01;
    var line02;
    var line03;
    var line04;
    var line05;
    
    function mouseEnter15() {
         line01 = new LeaderLine(
            document.getElementById('n15'),
            document.getElementById('n02'),
                {color: 'rgb(39, 52, 126, 0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
            
           line02 = new LeaderLine(
            document.getElementById('n15'),
            document.getElementById('n03'),
            {color: 'rgb(39, 52, 126, 0.1)', endPlug: 'square', animOptions: {
            duration: 3000
          }});
    
          line03 = new LeaderLine(
            document.getElementById('n15'),
            document.getElementById('n04'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
              
         line04 = new LeaderLine(
            document.getElementById('n15'),
            document.getElementById('n01'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});
                  
        line05 = new LeaderLine(
            document.getElementById('n15'),
            document.getElementById('n06'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});             
    
         }
    
        function mouseLeave15() {
            line01.remove();
            line02.hide();
            line03.hide();
            line04.hide();
            line05.hide();
        }
    
// 16

document.getElementById("n16").onmouseenter = function() {mouseEnter16()};
document.getElementById("n16").onmouseleave = function() {mouseLeave16()};


    var line01;
    var line02;
    var line03;
    var line04;
    var line05;
    
    function mouseEnter16() {
         line01 = new LeaderLine(
            document.getElementById('n16'),
            document.getElementById('n02'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
            
           line02 = new LeaderLine(
            document.getElementById('n16'),
            document.getElementById('n03'),
            {color: 'rgb(39, 52, 126,0.1)', endPlug: 'square', animOptions: {
            duration: 3000
          }});
    
          line03 = new LeaderLine(
            document.getElementById('n16'),
            document.getElementById('n04'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
              
         line04 = new LeaderLine(
            document.getElementById('n16'),
            document.getElementById('n01'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});
                  
        line05 = new LeaderLine(
            document.getElementById('n16'),
            document.getElementById('n07'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});             
    
         }
    
        function mouseLeave16() {
            line01.remove();
            line02.hide();
            line03.hide();
            line04.hide();
            line05.hide();
        }

// 7

document.getElementById("n17").onmouseenter = function() {mouseEnter17()};
document.getElementById("n17").onmouseleave = function() {mouseLeave17()};


    var line01;
    var line02;
    var line03;
    var line04;
    var line05;
    
    function mouseEnter17() {
         line01 = new LeaderLine(
            document.getElementById('n17'),
            document.getElementById('n02'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
            
           line02 = new LeaderLine(
            document.getElementById('n17'),
            document.getElementById('n03'),
            {color: 'rgb(39, 52, 126,0.1)', endPlug: 'square', animOptions: {
            duration: 3000
          }});
    
          line03 = new LeaderLine(
            document.getElementById('n17'),
            document.getElementById('n04'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
              
         line04 = new LeaderLine(
            document.getElementById('n17'),
            document.getElementById('n01'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});
                  
        line05 = new LeaderLine(
            document.getElementById('n17'),
            document.getElementById('n08'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});             
    
         }
    
        function mouseLeave17() {
            line01.remove();
            line02.hide();
            line03.hide();
            line04.hide();
            line05.hide();
        }

// 8

document.getElementById("n18").onmouseenter = function() {mouseEnter18()};
document.getElementById("n18").onmouseleave = function() {mouseLeave18()};


    var line01;
    var line02;
    var line03;
    var line04;
    var line05;
    
    function mouseEnter18() {
         line01 = new LeaderLine(
            document.getElementById('n18'),
            document.getElementById('n02'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
            
           line02 = new LeaderLine(
            document.getElementById('n18'),
            document.getElementById('n03'),
            {color: 'rgb(39, 52, 126,0.1)', endPlug: 'square', animOptions: {
            duration: 3000
          }});
    
          line03 = new LeaderLine(
            document.getElementById('n18'),
            document.getElementById('n04'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
              
         line04 = new LeaderLine(
            document.getElementById('n18'),
            document.getElementById('n01'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});
                  
        line05 = new LeaderLine(
            document.getElementById('n18'),
            document.getElementById('n06'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});             
    
         }
    
        function mouseLeave18() {
            line01.remove();
            line02.hide();
            line03.hide();
            line04.hide();
            line05.hide();
        }

// 19

document.getElementById("n19").onmouseenter = function() {mouseEnter19()};
document.getElementById("n19").onmouseleave = function() {mouseLeave19()};


    var line01;
    var line02;
    var line03;
    var line04;
    var line05;
    
    function mouseEnter19() {
         line01 = new LeaderLine(
            document.getElementById('n19'),
            document.getElementById('n02'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
            
           line02 = new LeaderLine(
            document.getElementById('n19'),
            document.getElementById('n03'),
            {color: 'rgb(39, 52, 126,0.1)', endPlug: 'square', animOptions: {
            duration: 3000
          }});
    
          line03 = new LeaderLine(
            document.getElementById('n19'),
            document.getElementById('n04'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
              
         line04 = new LeaderLine(
            document.getElementById('n19'),
            document.getElementById('n01'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});
                  
        line05 = new LeaderLine(
            document.getElementById('n19'),
            document.getElementById('n06'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});             
    
         }
    
        function mouseLeave19() {
            line01.remove();
            line02.hide();
            line03.hide();
            line04.hide();
            line05.hide();
        }


// 20

document.getElementById("n20").onmouseenter = function() {mouseEnter20()};
document.getElementById("n20").onmouseleave = function() {mouseLeave20()};


    var line01;
    var line02;
    var line03;
    var line04;
    var line05;
    
    function mouseEnter20() {
         line01 = new LeaderLine(
            document.getElementById('n20'),
            document.getElementById('n02'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
            
           line02 = new LeaderLine(
            document.getElementById('n20'),
            document.getElementById('n03'),
            {color: 'rgb(39, 52, 126,0.1)', endPlug: 'square', animOptions: {
            duration: 3000
          }});
    
          line03 = new LeaderLine(
            document.getElementById('n20'),
            document.getElementById('n04'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
              
         line04 = new LeaderLine(
            document.getElementById('n20'),
            document.getElementById('n01'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});
                  
        line05 = new LeaderLine(
            document.getElementById('n20'),
            document.getElementById('n06'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});             
    
         }
    
        function mouseLeave20() {
            line01.remove();
            line02.hide();
            line03.hide();
            line04.hide();
            line05.hide();
        }


// 20

document.getElementById("n21").onmouseenter = function() {mouseEnter21()};
document.getElementById("n21").onmouseleave = function() {mouseLeave21()};


    var line01;
    var line02;
    var line03;
    var line04;
    var line05;
    
    function mouseEnter21() {
         line01 = new LeaderLine(
            document.getElementById('n21'),
            document.getElementById('n02'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
            
           line02 = new LeaderLine(
            document.getElementById('n21'),
            document.getElementById('n03'),
            {color: 'rgb(39, 52, 126,0.1)', endPlug: 'square', animOptions: {
            duration: 3000
          }});
    
          line03 = new LeaderLine(
            document.getElementById('n21'),
            document.getElementById('n04'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
              }});
              
         line04 = new LeaderLine(
            document.getElementById('n21'),
            document.getElementById('n01'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});
                  
        line05 = new LeaderLine(
            document.getElementById('n21'),
            document.getElementById('n06'),
                {color: 'rgb(39, 52, 126,0.1)' , endPlug: 'square', animOptions: {
                duration: 3000
                }});             
    
         }
    
        function mouseLeave21() {
            line01.remove();
            line02.hide();
            line03.hide();
            line04.hide();
            line05.hide();
        }

    
    

    
   

    

    




    