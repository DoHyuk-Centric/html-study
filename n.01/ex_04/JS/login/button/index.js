import {createButton} from './createButton.js'

export function buttons(){
    const items = [
        {
            type: 'button',
            id: 'google_btn',
            className: 'btn-api',
            text: 'Sign up with Google',
            imgSrc: 'https://developers.google.com/identity/images/g-logo.png'
        },
        {
            type: 'button',
            id: 'apple_btn',
            className: 'btn-api',
            text: 'Sign up with Apple',
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
        },
        {
            type: 'divider',
        },
        {
            type: 'button',
            id: 'create_btn',
            className: 'btn-signin',
            text: 'Create account'
        },
        {
            className: 'policyfont'
        },
        {
            className: 'alreadyfont'
        },
        {
            type: 'button',
            id: 'signin_btn',
            className: 'btn-api',
            text: 'Sign in'
        },
        {
            type: 'button',
            id: 'getTheApp_btn',
            className: 'btn-api',
            text: 'Get the app',
            svgPath: 'M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z'
        }

    ];

    const container = document.querySelector('.btncontainer');
    
    items.forEach(item =>{
        if(item.type === 'divider'){
            container.innerHTML += `
                <div class="or-divider">
                    <hr class="line">
                    <span>OR</span>
                    <hr class="line">
                </div>
            `;
        }
        else if(item.type === 'button'){
            container.innerHTML += createButton(item);
        }
        else if(item.className === 'policyfont'){
            container.innerHTML += `
                <p class="policyfont">By signing up, you agree to the <a href="https://x.com/en/tos" target="_blank">Terms of Service</a> and <a href="https://x.com/en/privacy" target="_blank">Privacy Policy</a>, including
                <a href="https://help.x.com/en/rules-and-policies/x-cookies" target="_blank">Cookie Use.</a></p>
        `;
        }
        else if(item.className === 'alreadyfont'){
            container.innerHTML += `
                <p class="alreadyfont">Already have an account?</p>
            `
        }
    });
}