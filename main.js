const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');
console.log(checkboxes)

let lastChecked;

function handleCheck(e){
    // chekc if they had the shift key down
    // and check that thet are checking it
    let inBeteween = false;

    if(e.shiftKey && this.checked){
        // go ahead and do what we please

        checkboxes.forEach(checkbox => {

            console.log(checkbox)

            if(checkbox === this || checkbox === lastChecked){
                inBeteween = !inBeteween;
            }

            if(inBeteween){
                checkbox.checked = true;
            }
            
        })
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
