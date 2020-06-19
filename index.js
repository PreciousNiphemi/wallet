
console.log('connected');

function validate(){

	let amount = document.getElementById("amount").value;
	let phoneNumber = document.getElementById("phoneNo").value;
	let network= document.getElementById("network").value;
	let errorMsg = document.getElementById("msg")
	let errorMsg2 = document.getElementById('errorMsg2')
	let networkError = document.getElementById('networkError')


	if(isNan(amount)|| amount <=0){
		errorMsg2.textContent = "please enter a valid amount"
		return false;
	}
	if(network.value= ""){
		networkError.textContent = "pick a network"
		return false;
	}

	if(isNan(phoneNumber)|| phoneNumber.length < 9){
		errorMsg.textContent = "invalid phone number"
		return false;
	}
	let url = "https://api.wallets.africa/bills/airtime/purchase"
	let data = {
		"Code": network,
		"Amount": amount,
		"PhoneNumber": phoneNumber,
		"SecretKey": "bp5hizq39j56"
	}

	makeCall(url, data)
	.then( response =>{
		renderData(response);
	});
}

function renderData(response){
	let success = getElementById(success);
	let failure = getElementById('failure')
	(response.ResponseCode === 200)? success.textContent = response.Message : failure.textContent = response.Message
}

async function makeCall(url,data){
	const response = await fetch(url,{
		method: 'POST',
		cache: 'no-cache',
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer uvjqzm5xl6bw "
		},
		redirect: 'follow',
		referrerPolicy: "no-referrer",
		body: JSON.stringify(data)
	})
	return response.json();

}
