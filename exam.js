const disciplines = [
    "Теоретическая механика",
    "Научно - исследовательский семинар",
    "Проектный семинар 'Python в науке и инженерии'",
    "Системный анализ, управление и обработка информации",
    "Современные методы теории управления",
    "Математический анализ",
    "Операционные системы",
    "Базы данных",
    "Медицинские информационные системы",
    "Системы управления базами данных",
    "Проектирование информационно-управляющих систем",
    "Практикум 'Информационные системы'",
    "Язык ассемблер",
    "Компьютерный практикум 1",
    "Язык программирования Python",
    "Инструментальные средства моделирования",
    "Компьютерный практикум 3",
    "Теория вероятностей и математическая статистика",
    "Линейная алгебра и аналитическая геометрия",
    "Численные методы",
    "Статистическая механика межмолекулярных и поверхностных сил",
    "Функциональные производные и функциональные интегралы в моделировании",
    "Применение вариационного исчисления в задачах современного математического моделирования",
    "Языки программирования",
    "Линейная алгебра",
    "Геометрия",
    "Дискретная математика",
    "Функциональный анализ",
    "Алгебра и геометрия",
    "Нейронные сети в машинном обучении",
    "Промышленное программирование на Python",
    "Промышленное программирование на C/C++",
    "Анализ данных",
    "Анализ данных и машинное обучение",
    "Прикладные модели искусственного интеллекта (семинар наставника)",
    "Математическая логика и теория алгоритмов",
    "Машинное обучение",
    "Статистический анализ и моделирование сложных систем",
    "Моделирование сетей",
    "Теоретические основы информационной безопасности",
    "Численно-аналитические методы моделирования",
    "Моделирование гидродинамических задач",
    "Асимптотические методы",
    "Дополнительные главы компьютерной математики",
    "Дифференциальные уравнения",
    "Алгоритмизация и программирование",
    "Компьютерный практикум 2",
    "Адаптивные системы управления",
    "Теория управления",
    "Математическая теория страхования",
    "Теория функций комплексного переменного",
    "Прикладные стохастические модели и управление",
    "Методы интеллектуальной обработки информации в медицине",
    "Теория случайных процессов",
    "Анализ нелинейных и многофазных процессов",
    "Математические модели нелинейных процессов",
    "Сигналы раннего предупреждения критических переходов в сложных системах",
    "Моделирование временных рядов",
    "Основы веб-программирования",
    "Подготовка и защита Project Proposal по теме ВКР",
    "Основы астрономии",
    "Фильтрация и прогнозирование данных",
    "Стохастические методы в инженерных приложениях",
    "Методы оптимизации",
    "Алгоритмы и структуры данных",
    "Углубленное программирование на С/С++",
    "Углубленное программирование на Python",
    "Многомасштабное моделирование и суперкомпьютерные архитектуры",
    "Уравнения математической физики",
    "Алгебра",
    "Приложения теории операторов и функционального анализа",
    "Системы управления и обработки информации (семинар наставника)",
    "Фундаментальные квантовые принципы и явления",
    "Основы математического моделирования поведения человека",
    "Математическое моделирование человеческого поведения и кооперативных социальных явлений",
    "Системный анализ",
    "Квантовые вычисления"
];

function filterDisciplines(inputText) {
    return disciplines.filter(discipline => discipline.toLowerCase().includes(inputText.toLowerCase()));
}

document.getElementById('subject').addEventListener('input', function() {
    const inputText = this.value;
    const filteredDisciplines = filterDisciplines(inputText);

    const datalist = document.getElementById('disciplineOptions');
    datalist.innerHTML = '';

    filteredDisciplines.forEach(discipline => {
        const option = document.createElement('option');
        option.value = discipline;
        datalist.appendChild(option);
    });
});

document.getElementById('examForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var courseNumber = document.getElementById('courseNumber').value;
    var subject = document.getElementById('subject').value;
    var date = document.getElementById('date').value;
    var startTime = document.getElementById('startTime').value;
    var endTime = document.getElementById('endTime').value;
    var lecturer = document.getElementById('lecturer').value;
    var studentsCount = document.getElementById('studentsCount').value;

    if (studentsCount < 1) {
        alert('Количество студентов должно быть больше либо равно 1.');
        return;
    }

    var output = 'Дисциплина: ' + subject +
                 '\nДата: ' + date +
                 '\nВремя начала: ' + startTime +
                 '\nВремя окончания: ' + endTime +
                 '\nПредседатель комиссии: ' + lecturer +
                 '\nКоличество студентов: ' + studentsCount;
    alert(output);
});

function selectLecturer(fieldId) {
    const selectedFields = document.querySelectorAll('.lecturer-field.selected');
    if (selectedFields.length < 3 || document.getElementById(fieldId).classList.contains('selected')) {
        document.getElementById(fieldId).classList.toggle('selected');
    } else {
        alert('Можно выбрать не более трех преподавателей.');
    }
}

document.getElementById('generateCommissions').addEventListener('click', function() {
    document.getElementById('commissionOptions').style.display = 'block';
});

function selectCommission(variantId) {
    const commissionOptions = document.querySelectorAll('.commission-option');
    commissionOptions.forEach(option => {
        option.querySelector('.empty-box').style.backgroundColor = '#fff';
    });
    document.getElementById(variantId).nextElementSibling.style.backgroundColor = '#add8e6';
}

document.getElementById('generateOrder').addEventListener('click', function() {
    alert('Сформировать распоряжение');
});

document.getElementById('downloadOrder').addEventListener('click', function() {
    alert('Скачать распоряжение');
});

document.getElementById('generateEmailText').addEventListener('click', function() {
    document.getElementById('emailText').value = 'Текст рассылки письма...';
});

document.getElementById('copyEmailText').addEventListener('click', function() {
    const emailText = document.getElementById('emailText');
    emailText.select();
    document.execCommand('copy');
    alert('Текст скопирован');
});
