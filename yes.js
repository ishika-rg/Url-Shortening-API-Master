console.log("Let's Begin !");
const input_box = document.querySelector('#input');
console.log(input_box)
input_box.addEventListener('click', show_str);

const text = document.querySelector('.onClick');
//console.log(text)

const body = document.getElementsByTagName('body')[0];


function show_str() {
    console.log('this is the function')
    // input_box.getAttributeNames('placeholder').style.color = "hsl(0, 87%, 67%)";
    input_box.style.border = "2px solid hsl(0, 87%, 67%)";
    //input_box.name.style.color = "red";
    text.style.visibility = "visible";
    // console.log(text)
}


const main_btn = document.querySelector('.short_btn');
main_btn.addEventListener('click', request);



const output_container = document.querySelector('.output')



function request(url) {
    fetch(`https://api.shrtco.de/v2/shorten?url=${input_box.value}`)

        .then(function (response) {
            //console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            console.log(data.result.full_short_link)



            let output_box = document.createElement('div');
            output_box.classList.add('output_box')
            output_box.innerHTML = `
                            <p>${data.result.original_link}</p>
                            <div class="second">
                                <a href = "#" id ="outputLink">${data.result.short_link}</a>
                                <button class="copy">Copy</button>
                            </div>
                        `


            console.log(output_box)
            // output_container.insertAdjacentElement('afterend', output_box)
            //  document.body.appendChild(output_box)
            output_container.append(output_box)

            input_box.value = ""

            const copy_btn = document.querySelectorAll('.copy')
            console.log(copy_btn);
            copy_btn.forEach(element => {

                element.addEventListener('click', () => {
                    console.log('This is copy link function')
                    element.innerText = "Copied!";
                    element.setAttribute('style', "background-color: hsl(257, 27%, 26%)");

                    copyToClipboard();


                });

            });


        });

}

function copyToClipboard() {
    const output_link = document.querySelectorAll('#outputLink');

    Array.from(output_link).forEach((el) => {
        let val = el.innerText

        return navigator.clipboard.writeText(val);


    })

    // let copyText = eve.target.previousElementSibling.children[1].innerText;



}


const icon = document.querySelector('.icon');

const navbar = document.querySelector('.responsiveNavbar');
//console.log(navbar)
icon.addEventListener('click', function (event) {

    navbar.classList.toggle('display');

});






