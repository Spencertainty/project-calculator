const data = [
    {
        class: "btn clear",
        click: () => clearAll(),
        text: "C"
    }, {
        class: "btn",
        click: () => percent(),
        text: "%"
    }, {
        class: "btn",
        click: () => negate(),
        text: "+/-"
    }, {
        class: "btn",
        click: () => operate("/"),
        text: "/"
    }, {
        class: "btn",
        click: () => digit("7"),
        text: "7"
    }, {
        class: "btn",
        click: () => digit("8"),
        text: "8"
    }, {
        class: "btn",
        click: () => digit("9"),
        text: "9"
    }, {
        class: "btn",
        click: () => operate("*"),
        text: "*"
    }, {
        class: "btn",
        click: () => digit("4"),
        text: "4"
    }, {
        class: "btn",
        click: () => digit("5"),
        text: "5"
    }, {
        class: "btn",
        click: () => digit("6"),
        text: "6"
    }, {
        class: "btn",
        click: () => operate("-"),
        text: "-"
    }, {
        class: "btn",
        click: () => digit("1"),
        text: "1"
    }, {
        class: "btn",
        click: () => digit("2"),
        text: "2"
    }, {
        class: "btn",
        click: () => digit("3"),
        text: "3"
    }, {
        class: "btn",
        click: () => operate("+"),
        text: "+"
    }, {
        class: "btn",
        click: () => dot(),
        text: "."
    }, {
        class: "btn",
        click: () => digit("0"),
        text: "0"
    }, {
        class: "btn",
        click: () => backspace(),
        text: "<<"
    }, {
        class: "btn equals",
        click: () => equals(),
        text: "="
    }
];