const c = document.getElementById('c');
const ctxC = c.getContext('2d');
    ctxC.fillStyle = '#ff1900';
    ctxC.fillRect(20, 20, 200, 80);
    ctxC.fillStyle = '#fff';
    ctxC.font = '20px Arial';
    ctxC.fillText('HTML5', 30, 70);
    ctxC.beginPath();
    ctxC.arc(400, 100, 60, 0, Math.PI * 2);
    ctxC.strokeStyle = '#4D4D4D';
    ctxC.lineWidth = 4;
    ctxC.stroke();

const d = document.getElementById('d');
const ctxD = d.getContext('2d');
    ctxD.beginPath();
    ctxD.arc(300, 100, 50, 0, Math.PI * 2);
    ctxD.strokeStyle = '#4D4D4D';
    ctxD.lineWidth = 3;
    ctxD.stroke();

const e = document.getElementById('e');
const ctxE = e.getContext('2d');
    ctxE.beginPath();
    ctxE.arc(300, 100, 50, 0, Math.PI * 2);
    ctxE.strokeStyle = '#ff0000';
    ctxE.lineWidth = 3;
    ctxE.stroke();