exports.format = function(statusCode, data, messages){
	statusCode = typeof statusCode !== 'undefined' && typeof statusCode === "number" ? statusCode : 0;
	data = typeof data !== 'undefined' && typeof data === "object" ? data : {};
	messages = typeof messages !== 'undefined' && Array.isArray(messages) === true ? messages : [];

	// Define response message format
	var message = {
		status: statusCode,
		messages: []
	};

	if(JSON.stringify(data) != '{}')
		message.data = data;

	// Define first response message
	switch(statusCode) {
		case 200:
			message.messages.push('OK');
			break;
	    case 401:
	        message.messages.push('Unauthorized');
	        break;
	    case 404:
	    	message.messages.push('Not Found');
	    	break;
	    case 500:
	    	message.messages.push('Internal Server Error');
	    	break;
	    default:
	    	message.messages.push('Unknow status code');
	    	break;
	}

	// Merge messages parameter with message.messages array
	message.messages = message.messages.concat(messages);

	return message;
};