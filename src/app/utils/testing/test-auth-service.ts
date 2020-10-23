import { Observable, of } from 'rxjs';

export class TestAuthService {
    user$: Observable<any> = of({ picture: 'https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432', name: 'Ironman'});
    isAuthenticated$: Observable<boolean> = of(true);

}
