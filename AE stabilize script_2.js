A = thisComp.layer("Null 1").transform.position;
B = thisComp.layer("Null 2").transform.position;
C = thisComp.layer("Camera 1").transform.position;
alpha = -Math.atan2((A - C)[0], (A - C)[2]);
beta = Math.atan2((A - C)[1], (A - C)[2]);
X = B - C;
X = [X[0], Math.cos(beta) * X[1] - Math.sin(beta) * X[2], Math.sin(beta) * X[1] + Math.cos(beta) * X[2]];
X = [Math.cos(alpha) * X[0] + Math.sin(alpha) * X[2], X[1], -Math.sin(alpha) * X[0] + Math.cos(alpha) * X[2]];
gamma =  Math.atan2(X[1], X[0]);
[-beta / Math.PI * 180, -alpha / Math.PI * 180, gamma / Math.PI * 180]