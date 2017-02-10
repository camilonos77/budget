  $(document).ready(function($) {
        $("#btn_export_doc").click(function(event) {

        	$("#name_client_value").html($("#name_client").val());

            $("#content_budget").wordExport("budget");
            return false;
        });
    });