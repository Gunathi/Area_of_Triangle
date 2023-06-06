function Area() {
    let b = parseFloat(document.getElementById('base').value);
    let h = parseFloat(document.getElementById('height').value);

    document.getElementById('area').value = 0.5*b*h;
}