export function mainFont(){

    const item = [
        {
            className: 'h1c',
            text1: 'Happening',
            text2: 'now',
            text3: 'Join today.'
        }
    ]

    const container = document.querySelector('.mainFont');

    item.forEach(item => {
        container.innerHTML += `
            <div class="${item.className}">
                <h1>${item.text1}</h1>
                <h1>${item.text2}</h1>
            </div>
            <p>${item.text3}</p>
        `
    })
}
