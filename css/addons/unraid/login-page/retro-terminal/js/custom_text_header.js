
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
  _________ __                 _____.__                 __   
 /   _____//  |______ ________/ ____\\  |   ____   _____/  |_ 
 \\_____  \\\\   __\\__  \\\\_  __ \\   __\\|  | _/ __ \\_/ __ \\   __\\
 /        \\|  |  / __ \\|  | \\/|  |  |  |_\\  ___/\\  ___/|  |  
/_______  /|__| (____  /__|   |__|  |____/\\___  >\\___  >__|  
        \\/           \\/                       \\/     \\/      
        </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
