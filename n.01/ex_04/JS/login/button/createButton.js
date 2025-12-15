export function createButton(config) {
  const { id, className, text, svgPath, imgSrc} = config;
  if (imgSrc) {
    return `
        <button id="${id}" class="${className}">
            <img src="${imgSrc}" alt="${text}">
            ${text}
        </button>
        `;
  }
  else if(svgPath){
    return `
        <button id="${id}" class="${className}">
            <svg viewBox="0 0 24 24" aria-hidden="true"
                class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-18jsvk2 r-rxcuwo r-1777fci r-m327ed r-494qqr">
                <g>
                    <path d="${svgPath}"></path>
                </g>
            </svg>
            ${text}
        </button>
    `;
  }
  return `
        <button id="${id}" class="${className}">
            ${text}
        </button>
    `;
}
