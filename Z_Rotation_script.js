xA = thisComp.layer("Null 1").transform.position[0] - transform.position[0];
yA = thisComp.layer("Null 1").transform.position[1] - transform.position[1];
zA = 0;
xB = thisComp.layer("Null 2").transform.position[0] - transform.position[0];
yB = thisComp.layer("Null 2").transform.position[1] - transform.position[1];
zB = 0;
xC = 0;
yC = 0;
zC = transform.position[2];
xn = xA - xC;
yn = yA - yC;
zn = zA - zC;
A1 = xn;
B1 = yn;
C1 = zn;
D1 = -xC * xn - yC * yn - zC * zn;
A2 = (yB - yA) * (zC - zA) - (zB - zA) * (yC - yA);
B2 = - (xB - xA) * (zC - zA) - (zB - zA) * (xC - xA);
C2 = (xB - xA) * (yC - yA) - (yB - yA) * (xC - xA);
D2 = -xA * ((yB - yA) * (zC - zA) - (zB - zA) * (yC - yA)) + yA * ((xB - xA) * (zC - zA) - (zB - zA) * (xC - xA)) - zA * ((xB - xA) * (yC - yA) - (yB - yA) * (xC - xA));
xD = -D1 / A1;
yD = 0;
zD = 0;
xE = (B2 * D1 / B1 - D2) / (A2 - B2 * A1 / B1);
yE = - (A1 * xE + D1) / B1;
zE = 0;
ED = Math.sqrt(Math.pow(xE - xD, 2) + Math.pow(yE - yD, 2) + Math.pow(zE - zD, 2));
DC = Math.sqrt(Math.pow(xD - xC, 2) + Math.pow(yD - yC, 2) + Math.pow(zD - zC, 2));
CE = Math.sqrt(Math.pow(xC - xE, 2) + Math.pow(yC - yE, 2) + Math.pow(zC - zE, 2));
EDC = Math.acos((Math.pow(DC, 2) + Math.pow(CE, 2) - Math.pow(ED, 2)) / 2 / DC / CE) / Math.PI * 180;
if ((xE > xD && yE > yD) || (xE < xD && yE < yD)) EDC;
else - EDC;