function contactForm() {
	window.alert("hey")
}

document.getElementById('sendMessageButton').addEventListener('click', function() {
    if (checkForm()) {
        if (checkEmail()) {
            sendMessage();
            cleanForm();
            showToast('Message envoyé avec succès !', "success");
        } else {
            showToast('Le champ email n\'est pas valide.', "error");
        }
    }
});

function checkForm () {
	const prenom = document.getElementById('prenom').value;
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!prenom || !nom || !email || !message) {
        showToast('Tous les champs sont obligatoires.', "error");
        return false;
    }
    return true;
}

function checkEmail () {
	const email = document.getElementById('email').value;
	return email.includes('@') && email.includes('.');
}

function sendMessage () {
	const prenom = document.getElementById('prenom').value;
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const userMessage = document.getElementById('message').value;

    const messagesTableBody = document.querySelector('#messages tbody');
    const row = messagesTableBody.insertRow(); 

    const prenomCell = row.insertCell(0);
    prenomCell.textContent = prenom;

    const nomCell = row.insertCell(1);
    nomCell.textContent = nom;

    const emailCell = row.insertCell(2);
    emailCell.textContent = email;

    const messageCell = row.insertCell(3);
    messageCell.textContent = userMessage;
}

function cleanForm () {
	document.getElementById('prenom').value = '';
    document.getElementById('nom').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

function showToast(message, type) {
	Toastify({
	  text: message,
	  duration: 3000,
	  close: true,
	  gravity: "top", 
	  position: "right", 
	  backgroundColor: type === "error" ? "#FF6A6A" : "#4caf50",
	}).showToast();
  }

  document.getElementById('markAsReadButton').addEventListener('click', function() {
    const messagesTbody = document.querySelector('#messages tbody');
    messagesTbody.innerHTML = '';
    showToast('Les messages sont supprimés', "success");
});
