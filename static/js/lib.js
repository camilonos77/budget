  $(document).ready(function($) {

  		load();


        $("#btn_export_doc").click(function(event) {



        	$("#name_client_value").html($("#name_client").val());

        	$("#name_service_value").html($("#name_service").val());

        	$("#description_service_value").html($("#descripcion").val());

			
			$("#requirements_service_value").html($("#requirements").val());


			$("#warranty_service_value").html($("#time_warranty").val());

		
            $("#content_budget").wordExport("budget");
            return false;
        });
    });


  function load(){

  	for(var cont = 1;cont<30;cont++){

  		$("#time_warranty").append('<option value="'+cont+'"  >'+cont +' days'+'</option>')
  	}
  }