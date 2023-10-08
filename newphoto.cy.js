describe('Автотесты на покупку нового фото для своего тренера', function () {
    it('Покупка нового фото для своего тренера', function () {
         cy.visit('https://pokemonbattle.me/login');
         cy.get(':nth-child(1) > .auth__input').type('kimeterra@yandex.ru'); //вводим верный логин
         cy.get('#password').type('Yuliza85'); //вводим верный пароль
         cy.get('.auth__button'). should('be.enabled'); //проверяем, что кнопка доступна для нажатия
         cy.get('.auth__button').click(); //клик по кнопке войти
         cy.wait(6000);
         cy.get('.header__btns > [href="/shop"]').click(); //клик по кнопке войти в магазин
         cy.get(':nth-child(2) > .shop__button').click(); //клик по кнопке Купить
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); //вводим номер валидной карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1224'); //вводим срок действия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //вводим код
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('IVANOV IVAN'); //вводим фамилию и имя
         cy.get('.pay-btn').click(); //клик по кнопке Оплатить
         cy.get('#cardnumber').type('56456'); //вводим пароль из смс
         cy.get('.payment__submit-button').click(); //клик по кнопке Отправить
         cy.get('.payment__adv').click(); //клик по кнопке Вернуться в магазин
         cy.get('.header__container > .header__id').click(); //клик по кнопке и проверка изменения фото тренера
        })
})