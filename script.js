let keyboardKeys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function initialize() {
    let keyboardEl = document.querySelector('.card-body');

    for (let i = 0; i < keyboardKeys.length; i++) {
        keyboardEl.innerHTML += `
            <div class="key" onclick="showAlphabets('${keyboardKeys[i]}')">
                <p>${keyboardKeys[i]}</p>
            </div>`;
    }

    keyboardEl.innerHTML += `
        <div class="space-key" onclick="spaceBar()">
            <p>SPACE</p>
        </div>

        <div class="send-key key" onclick="sendMessage()">
            <p>
                <i class="fas fa-arrow-circle-right"></i>
            </p>
        </div>
    `;

    document.body.addEventListener('keypress', function (event) {
        if (event.keyCode >= 65 || event.keyCode <= 90) {
            document.querySelector('input').value += String.fromCharCode(event.keyCode);
        }
    });
}

function showAlphabets(locale) {
    document.querySelector('input').value += locale.toLowerCase();
}

function spaceBar() {
    document.querySelector('input').value += " ";
}

function sendMessage() {
    alert("Your Message has been sent");
    window.location.reload();
}

// write your JS code here