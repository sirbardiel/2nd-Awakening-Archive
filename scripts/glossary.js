$(document).ready(function () {

	// Initialise local storage
	function initStorage() {
		if (!store.enabled) {
			// TODO Pop-up warning once somehow.  Cookies maybe?
			return;
		}
	}
	initStorage();
	
	
	$("nav").load("webParts/menu.html");
	$("footer").load("webParts/footer.html", function(){
		theme($('#themeSelect'), "Readable");
	});
	
	// initialisation
	var table;
	function loadTable(){
		if(!table){
			table = $('#glossary').DataTable( {
				responsive: true,
				"ajax": {
					"url": "data/glossary.json",
					"dataSrc": ""
				},
				columns: [
					{ 
						data: 'Term'
					},
					{ 
						data: 'Context',
						render: function ( data, type, term ) {
							var contextString = ">";
							$(term.Context).each(function(index, context){
								contextString = contextString + ", " + context;
							});
							return contextString.trim().replace(">, ","");
						} 
					},
					{ 
						data: 'Definition'
					}
				]
			});
		}else{
			table.data = data;
		}
	}

	loadTable();
	
});
