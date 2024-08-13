

document.addEventListener('click', function(event) {
   
    const x = event.clientX;
    const y = event.clientY;

    document.getElementById('xCoord').textContent = `X Coordinate: ${x}`;
    document.getElementById('yCoord').textContent = `Y Coordinate: ${y}`;
});
