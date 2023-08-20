let products = {
    data: [
        {
            name: 'Chuột Ảo Thuật',
            image: '/img/long-den-chuot-ao-thuat.png',
            Quantity: 'In stock',
            price: '45.000₫'
        },

        {
            name: 'Mèo Nhạc Sĩ',
            image: '/img/long-den-meo-nhac-si.jpg',
            Quantity: 'In stock',
            price: '45.000₫'
        },

        {
            name: 'Nàng Tiên',
            image: '/img/long-den-nang-tien.jpg',
            Quantity: 'In stock',
            price: '25.000₫'
        },

        {
            name: 'Cá Chép',
            image: '/img/long-den-ca-chep.png',
            Quantity: 'In stock',
            price: '45.000₫'
        }
    ]
};

for (let item of products.data) {
    let card = document.createElement('div');
    card.classList.add('flex');
    card.classList.add('items-start');
    card.classList.add('mb-6');
    card.classList.add('tm-menu-item');

    let image = document.createElement('img');
    image.setAttribute('src', item.image);
    image.classList.add('rounded-md');
    image.classList.add('picture');
    image.alt = 'Picture';

    let container = document.createElement('div');
    container.classList.add('ml-3');
    container.classList.add('sm:ml-6');
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
    card.appendChild(image);
    card.appendChild(container);
    document.querySelector('.flex-1').appendChild(card);
};
