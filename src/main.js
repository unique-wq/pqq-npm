function pqq_run(options) {
    let images = document.querySelectorAll('.pqq_run');

    if(options.pqq_type === 'hard') {
    options.pqq_type = '0px'
    } else {
        options.pqq_type = '15px'
    }

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.pqq_type} 1px rgba(0,0,0,0.12)`;

        if(options.padding) {
            image.style.padding = '1em';
        }
    
    });
}

module.exports.pqq_run = pqq_run;