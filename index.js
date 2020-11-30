// Basic way to find matching words and replace them.
function findmeaning (options, latvian) {
    for (i=0; i< options.length; i++) {
        if (options[i] === latvian) {
            
        }
        return 'You are right'
    }
    
}

const options = ['māja', 'mākonis', 'roka', 'ronis'];
const latvian = 'māja';


const answer = findmeaning (options, latvian);
document.getElementById('answer').innerText = answer
