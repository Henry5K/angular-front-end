import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})

export class HomeComponent {
    teamMembers = [
        { id: 1, name: 'Henry Thierry', matricula: '01531883', imgUrl: 'https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.668xw:1.00xh;0.119xw,0&resize=1200:*' },
        { id: 2, name: 'João Gabriel', matricula: '01542139', imgUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg' },
        { id: 3, name: 'Eduardo Henrique', matricula: '01530700', imgUrl: 'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg' },
        { id: 3, name: 'João Henrique', matricula: '01531035', imgUrl: 'https://media.istockphoto.com/id/1434414228/photo/stern-sad-cat-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=7AURwT9S7oG_dDkIDHvag4oyy-bAZV7GNZPNBzf-nwE=' },
        { id: 3, name: 'Carlos Vinicius', matricula: '01530125', imgUrl: 'https://c8.alamy.com/comp/FF01GH/face-of-a-tortoiseshell-and-white-manx-cat-felis-catus-FF01GH.jpg' },
        { id: 3, name: 'Ewerton Alexandre', matricula: '01531026', imgUrl: 'https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg' },
    ];
}