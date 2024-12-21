/* document.getElementById("boton-color").addEventListener("click", function colorChange() {
    const body = this.querySelector("body");
    document.body.style.backgroundColor = getRandomColor();
    const colorname = document.getElementById("color-text");    
    colorname.innerHTML(colorName());
    function colorName(hex) {
        const colors = {
            '#FF0000': 'Rojo',
            '#00FF00': 'Verde',
            '#0000FF': 'Azul',
            '#FFFF00': 'Amarillo',
            '#FFA500': 'Naranja',
            '#800080': 'Púrpura',
            '#000000': 'Negro',
            '#FFFFFF': 'Blanco',
            '#808080': 'Gris',
            '#FFC0CB': 'Rosa'
        };
        const hexUpper = hex.toUpperCase();
        return colors[hexUpper] || `Color desconocido (${hex})`;
    }
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}) */
document.getElementById("boton-color").addEventListener("click", function colorChange() {
    // Seleccionamos el body de forma correcta
    const body = document.body;

    // Cambiamos el color de fondo del body
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;

    // Mostramos el nombre del color
    const colorname = document.getElementById("color-text");    
    colorname.textContent = colorName(newColor); // Usar textContent para mostrar el nombre

    function colorName(hex) {
        const colors = {
            '#FF0000': 'Rojo',
            '#00FF00': 'Verde',
            '#0000FF': 'Azul',
            '#FFFF00': 'Amarillo',
            '#FFA500': 'Naranja',
            '#800080': 'Púrpura',
            '#000000': 'Negro',
            '#FFFFFF': 'Blanco',
            '#808080': 'Gris',
            '#FFC0CB': 'Rosa'
        };
        const hexUpper = hex.toUpperCase();
        return colors[hexUpper] || `Color desconocido (${hex})`;
    }
    
    
    
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

