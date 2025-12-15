/** footer 내용 */
export function footerDiv() {
  const footerItems = [
    {text:"About", href:"https://about.x.com/en"},
    {text:"Download the X app", href:"https://help.x.com/en/using-x/download-the-x-app" },
    {text:"Grok", href:"https://apps.apple.com/us/app/grok/id6670324846"},
    {text:"Help Center", href:"https://help.x.com/en"},
    {text:"Terms of Service", href:"https://x.com/en/tos"},
    {text:"Privacy Policy", href:"https://x.com/en/privacy"},
    {text:"Cookie Policy", href:"https://help.x.com/en/rules-and-policies/x-cookies"},
    {text:"Accessibility", href:"https://help.x.com/en/resources/accessibility"},
    {text:"Ads info", href:"https://business.x.com/en/help/troubleshooting/how-x-ads-work"},
    {text:"Blog", href:"https://blog.x.com/"},
    {text:"Careers", href:"https://x.ai/careers"},
    {text:"Brand Resources", href:"https://about.x.com/en/who-we-are/brand-toolkit"},
    {text:"Advertising", href:"https://business.x.com/en/advertising?ref=gl-tw-tw-twitter-advertise"},
    {text:"Marketing", href:"https://business.x.com/en"},
    {text:"X for Business", href:"https://business.x.com/en?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"},
    {text:"Developers", href:"https://business.x.com/en?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"},
    {text:"News", href:"https://x.com/i/jf/stories/home"},
    {text:"Settings", href:"https://x.com/settings"},
    {text:"© 2025 X Corp."}
  ];

  const footer = document.getElementById("footer");
  footer.innerHTML = footerItems
    .map((item, index) =>
      index === footerItems.length - 1
        ? `<div>${item.text}</div>`
        : `<div><a href="${item.href}" target="_blank">${item.text}</a></div><span class="footerline">|</span>`
    )
    .join("");
}