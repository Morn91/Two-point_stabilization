A = thisComp.layer("Null 1").transform.position;
B = thisComp.layer("Null 2").transform.position;
C = thisComp.layer("Camera 1").transform.position;
x = Math.atan2((A - C)[1], (A - C)[2]);
y = -Math.atan2((A - C)[0], Math.sqrt(Math.pow((A - C)[1], 2) + Math.pow((A - C)[2], 2)));
D = B - C;
D = [D[0], Math.cos(x) * D[1] - Math.sin(x) * D[2], Math.sin(x) * D[1] + Math.cos(x) * D[2]];
D = [Math.cos(y) * D[0] + Math.sin(y) * D[2], D[1], -Math.sin(y) * D[0] + Math.cos(y) * D[2]];
y *= 180 / Math.PI
x *= 180 / Math.PI
z = Math.atan2(D[1], D[0]) * 180 / Math.PI;
[-x, -y, z];