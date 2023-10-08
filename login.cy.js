describe('Автотесты на форму логина', function () {
    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#loginButton'). should('be.disabled'); //проверяем, что кнопка не активна
         cy.get('#mail').type('german@dolnikov.ru'); //вводим верный логин
         cy.get('#loginButton'). should('be.disabled'); //проверяем, что кнопка не активна
         cy.get('#pass').type('iLoveqastudio1'); //вводим верный пароль
         cy.get('#loginButton'). should('be.enabled'); //проверяем, что кнопка доступна для нажатия
         cy.get('#loginButton').click(); //клик по кнопке войти
         cy.contains('Авторизация прошла успешно').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 
 
    it('Восстановление пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click(); //клик по кнопке Забыли пароль
         cy.get('#restoreEmailButton'). should('be.enabled'); //проверяем, что кнопка Отправить код доступна для нажатия
         cy.get('#mailForgot').type('german@dolnikov.ru'); //вводим email
         cy.get('#restoreEmailButton'). click(); //клик по кнопке Отправить код; 
         cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton'). should('be.disabled'); //проверяем, что кнопка не активна
        cy.get('#mail').type('german@dolnikov.ru'); //вводим валидный логин
        cy.get('#loginButton'). should('be.disabled'); //проверяем, что кнопка не активна
        cy.get('#pass').type('lutik'); //вводим не верный пароль
        cy.get('#loginButton'). should('be.enabled'); //проверяем, что кнопка доступна для нажатия
        cy.get('#loginButton').click(); //клик по кнопке войти
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    
    it('Не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton'). should('be.disabled'); //проверяем, что кнопка не активна
        cy.get('#mail').type('german@mail.ru'); //вводим не верный логин
        cy.get('#loginButton'). should('be.disabled'); //проверяем, что кнопка не активна
        cy.get('#pass').type('iLoveqastudio1'); //вводим верный пароль
        cy.get('#loginButton'). should('be.enabled'); //проверяем, что кнопка доступна для нажатия
        cy.get('#loginButton').click(); //клик по кнопке войти
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton'). should('be.disabled'); //проверяем, что кнопка не активна
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //вводим  e-mail
        cy.get('#loginButton'). should('be.disabled'); //проверяем, что кнопка не активна
        cy.get('#pass').type('iLoveqastudio1'); //вводим верный пароль
        cy.get('#loginButton'). should('be.enabled'); //проверяем, что кнопка доступна для нажатия
        cy.get('#loginButton').click(); //клик по кнопке войти
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
 })
})

 