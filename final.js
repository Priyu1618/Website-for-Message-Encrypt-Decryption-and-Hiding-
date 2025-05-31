// Define the correct private key
const validPrivateKey = "1234567"; // Replace with your actual private key

document.getElementById("imageInput").addEventListener("change", function (event) {
    const imageDisplay = document.getElementById("imageDisplay");
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imageDisplay.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Encrypt the message
function encryptMessage(message) {
    let encrypted = "";

    for (let i = 0; i < message.length; i++) {
        const ch = message[i];
        let charValue;

        if (ch >= 'A' && ch <= 'Z') {
            charValue = ch.charCodeAt(0) - 'A'.charCodeAt(0); // Convert A-Z to 0-25
        } else if (ch >= 'a' && ch <= 'z') {
            charValue = ch.charCodeAt(0); // Use ASCII value for lowercase letters
        } else {
            charValue = ch.charCodeAt(0); // Use ASCII value for other characters
        }

        let encryptedValue;
        if (i % 2 === 0) { // Even index
            encryptedValue = (charValue * 2) + 26;
        } else { // Odd index
            encryptedValue = (charValue * 3) + 26;
        }

        encrypted += String.fromCharCode(encryptedValue);
    }
    return encrypted;
}

// Decrypt the message
function decryptMessage(encryptedMessage, privateKey) {
    // Check if the private key is correct
    if (privateKey !== validPrivateKey) {
        alert("Wrong private key! The secret message cannot be decrypted.");
        return null; // Return null if the key is incorrect
    }

    let decrypted = "";

    for (let i = 0; i < encryptedMessage.length; i++) {
        const ch = encryptedMessage[i];
        const encryptedValue = ch.charCodeAt(0);
        let charValue;

        if (i % 2 === 0) { // Even index
            charValue = (encryptedValue - 26) / 2;
        } else { // Odd index
            charValue = (encryptedValue - 26) / 3;
        }

        if (charValue >= 0 && charValue <= 25) {
            decrypted += String.fromCharCode('A'.charCodeAt(0) + charValue); // Convert back to A-Z
        } else {
            decrypted += String.fromCharCode(charValue); // Keep ASCII value for lowercase and others
        }
    }
    return decrypted;
}

document.getElementById("encryptBtn").addEventListener("click", function () {
    const textInput = document.getElementById("textInput").value;

    if (textInput) {
        const encryptedText = encryptMessage(textInput);
        document.getElementById("textInput").value = encryptedText;
        alert("Text has been encrypted!");
    } else {
        alert("Please enter text to encrypt.");
    }
});

document.getElementById("decryptBtn").addEventListener("click", function () {
    const textInput = document.getElementById("textInput").value;
    const privateKeyInput = document.getElementById("privateKey").value; // Get the private key input

    if (textInput) {
        const decryptedText = decryptMessage(textInput, privateKeyInput);
        if (decryptedText !== null) {
            document.getElementById("textInput").value = decryptedText;
            alert("Text has been decrypted!");
        }
    } else {
        alert("Please enter encrypted text to decrypt.");
    }
});

document.getElementById("hideMsgBtn").addEventListener("click", function () {
    document.getElementById("textInput").style.visibility = "hidden";
    alert("Message is hidden.");
});

document.getElementById("showMsgBtn").addEventListener("click", function () {
    const privateKeyInput = document.getElementById("privateKey").value; // Get the private key input

    // Check if the private key is correct
    if (privateKeyInput !== validPrivateKey) {
        alert("Wrong private key! The secret message cannot be shown.");
        return;
    }

    document.getElementById("textInput").style.visibility = "visible";
    alert("Message is now visible.");
});

document.getElementById("saveImageBtn").addEventListener("click", function () {
    const privateKeyInput = document.getElementById("privateKey").value; // Get the private key input
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const imageDisplay = document.getElementById("imageDisplay");
    const textInput = document.getElementById("textInput").value;

    // Check if the private key is correct
    if (privateKeyInput !== validPrivateKey) {
        alert("Incorrect private key! Secret message cannot be encoded.");
        return; // Prevent encoding the message if the key is incorrect
    }

    if (!imageDisplay.src || !textInput) {
        alert("Please upload an image and enter a message.");
        return;
    }

    canvas.width = imageDisplay.width;
    canvas.height = imageDisplay.height;
    ctx.drawImage(imageDisplay, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const binaryMessage = textInput
        .split('')
        .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join('');

    for (let i = 0; i < binaryMessage.length; i++) {
        if (i * 4 < data.length) {
            data[i * 4] = (data[i * 4] & 0xFE) | parseInt(binaryMessage[i], 10);
        }
    }

    ctx.putImageData(imageData, 0, 0);

    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = canvas.toDataURL("image/png");
    downloadLink.download = "hidden_message_image.png";
    downloadLink.style.display = "block";
    downloadLink.textContent = "Download Image with Hidden Message";
});
