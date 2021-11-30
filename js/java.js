

		//alert("welcome our site ^^");
		/*alert("welcome our web ^^");
		alert("welcome  ^^");*/

	function btn_clk () 
	
		{
		
		var a = confirm ("هل تريد الحذف")
		if ( a == true )
			{
				
			window.location = "الملف الثانوي.html";
				
			}

		else

			{
				
			window.location = "list.html";
				
			}
		
		
		}
		
		
			function img_resize () 	{		
			
				var i = document.getElementById("img001")
		
				
			i.style.width = "700px";
			i.style.height = "400px";

				
			}
			
			function img_reset () {			

			var i = document.getElementById("img001")
			
				
			i.style.width = "400px";
			i.style.height = "200px";

				
			}
			
			
					function calc () {
							
						var x = document.forms["frm"]["n1"].value;
						var y = document.forms["frm"]["n2"].value;

						x = parseInt(x, 10);
						
						y = parseInt(y, 10);

						var z = x + y;
						 
						 document.forms["frm"]["res"].value=z;
						 
						}
		
			
	
	



