let products2 = {
    data: [
        {
            name: 'Siêu Nhân Đại Dương',
            image: '/img/long-den-sieu-nhan-dai-duong.png',
            Quantity: 'In stock',
            price: '115.000₫'
        },

        {
            name: 'Siêu Nhân Hoả Lực',
            image: '/img/long-den-sieu-nhan-hoa-luc.png',
            Quantity: 'In stock',
            price: '115.000₫'
        },

        {
            name: 'Siêu Nhân Mặt Trời',
            image: '/img/long-den-sieu-nhan-mat-troi.png',
            Quantity: 'In stock',
            price: '115.000₫'
        },

        {
            name: 'Sự Tích Mèo',
            image: '/img/long-den-su-tich-meo.png',
            Quantity: 'In stock',
            price: '45.000₫'
        }
    ]
};

for (let item of products2.data) {
    let card = document.createElement('div');
    card.classList.add('flex');
    card.classList.add('items-start');
    card.classList.add('justify-end');
    card.classList.add('mb-6');
    card.classList.add('tm-menu-item-2');

    let image = document.createElement('img');
    image.setAttribute('src', item.image);
    image.classList.add('rounded-md');
    image.classList.add('picture');
    image.alt = 'Picture';

    let container = document.createElement('div');
    container.classList.add('text-right');
    container.classList.add('mr-6');
    container.classList.add('center');
    
    let h3 = document.createElement('h3');
    h3.classList.add('text-lg');
    h3.classList.add('sm:text-xl');
    h3.classList.add('mb-2');
    h3.classList.add('sm:mb-3');
    h3.classList.add('tm-text-yellow');
    h3.innerText = item.name;

    let priceS = document.createElement('div');
    priceS.classList.add('text-white');
    priceS.classList.add('text-md');
    priceS.classList.add('sm:text-lg');
    priceS.classList.add('font-light');
    priceS.classList.add('mb-1');
    priceS.classList.add('ml-5');
    priceS.innerText = item.Quantity;

    let priceL = document.createElement('div');
    priceL.classList.add('text-white');
    priceL.classList.add('text-md');
    priceL.classList.add('sm:text-lg');
    priceL.classList.add('font-light');
    priceL.innerText = item.price;

    let icon = document.createElement('span');
    icon.classList.add('icon_check');
    icon.classList.add('fa-solid');
    icon.classList.add('fa-check');

    container.appendChild(h3);
    container.appendChild(icon);
    container.appendChild(priceS);
    container.appendChild(priceL);
    card.appendChild(container);
    card.appendChild(image);
    document.querySelector('.flex-2').appendChild(card);
};
