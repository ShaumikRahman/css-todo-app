let dark;

if (localStorage.getItem('dark') == null) {
    console.log('first time, setting light');
    localStorage.setItem('dark', 'inactive');
    dark = false;
} else if (localStorage.getItem('dark') == 'active') {
    console.log('setting dark theme');
    localStorage.setItem('dark', 'active');
    dark = true;
} else {
    console.log('setting light theme');
    localStorage.setItem('dark', 'inactive');
    dark = false;
}

const darkElements = [
    '.body',
    '.header',
    '.symbol',
    '.check',
    '.search',
    '.main-wrapper',
    '.content-list',
    '.todo-tracker',
    '.remaining',
    '.clear',
    '.alt-buttons',
    '.tracker-button',
    '.tip-text'
];

const darkElementsMultiple = [
    '.todo-check',
    '.todo-text',
    '.tracker-button'
]

if (!dark) {
    darkElements.forEach(element => {
        document.querySelector(element).classList.remove('dark');
    });

    darkElementsMultiple.forEach(elementGroup => {
        document.querySelectorAll(elementGroup).forEach(element => {
            element.classList.remove('dark');
        });
    });
} else {
    darkElements.forEach(element => {
        document.querySelector(element).classList.add('dark');
    });

    darkElementsMultiple.forEach(elementGroup => {
        document.querySelectorAll(elementGroup).forEach(element => {
            element.classList.add('dark');
        });
    });
}

function themeSwitch() {
    if (localStorage.getItem('dark') == 'active') {
        darkElements.forEach(element => {
            document.querySelector(element).classList.remove('dark');
        });

        darkElementsMultiple.forEach(elementGroup => {
            document.querySelectorAll(elementGroup).forEach(element => {
                element.classList.remove('dark');
            });
        });

        localStorage.setItem('dark', 'inactive');
    } else {
        darkElements.forEach(element => {
            document.querySelector(element).classList.add('dark');
        });

        darkElementsMultiple.forEach(elementGroup => {
            document.querySelectorAll(elementGroup).forEach(element => {
                element.classList.add('dark');
            });
        });

        localStorage.setItem('dark', 'active');
    }
}

const symbol = document.querySelector('.symbol');
symbol.addEventListener('click', () => {
    console.log('theme swtiched');
    themeSwitch();
    console.log(`dark is now ${localStorage.getItem('dark')}`);
});