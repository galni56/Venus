//Переключение шагов регистрации.
const registrationNextStep = document.getElementsByClassName('btn-next')

//Перебор кнопок из набора.
//Позволяет добавлять любою количество шагов и кнопок для переключения
//Необходимо добавить айди шагу и это же свойстве кнопке переключения
for (let i = 0; i < registrationNextStep.length; i++) {
    registrationNextStep[i].addEventListener("click", function() {
        //Получение айди для открытия шага из данны-аттрибута кнопки
        let toNextStep = registrationNextStep[i].getAttribute('data-attr');

        //Скрыть шаг в котором лежит кнопка и открытие следующего
        registrationNextStep[i].parentElement.style.display = 'none';
        document.getElementById(toNextStep).style.display = 'block';
    });
}
