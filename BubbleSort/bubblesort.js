

function bubbleSort(arr) { 
	let i, j; 
	let longitud = arr.length; 
	let cambiado = false; 

	for (i = 0; i < longitud; i++) { 
		cambiado = false; 
		for (j = 0; j < longitud; j++) { 
			if (arr[j] > arr[j + 1]) { 
				var temporal = arr[j] 
				arr[j] = arr[j + 1]; 
				arr[j + 1] = temporal; 
				cambiado = true; 
			} 
		} 
		if (!cambiado) { 
			break; 
		} 
	} 
	console.log(arr) 
} 
var arr = [243, 45, 23, 356, 3, 5346, 35, 5]; 
bubbleSort(arr)