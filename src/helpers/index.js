export function showNotification(setter){
    setter(true);
    setTimeout(()=> {
        setter(false);
    }, 2000);
}

export function checkWin(correct, wrong, word){
    let status = 'win';
    
    if(wrong.length === 6){
        status = 'lose';
        return status;
    }
    
    word.split('').forEach(letter => {
        if(!correct.includes(letter)){
            status = '';
        }
    });
    return status;
}