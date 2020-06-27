	var myTable={};
	var ids=[];
	$(document).ready(function() {
		function onPageLoad(){
					myTable = $('#example').DataTable({
            ajax:{
            	"url":"api/users",
            	"dataSrc": "",
            	"deferRender": true
            	},
            	'searchable': false,
            columns: [
                    { data: 'id' },
                    { data: 'firstName' },
                    { data: 'lastName' },
            ],
            'columnDefs': [
            	{
                    'targets': 0,
                    'searchable': false,
                    'orderable': false,
                    'render': function (data, type, row, meta){
                    	//console.log(meta)
                    	//console.log(this)
                        return row.id;
                    }
                 }
            	,{
                'targets': 3,
                'searchable': false,
                'orderable': false,
                
                'className': 'dt-body-center select-checkbox',
                'render': function (data, type, row, meta){
                	//console.log(meta)
                    return '<input type="checkbox" class="checkbox" id="selected-'+row.id+'" onchange="myFunction('+row.id+','+meta.row+','+meta.col+')">';
                }
             }]
      });
	console.log(myTable);
	var currentVal='';
	$('#example tbody').on( 'click', '.checkbox', function () {
	
	
		
		
		if(this.checked==true)
		{
			console.log(this)
		console.log( myTable.row( this.closest('tr') ).data() );
		
		$(this).closest("td:nth-child(3)").text('sadfdfdfgr');
		
		console.log($(this).parent());
		console.log("box-val :> "+$(this).parents("tbody tr").find('td:nth-child(3)').text())
		currentVal=$(this).parents("tbody tr").find('td:nth-child(3)').text();
		//alert(currentVal)
		//$(this).parents("tbody tr").find('td:nth-child(3)').css("background-color", "yellow");
		$(this).parents("tr").find('td:nth-child(3)').html('<input type="text" class"for-edit" value="'+currentVal+'">');
		
		
		}else{
			
			//console.log("box-val :> "+$(this).parents("tbody tr").find('td:nth-child(3)').text());
			//var cellVal=$(this).parents("tbody tr").find('td:nth-child(3)').text();
			alert(currentVal)
			$(this).parents("tr").find('td:nth-child(3)').html(''+currentVal+'');
			
		}
		
		
		
		} );
	
	//TRY-FOR-SPECIFIC CELL EDIT
	/*$('#example').on( 'click', 'tbody td', function () {
	    myTable.cell( this ).edit();
	} );*/
	
	
	
}
	onPageLoad();
	
	
	var table = $('#example').DataTable();
	 

	
	
	 
});


var names=[];

$(document).ready(function() {
	
	  $('#multiselect').multiselect({	
		  	includeSelectAllOption : true,
	  		enableCaseInsensitiveFiltering:false,
	  		enableFiltering: true,
	  		filterPlaceholder: 'Search',
	  		buttonWidth:'200px',
	  		nonSelectedText: 'Select an Option'
		});
	  
	  $('#multiselect').on('change', function() {
			names=[];
		    var $selectedOptions = $(this).find('option:selected');
		    $selectedOptions.each(function(){
		    	names.push($(this).text());
		    	
		    });
		    console.log(typeof names)
		   
		});

		$('#delNames').on('click',function(){
			console.log(names)
			$.ajax({
				 async:false,
				  type: "GET",
				  url: "/test-pro-del",
				  traditional: true,
				  data:{names:names},
				  cache: true,
				  success: function(data){
					  asynchName();
					  $('#multiselect option:selected').each(function(){
						  if($(this).is(':selected')){
							  $(this).value("");
							  console.log(this)
						  }
						 
						
						  
					  });
					  $('#multiselect').multiselect('refresh');
					  $('#multiselect').multiselect('rebuild');
					  names=[];
					  
					  
					  toastr.options = {
							  "closeButton": true,
							  "debug": false,
							  "newestOnTop": false,
							  "progressBar": false,
							  "positionClass": "toast-bottom-center",
							  "preventDuplicates": false,
							  "onclick": null,
							  "showDuration": "300",
							  "hideDuration": "1000",
							  "timeOut": "5000",
							  "extendedTimeOut": "1000",
							  "showEasing": "swing",
							  "hideEasing": "linear",
							  "showMethod": "fadeIn",
							  "hideMethod": "fadeOut"
							}
					  toastr["success"]("Deleted Successfully.")
					  
					  
				  },
				  error:function(){
					  alert("error");
					  $('#multiselect option:selected').each(function(){
						  $(this).prop('selected',false);
					  });
					  $('#multiselect').multiselect('refresh');
					  $('#multiselect').multiselect('rebuild');
					  toastr["success"]("My name is Inigo Montoya. You killed my father. Prepare to die!")
					  
				  }
				});
		});
		
		$('#delete').on('click',function(){
			console.log(ids)
			$.ajax({
				  type: "GET",
				  url: "/test-pro-ids",
				  traditional: true,
				  data:{ids:ids},
				  cache: true,
				  success: function(data){
					  		/*console.log(data)*/
						 	var table = $('#example').DataTable();
					  		table.ajax.reload();
						$('#example').dataTable();
						 $('#multiselect').multiselect('refresh');
						  $('#multiselect').multiselect('rebuild');
						  toastr.options = {
								  "closeButton": true,
								  "debug": false,
								  "newestOnTop": false,
								  "progressBar": false,
								  "positionClass": "toast-bottom-center",
								  "preventDuplicates": false,
								  "onclick": null,
								  "showDuration": "300",
								  "hideDuration": "1000",
								  "timeOut": "5000",
								  "extendedTimeOut": "1000",
								  "showEasing": "swing",
								  "hideEasing": "linear",
								  "showMethod": "fadeIn",
								  "hideMethod": "fadeOut"
								}
						  toastr["success"]("Deleted Successfully.")
				  },
				  error:function(){
					  toastr["error"]("error")
					  
				  }
				});
		})
		
		

	});




function myFunction(id,r,c){
	
/*	$('#example').on( 'load', 'tbody td.edit', function () {
	    example.cells( this, [ 2] ).edit( {
	        blur: 'submit'
	    } );
	} );
	*/
	
/*	var o = $('#example').DataTable();
	console.log(o.cell)
	console.log("table")*/
	//myTable.cells( null, 3 ).edit();
	 
	 if($('#selected-'+id).is(":checked"))
	    {
		console.log($('#selected-'+id).is(":checked"))
		$('#selected-'+id).attr("checked","checked");
		ids.push(id.toString());
	    }
	    else
	    {
	    	console.log($('#selected-'+id).is(":checked"))
	    	$('#selected-'+id).prop("checked",false);
	 		$('#selected-'+id).removeAttr("checked","checked");
	 		
	 		for( var i = 0; i < ids.length; i++){ 
	 			if ( ids[i] == id) { 
	 				ids.splice(i, 1); }}
	    }
	 
	 console.log(ids)
}







